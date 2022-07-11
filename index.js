require('dotenv').config()
const express =require('express');
const cors = require('cors');
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
// const models = require('./models/models')
const errorHandler =require('./middleware/ErrorHandingMiddleware')
const router = require('./router/index')
const PORT =process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())
// app.use(fileUpload({}))
// aby dodawac obrazy 
// app.use(express.static(path.resolve(__dirname,'static')))


app.use('/api/',router)



//musi zawsze byc na koncu ,obróbka błędów
app.use(errorHandler)



const start =async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{
            console.log("Server started" ,PORT)
        })
    }catch(err){
        console.log(err)
    }
}
start()


