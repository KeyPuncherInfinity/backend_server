const client = require('./connection')

async function logout_user (cookie) {
    const del = 'DELETE FROM session WHERE session_cookie = $1'
    const values = [cookie]

    try {
        const result = await client.query(del, values)
        if (result.rowCount == 1) {
            return 'success'
        } else {
            return 'error'
        }
    } catch (err) {
        return 'error'
    }
}

module.exports = logout_user