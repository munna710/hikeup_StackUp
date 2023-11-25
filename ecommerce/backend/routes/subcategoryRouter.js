const express = require("express");
const {
  createSubcategory,
  updateSubcategory,
  getSubcategory,
  getAllSubcategory,
  deleteSubcategory,
} = require("../controller/subcategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createSubcategory);
router.put("/:id", authMiddleware, isAdmin, updateSubcategory);
router.get("/:id", getSubcategory);
router.get("/", getAllSubcategory);
router.delete("/:id", authMiddleware, isAdmin, deleteSubcategory);

module.exports = router;