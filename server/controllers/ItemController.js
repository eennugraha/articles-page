const { tokenVerifier } = require("../helpers/jsonwebtoken");
const { item, user } = require("../models");

class ItemController {
  static async getAllItems(req, res) {
    try {
      let items = await item.findAll({
        include: [user],
      });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { title, content, posting, image } = req.body;
      const userId = +req.userData.id;

      // console.log(req.body);
      let result = await item.create({
        title,
        content,
        posting,
        image,
        userId,
      });
      // console.log(result);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { title, content, posting } = req.body;
      let result = await item.update(
        {
          title,
          content,
          posting,
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
      let result = await item.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }

  static async getItemById(req, res) {
    try {
      const id = +req.params.id;
      let result = await item.findByPk(id, { include: [user] });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}

module.exports = ItemController;
