const express = require('express')
const app = express()
const http = require('http').createServer(app)
const sock = require('socket.io')
const nodeCookie = require('node-cookie')
const cryptoRandomString = require('crypto-random-string')

const db = require('./sock-src/db/db')

 
 
app.use(express.static(__dirname + '/app'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))



app.get('/', (req, res) => {
    res.sendFile('./app/index.html', {root: __dirname})
})
app.get('/signup', (req, res) => {
    res.setHeader('Location', '/')
    res.sendFile('./app/index.html', {root: __dirname})
}) 
app.get('/login', (req, res) => {
    res.sendFile('./app/index.html', {root: __dirname})
})

app.post('/signup', async (request, response) => {
    const result = await db.create_user(request.body.email, request.body.password, request.body.name)
    if (result == 'success') {
        response.send('ok')        
    } else {
        response.send('error')
    }

})

app.post('/login', async (request, response) => {
    
    const result = await db.authenticate_user(request.body.email, request.body.password)
    if (result == 'authenticated') {
        const cookie = await cryptoRandomString.async({length: 10}) 
        nodeCookie.create(response, 'UID', cookie)
        db.login_user(request.body.email, cookie)        
        response.send('ok')
    } else {
        response.send('error')
    }
})

app.get('/logout', async (request, response) => {
    const result = await db.logout_user(nodeCookie.get(request, 'UID'))
    if (result == 'success') {
        nodeCookie.clear(response, 'UID')
        response.send('ok')
    }
})

app.get('/account', async (request, response) => {
    const result = {
        name: await db.get_name_from_cookie(nodeCookie.get(request, 'UID')),
        email: await db.get_email_from_cookie(nodeCookie.get(request, 'UID'))
    }
    response.send(result)
})

app.get('/friend', async (request, response) => {
    const cookie = nodeCookie.get(request,'UID')
    const pid = await db.get_pid_from_email(await db.get_email_from_cookie(cookie))
    const result = await db.friend_list(pid)
    response.send(result)
})

///////////////////////////////////////////////////////////////////////////

const socket = sock.listen(http)

socket.on('connection', (conn) => {
    
    const cookie = conn.handshake.query.UID
    db.connect_user(cookie, conn.id)
    console.log(conn.id) 
    conn.on('add_friend', async (data) => {
        // conn.id , data.email
        const sender = {
            email: await db.get_email_from_sockid(conn.id),
        }
        sender.pid = await db.get_pid_from_email(sender.email)

        const reciever = {
            email: data.email,
            pid: await db.get_pid_from_email(data.email)
        }
        db.add_friend(sender, reciever)
        conn.emit('refresh_recipient_list')
        conn.to(await db.get_sockid(data.email)).emit('refresh_recipient_list')
    })

    conn.on('accept_request', async (data) => {
        const email = data
        if (await db.get_email_from_sockid(conn.id) == email.requestTo) {
            const pid = {
                requestFrom: await db.get_pid_from_email(email.requestFrom),
                requestTo: await db.get_pid_from_email(email.requestTo)
            }

            console.log(email, pid)
            const result = await db.accept_request(email, pid)
            if (result == 'ok') {
                conn.emit('refresh_recipient_list')
                conn.to(await db.get_sockid(email.requestFrom)).emit('refresh_recipient_list')
            }
        }
    })

    conn.on('decline_request', async (data) => {
        const email = data
        if (await db.get_email_from_sockid(conn.id) == email.requestTo) {
            const pid = {
                requestFrom: await db.get_pid_from_email(email.requestFrom),
                requestTo: await db.get_pid_from_email(email.requestTo)
            }

            console.log(email, pid)
            const result = await db.decline_request(email, pid)
            if (result == 'ok') {
                conn.emit('refresh_recipient_list')
                conn.to(await db.get_sockid(email.requestFrom)).emit('refresh_recipient_list')
            }
        }
    })

    conn.on('message', async (message) => {
        console.log(message)
        let sender = {
            email: await db.get_email_from_sockid(conn.id)
        }
        let reciever = {
            sockid: await db.get_sockid(message.recipient)
        }
        if (await db.check_friend_status(sender.email, await db.get_pid_from_email(message.recipient)) == 'friends') {
            message.type = 'incoming'
            message.sender = sender.email
            delete message.recipient
            conn.to(reciever.sockid).emit('message', message)
        }
    })


})

///////////////////////////////////////////////////////////////////////////////////////////////

http.listen(8080, () => {
    console.log('Listening on http://warm-classy-quiet.glitch.me')
})