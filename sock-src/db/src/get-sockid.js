const client = require('./connection')

async function get_sockid (email) {
    const select = 'SELECT socket_id FROM session WHERE email = $1'
    try {
        const result = await client.query (select, [email])
        return result.rows[0].socket_id

    } catch(err) {
        return undefined
    }

}   

module.exports = get_sockid