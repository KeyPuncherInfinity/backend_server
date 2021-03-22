
log = {
    print: (message) => {
        let time = new Date().toLocaleTimeString()
        console.log(time + ': ' + message)
    }
}

module.exports = log