const sequelize = require('../db')
const {DataTypes} = require('sequelize')



  const Pizzas= sequelize.define('pizzas',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    imageUrl: {type: DataTypes.STRING, allowNull: false},
    title:{type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    categoryId:{type: DataTypes.INTEGER,allowNull: false}
  })
  const Users= sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, allowNull: false,unique: true},
    role:{type: DataTypes.STRING, allowNull: false},
    password:{type: DataTypes.STRING, allowNull: false}
   
  })
  const PizzasInfo = sequelize.define('pizzas_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
  })
  const Types = sequelize.define('types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
  })
  
  const Sizes = sequelize.define('sizes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false},
  })
  const Catygory =sequelize.define('category',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
  })

  Pizzas.hasMany(PizzasInfo, {as: 'info'});
  PizzasInfo.belongsTo(Pizzas)

  Pizzas.hasMany(Types, {as: 'types'});
  Types.belongsTo(Pizzas)

  Pizzas.hasMany(Sizes, {as: 'sizes'});
  Sizes.belongsTo(Pizzas)



  module.exports = {
    Pizzas,
    PizzasInfo,
    Types,
    Sizes,
    Catygory,
    Users
  }
  
  