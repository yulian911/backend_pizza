const Router = require('express')
const router =new Router()


const pizzasRouter =require("./pizzasRouter")
const typesRouter =require("./typesRouter")
const categoryRouter =require("./categoryRouter")
const sizesRouter =require("./sizesRouter")
const authRouter =require("./authRouter")

router.use('/pizzas',pizzasRouter)
router.use('/types',typesRouter)
router.use('/category',categoryRouter)
router.use('/size',sizesRouter)
router.use('/',authRouter)
module.exports =router
