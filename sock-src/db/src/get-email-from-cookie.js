const client = require('./connection')

async function get_email_from_cookie (cookie) {
    const select = 'SELECT users.email FROM users, session WHERE users.email = session.email AND session.session_cookie = $1'
    const values = [cookie]

    try {
        const result = await client.query (select, values)
        return result.rows[0].email

    } catch (err) {
        console.log(err)
    }
}

module.exports = get_email_from_cookie