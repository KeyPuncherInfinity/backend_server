const client = require('./connection')

async function get_email_from_sockid (sockid) {
    const select = 'SELECT email FROM session WHERE socket_id = $1'
    const values = [sockid]

    try {
        const result = await client.query (select, values)
        return result.rows[0].email

    } catch (err) {
        console.log(err)
    }
}

module.exports = get_email_from_sockid