const adminRoute = require("express").Router();
const AdminController = require("../controllers/AdminController");

adminRoute.get("/", AdminController.getAllAdmins);
adminRoute.post("/", AdminController.create);
adminRoute.post("/login", AdminController.login);
adminRoute.put("/:id", AdminController.update);
adminRoute.delete("/:id", AdminController.delete);
adminRoute.get("/account/:id", AdminController.getAdminById);

module.exports = adminRoute;
