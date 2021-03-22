const client = require('./connection')
const cryptoRandomString = require('crypto-random-string')

async function create_user (email, password, name) {
    const pid = await cryptoRandomString.async({length: 10})
    // check if it is unique

    const insert = 'INSERT INTO users VALUES($1, $2, $3, $4)'
    
    const values = [email, password, name, pid]
    // check email is valid
    try {

        const res = await client.query (insert, values)
        if (res.rowCount == 1) {
            return 'success'
        } else {
            return 'failure'
        }
    } catch (err) {
        console.log(err)
        return 'failure'
    }
}



module.exports = create_user