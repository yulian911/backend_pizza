const Router = require('express');
const SizeController = require('../controllers/SizeController');
const router =new Router()

// router.post('/')
router.post('/',SizeController.create)
router.get('/',SizeController.getAll)



module.exports =router