const {Sizes}= require('../models/models')
const ApiError = require('../error/ApiError')

class SizeController {
    async create(req,res){
        const {name}= req.body
        const type = await Sizes.create({name})
        return res.json(type)

    }
    async getAll(req,res){
        const types = await Sizes.findAll()
        return res.json(types)
    }

    
}

module.exports = new SizeController()