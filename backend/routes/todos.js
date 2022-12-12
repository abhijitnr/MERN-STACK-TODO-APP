const express = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/TodoController");

const todoRoute = express.Router();

/* GET TODO */
todoRoute.get("/", getTodo);

/* ADD TODO */
todoRoute.post("/create", saveTodo);

/* UPDATE TODO */
todoRoute.post("/update", updateTodo);

/* DELETE TODO */
todoRoute.post("/delete", deleteTodo);

module.exports = todoRoute;
