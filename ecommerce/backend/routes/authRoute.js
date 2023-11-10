const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout
} = require("../controller/userCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.get("/refresh", handleRefreshToken);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", authMiddleware, isAdmin, getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", authMiddleware, isAdmin, deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.post("/logout",  logout);

module.exports = router;