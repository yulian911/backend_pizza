const {Catygory}= require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
    async create(req,res){
        const {name}= req.body
        const type = await Catygory.create({name})
        return res.json(type)

    }
    async getAll(req,res){
        const types = await Catygory.findAll()
        return res.json(types)
    }

    
}

module.exports = new CategoryController()