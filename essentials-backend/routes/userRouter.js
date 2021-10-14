const router = require('express').Router()
const userControl = require('../controllers/userControl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/register', userControl.register)

router.post('/activation', userControl.activateEmail)

router.post('/login', userControl.login)

router.post('/refresh_token', userControl.getAccessToken)

router.post('/forgot', userControl.forgotPassword)

router.post('/reset', auth, userControl.resetPassword)

router.get('/info', auth, userControl.getUserInfo)

router.get('/all_info', auth, authAdmin, userControl.getUsersAllInfo)

module.exports = router