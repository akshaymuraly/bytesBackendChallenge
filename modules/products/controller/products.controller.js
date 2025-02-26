const Products = require("../model/products.model");
const AsyncHandler = require("../../../utils/AsyncHandler");
const { CustomError } = require("../../../utils/CustomError"); //As of now not utilizing CustomError

const getProducts = AsyncHandler(async (req, res, next) => {
  let { query = "", page = 1 } = req?.query;
  page = parseInt(page) || 1;
  const limit = 10;

  const searchQuery = query
    ? {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      }
    : {};

  const products = await Products.find(searchQuery)
    .sort({ order: 1 })
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({
    products,
  });
});

module.exports = {
  getProducts,
};
