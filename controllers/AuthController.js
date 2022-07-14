const ApiError = require("../error/ApiError")
const { Users } = require("../models/models")
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const{validationResult} =require('express-validator')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
  }

class AuthController{
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Nie poprawne hasło lub mail'))
        }
        const candidate = await Users.findOne({where: {email}})
        /// sprawdzamy czy użytkownik istnieje
        if (candidate) {
            return next(ApiError.badRequest('Użytkownik z takim emailem istnieje'))
        }
        // haszujemy hasło 
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({email, role, password: hashPassword})
        // tworzymy koszyk dla usera

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req,res,next){
        const {email,haslo} = req.body

        const user = await Users.findOne({where:{email}})
        if(!user){
            return next(ApiError.badRequest('nie odnaleziono użytkownika'))
        }

        const errors =validationResult(req)
        if(!errors.isEmpty()){
          return next(ApiError.badRequest(errors.array().map(e=>e.msg)))
        }
        const comparePassword= bcrypt.compareSync(haslo,user.password)

        if (!comparePassword){
            return next(ApiError.internal('Nie prawidłowe hasło'))
        }
        const token =generateJwt(user.id,user.email,user.role)

        return res.json(token)

    }
}

module.exports = new AuthController()