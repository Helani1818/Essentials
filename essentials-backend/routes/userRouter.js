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

router.get('/logout', userControl.logout)

router.patch('/update', auth, userControl.updateUser)

router.patch('/update_role/:id', auth, authAdmin, userControl.updateUserRole)

router.delete('/delete/:id', auth, authAdmin, userControl.delateUser)

// Social Login
router.post('/google_login', userControl.googleLogin)


module.exports = router