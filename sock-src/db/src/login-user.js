const client = require('./connection')

async function login_user (email, cookie) {

    const update = 'UPDATE session SET session_cookie = $2 WHERE email = $1'
    const insert = 'INSERT INTO session VALUES ($1, $2)'
    const values = [email, cookie]

    try {
        const result = await client.query (update, values)
        if (result.rowCount == 1) {
            return 'success'
        } else {
            const result = await client.query(insert, values)
            if (result.rowCount == 1) {
                return 'success'
            } else {
                return 'error'
            }
        }
    } catch (err) {
        return 'error'
    }
}


module.exports = login_user