const Router = require('express');
const TypeController = require('../controllers/TypeController');
const router =new Router()

// router.post('/')
router.post('/',TypeController.create)
router.get('/',TypeController.getAll)



module.exports =router