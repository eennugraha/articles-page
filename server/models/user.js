"use strict";
const { Model } = require("sequelize");
const { encryptPwd } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name cannot be empty!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email cannot be empty!",
          },
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password cannot be empty!",
          },
        },
      },
      dateOfBirth: DataTypes.DATE,
      address: DataTypes.TEXT,
      education: DataTypes.TEXT,
      orgExp: DataTypes.TEXT,
      workExp: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (user, option) {
          user.password = encryptPwd(user.password);
          user.dateOfBirth = user.dateOfBirth || "1900-01-01";
          user.address = user.address || "User's address";
          user.education = user.education || "User's educations history";
          user.orgExp = user.orgExp || "User's organizational experiences";
          user.workExp = user.workExp || "User's work experiences";
          user.image = user.image || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
