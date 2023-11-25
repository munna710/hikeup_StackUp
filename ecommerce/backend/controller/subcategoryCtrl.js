const Subcategory = require("../models/SubcategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createSubcategory = asyncHandler(async (req, res) => {
  try {
    const newSubcategory = await Subcategory.create(req.body);
    res.json(newSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

const updateSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedSubcategory = await Subcategory.findByIdAndDelete(id);
    res.json(deletedSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaSubcategory = await Subcategory.findById(id);
    res.json(getaSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllSubcategory = asyncHandler(async (req, res) => {
  try {
    const getAllSubcategory = await Subcategory.find();
    res.json(getAllSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getSubcategory,
  getAllSubcategory,
};