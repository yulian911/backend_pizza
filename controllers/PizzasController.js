const {Pizzas,PizzasInfo,Types,Sizes}= require('../models/models')
const ApiError = require('../error/ApiError')

class PizzasController{
    async create(req,res){
        const {imageUrl,title,types,sizes,price,categoryId,info}= req.body
        const type = await Pizzas.create({imageUrl,title,price,categoryId})
       
        if (types) {
            // const type = JSON.parse(types)
            types.forEach(i =>
                Types.create({
                    name: i.name,
                    pizzaId: type.id
                })
            )
        }
        if (sizes) {
            // const size = JSON.parse(sizes)
            sizes.forEach(i =>
                Sizes.create({
                    name: i.name,
                    pizzaId: type.id
                })
            )
        }

        if (info) {
            // const inf = JSON.parse(info)
            info.forEach(i =>
                PizzasInfo.create({
                    title: i.title,
                    description: i.description,
                    pizzaId: type.id
                })
            )
        }

        return res.json(type)
    }
    async getAll(req,res){
        const types = await Pizzas.findAll()
        return res.json(types)
    }
    async getOne(req,res){
       
        const {id}=req.params

        const device =await Pizzas.findOne(
            {
                where:{id},
                include:[
                    {model:PizzasInfo,as:'info'},
                    {model:Types,as:'types'},
                    {model:Sizes,as:'sizes'},
            ]
            },  
        )
        return res.json(device)
    }

    
}

module.exports = new PizzasController()