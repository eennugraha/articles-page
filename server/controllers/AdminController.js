const { admin } = require("../models");
const { decryptPwd, encryptPwd } = require("../helpers/bcrypt");

class AdminController {
  static async getAllAdmins(req, res) {
    try {
      let admins = await admin.findAll();
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, email, password } = req.body;
      let result = await admin.create({
        name,
        email,
        password,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let adminFound = await admin.findOne({
        where: { email },
      });

      if (adminFound) {
        if (decryptPwd(password, adminFound.password)) {
          res.status(200).json(adminFound);
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
      const { name, email, password } = req.body;
      let result = await admin.update(
        {
          name,
          email,
          password: encryptPwd(password),
        },
        { where: { id } }
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await admin.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }

  static async getAdminById(req, res) {
    try {
      const id = +req.params.id;
      let result = await admin.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}

module.exports = AdminController;
