const itemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");

itemRoute.get("/", ItemController.getAllItems);
itemRoute.post("/", ItemController.create);
itemRoute.put("/:id", ItemController.update);
itemRoute.delete("/:id", ItemController.delete);
itemRoute.get("/entry/:id", ItemController.getItemById);

module.exports = itemRoute;
