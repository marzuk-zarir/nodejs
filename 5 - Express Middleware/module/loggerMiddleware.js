const logger = (options) => {
    return (req, res, next) => {
        if (options.log) {
            const loggingDate = new Date(Date.now()).toLocaleTimeString()
            console.log(`${loggingDate} ${req.method} - ${req.originalUrl}`)
            next()
        } else {
            next()
        }
    }
}

module.exports = logger
