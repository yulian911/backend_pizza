const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('types', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "types_name_key"
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
    tableName: 'types',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "types_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "types_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
