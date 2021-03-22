const client = require('./connection')

async function connect_user (cookie, sockid) {

    const insert = 'UPDATE session SET socket_id = $1 WHERE session_cookie = $2'
    values = [sockid, cookie]
    try {
        const result = await client.query(insert, values)
        if (result.rowCount == 1) {
            return 'success'
        } else {
            return 'error'
        }
    } catch (err) {
        return 'error'
    }
}



module.exports = connect_user