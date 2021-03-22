const client = require('./connection')

async function friend_list (pid) {
    const select = 'SELECT users.email, users.name, status FROM users, friends WHERE users.email = friends.email AND friends.pid = $1'
    const values = [pid]

    try {
        const result = await client.query(select, values)
        return result.rows
    } catch (err) {
        console.log(err)
    }
}

module.exports = friend_list