const express = require('express')
const app = express()
const http = require('http').createServer(app)
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

http.listen(8080, () => {
    console.log('Listening on http://localhost:4000')
})
