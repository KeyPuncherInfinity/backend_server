const client = require('./connection')

async function authenticate_user (email, password) {
    const select = 'SELECT password FROM users WHERE email = $1'
    const values = [email]

    try {
        
        const result = await client.query(select, values)
        if (result.rows[0].password == password) {
            return 'authenticated'
        } else {
            return 'pass_mismatch'
        }
    } catch (err) {
        return 'email_mismatch'
    }
}

module.exports = authenticate_user