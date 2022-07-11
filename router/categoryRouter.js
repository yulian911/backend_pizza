const Router = require('express');
const CategoryController = require('../controllers/CategoryController');
const router =new Router()

// router.post('/')
router.post('/',CategoryController.create)
router.get('/',CategoryController.getAll)



module.exports =router