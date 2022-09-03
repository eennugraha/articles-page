const { user } = require("../models");
const { decryptPwd, encryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let users = await user.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, email, password } = req.body;
      let result = await user.create({
        name,
        email,
        password,
      });
      res.status(201).json(result);
    } catch (err) {
      if (err.name === "SequelizeUniqueConstraintError") {
        res.status(403).json({
          message: "Email already exists",
        });
      } else {
        res.status(500);
        res.send({ status: "error", message: "Something went wrong" });
      }
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let userFound = await user.findOne({
        where: { email },
      });

      if (userFound) {
        if (decryptPwd(password, userFound.password)) {
          let accessToken = tokenGenerator(userFound);
          res.status(200).json({ accessToken });

          // let verifyToken = tokenVerifier(accessToken);
          // console.log(verifyToken);
        } else {
          res.status(401).json({
            message: "Invalid password!",
          });
        }
      } else {
        res.status(404).json({
          message: "Admin not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        email,
        password,
        dateOfBirth,
        address,
        education,
        organizationExp,
        workExp,
      } = req.body;
      let result = await user.update(
        {
          name,
          email,
          password: encryptPwd(password),
          dateOfBirth,
          address,
          education,
          organizationExp,
          workExp,
        },
        { where: { id } }
      );
      res.status(201).json(result);
    } catch (err) {
      if (err.name === "SequelizeUniqueConstraintError") {
        res.status(403).json({
          message: "Email already exists",
        });
      } else {
        res.status(500);
        res.send({ status: "error", message: "Something went wrong" });
      }
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}

module.exports = UserController;
