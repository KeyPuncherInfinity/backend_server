const client = require('./connection')

async function _test_connection () {
    try {
        client.query('SELECT * FROM test_connection', (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res.rows[0].message)
            }
        })
    } catch(err) {
        console.log(err)
    }
}

module.exports = _test_connection