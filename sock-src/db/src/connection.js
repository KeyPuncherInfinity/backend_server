const {Client} = require('pg')

const client = new Client({
    user: 'mlrlugbq',
    host: 'satao.db.elephantsql.com',
    database: 'mlrlugbq',
    password: 'DpxSGF-BQmscIthTL5A2YZVUF1txgDHX',
    port: 5432
  })

client.connect((err) => {
    if (err) {
        console.log(err)
    }
})

module.exports = client