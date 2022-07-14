var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _pizzas = require("./pizzas");
var _pizzas_infos = require("./pizzas_infos");
var _sizes = require("./sizes");
var _types = require("./types");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var pizzas = _pizzas(sequelize, DataTypes);
  var pizzas_infos = _pizzas_infos(sequelize, DataTypes);
  var sizes = _sizes(sequelize, DataTypes);
  var types = _types(sequelize, DataTypes);

  pizzas_infos.belongsTo(pizzas, { as: "pizza", foreignKey: "pizzaId"});
  pizzas.hasMany(pizzas_infos, { as: "pizzas_infos", foreignKey: "pizzaId"});
  sizes.belongsTo(pizzas, { as: "pizza", foreignKey: "pizzaId"});
  pizzas.hasMany(sizes, { as: "sizes", foreignKey: "pizzaId"});
  types.belongsTo(pizzas, { as: "pizza", foreignKey: "pizzaId"});
  pizzas.hasMany(types, { as: "types", foreignKey: "pizzaId"});

  return {
    categories,
    pizzas,
    pizzas_infos,
    sizes,
    types,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
