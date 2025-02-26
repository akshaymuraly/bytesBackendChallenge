const express = require("express");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./utils/MongooseConnection");
const ErrorHandler = require("./utils/ErrorHandler");

// ----------DB CONNECTION-----------------

dbConnection();

// ----------Router------------------------

const productRouter = require("./modules/products/router/products.router");

// ----------Routes------------------------

app.use("/api", productRouter);

// ----------ERROR HANDLER MIDDLEWARE-----------

app.use(ErrorHandler);

// ----------Server listening--------

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}...`);
});
