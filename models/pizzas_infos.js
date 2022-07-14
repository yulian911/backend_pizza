const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pizzas_infos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pizzaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pizzas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pizzas_infos',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pizzas_infos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
