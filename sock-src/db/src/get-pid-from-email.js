const client = require('./connection')

async function get_pid_from_email (email) {
    const select = 'SELECT pid FROM users WHERE email = $1'
    const values = [email]

    try {
        const result = await client.query (select, values)
        return result.rows[0].pid
    } catch (err) {
        console.log(err)
    }
}

module.exports = get_pid_from_email