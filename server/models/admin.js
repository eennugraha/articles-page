"use strict";
const { encryptPwd } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Name cannot be empty!`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Email cannot be empty!`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `Password cannot be empty!`,
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (admin, option) {
          admin.password = encryptPwd(admin.password);
        },
        // beforeUpdate: function (admin, option) {
        //   admin.password = encryptPwd(admin.password);
        // },
      },
      sequelize,
      modelName: "admin",
    }
  );
  return admin;
};
