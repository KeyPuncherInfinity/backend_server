const http = require('http').createServer()
const socket = require('socket.io')(http, {cors: '*'})
const log = require('./sock-src/log/log')
const db = require('./sock-src/db/db')
const { Connection } = require('pg')

socket.on('connection', (conn) => {
    
    const cookie = conn.handshake.query.UID
    db.connect_user(cookie, conn.id)

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
        sender = {
            email: await db.get_email_from_sockid(conn.id)
        }
        reciever = {
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

http.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})

db.test_connection()

