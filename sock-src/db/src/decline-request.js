const client = require('./connection')

async function decline_request (email, pid) {
    const del = 'DELETE FROM friends WHERE email = $1 AND pid = $2'
    const value_1 = [email.requestFrom, pid.requestTo]
    const value_2 = [email.requestTo, pid.requestFrom]

    try {
        const result_1 = await client.query(del, value_1)
        const result_2 = await client.query(del, value_2)

        if (result_1.rowCount == 1 && result_2.rowCount == 1) {
            return 'ok'
        } else {
            return 'error'
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = decline_request