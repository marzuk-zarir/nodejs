const userController = (req, res) => {
    console.log(req.app.get('app name'))
    res.send('Hello...this is from controller')
}

module.exports = userController
