
const Router = require('express');
const authController = require('../controllers/AuthController');
const router =new Router()

// router.post('/')
router.post('/users/registration',authController.registration)
router.post('/users/login',authController.login)



module.exports =router