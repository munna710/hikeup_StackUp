const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');
const validateMongoDbId = require("../utils/validateMongodbId");
const createProduct = asyncHandler(async (req, res) => {
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const newProduct = await Product.create(req.body);
      res.json(newProduct);
    } catch (error) {
      throw new Error(error);
    }
  });
  const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const findProduct = await Product.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
  });
  const getAllProduct = asyncHandler(async (req, res) => {
    try {
      // Filtering
      const queryObj = { ...req.query };
      const excludeFields = ["page", "sort", "limit", "fields"];
      excludeFields.forEach((el) => delete queryObj[el]);
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  
      let query = Product.find(JSON.parse(queryStr));
  
      // Sorting
      if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
      } else {
        query = query.sort("-price -createdAt -rating"); // sort by price (high to low), then new arrivals, then recommended
      }
  
      // limiting the fields
      if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
      } else {
        query = query.select("-__v");
      }
  
      // pagination
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
      if (req.query.page) {
        const productCount = await Product.countDocuments();
        if (skip >= productCount) throw new Error("This Page does not exists");
      }
      const product = await query;
      res.json(product);
    } catch (error) {
      throw new Error(error);
    }
  });
    const updateProduct = asyncHandler(async (req, res) => {
        const id = req.params.id;
        validateMongoDbId(id);
        try {
          const product = await Product.findById(id);
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
          if (req.body.title) {
            req.body.slug = slugify(req.body.title);
          }
          const updateProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
          });
          res.json(updateProduct);
        } catch (error) {
          throw new Error(error);
        }
      });
    const deleteProduct = asyncHandler(async (req, res) => {
        const id = req.params.id;
        validateMongoDbId(id);
        try {
            const deleteProduct = await Product.findOneAndDelete({ _id: id });
            res.json(deleteProduct);
        } catch (error) {
            throw new Error(error);
        }
    });

  module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct}