const Router = require("express").Router();
const { getProducts } = require("../controller/products.controller");

Router.get("/products", getProducts);

module.exports = Router;
