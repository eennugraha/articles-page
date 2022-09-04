"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.user);
    }
  }
  item.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Title cannot be empty!",
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Content cannot be empty!",
          },
        },
      },
      posting: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (item, option) {
          item.posting = item.posting || 0;
        },
      },
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
