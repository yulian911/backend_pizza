const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sizes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "sizes_name_key"
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
    tableName: 'sizes',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "sizes_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "sizes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
