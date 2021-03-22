const client = require('./connection')

async function get_name_from_email (email) {
    const select = 'SELECT name FROM users WHERE email=$1'
    const values = [email]

    try {
        const result = await client.query (select, values)
        return result.rows[0].name

    } catch (err) {
        console.log(err)
    }
}

module.exports = get_name_from_email