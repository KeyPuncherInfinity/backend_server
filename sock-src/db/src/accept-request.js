const client = require('./connection')

async function accept_request (email, pid) {
    const update = 'UPDATE friends SET status = $1 WHERE email = $2 AND pid = $3'
    const value_1 = ['friends', email.requestFrom, pid.requestTo]
    const value_2 = ['friends', email.requestTo, pid.requestFrom]

    try {
        const result_1 = await client.query(update, value_1)
        const result_2 = await client.query(update, value_2)

        if (result_1.rowCount == 1 && result_2.rowCount == 1) {
            return 'ok'
        } else {
            return 'error'
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = accept_request