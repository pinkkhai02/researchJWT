const express = require("express");
const {
  createUser,
  handleLogin,
  getUser,
} = require("../controllers/userController");
const funDelay = require("../middleware/delay");

const routerAPI = express.Router();

routerAPI.get("*", funDelay);
routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);
routerAPI.get("/user", getUser);

routerAPI.get("/", (req, res) => {
  res.status(200).json("Hello world api");
});

module.exports = routerAPI; //export default
