const {Client} = require('pg')

const client = new Client()

client.connect((err) => {
    if (err) {
        console.log(err)
    }
})

module.exports = client