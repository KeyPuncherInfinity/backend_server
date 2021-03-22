const client = require('./connection')

async function add_friend (sender, reciever) {
    const insert = 'INSERT INTO friends VALUES ($1, $2, $3)'
    const values_waiting = [sender.pid, reciever.email, 'waiting']
    const values_pending = [reciever.pid, sender.email, 'pending']

    try {
        const result_1 = await client.query (insert, values_waiting)
        const result_2 = await client.query (insert, values_pending)
        
        if (result_1.rowCount == 1 && result_2.rowCount == 1) {
            return 'ok'
        } else {
            return 'error'
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = add_friend