const Router = require('express');
const PizzasController = require('../controllers/PizzasController');
const router =new Router()

// router.post('/')
router.post('/',PizzasController.create)
router.get('/',PizzasController.getAll)
router.get('/:id',PizzasController.getOne)



module.exports =router