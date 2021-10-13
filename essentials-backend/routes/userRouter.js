const router = require('express').Router()
const userControl = require('../controllers/userControl')

router.post('/register', userControl.register)

router.post('/activation', userControl.activateEmail)

router.post('/login', userControl.login)

router.post('/refresh_token', userControl.getAccessToken)


module.exports = router