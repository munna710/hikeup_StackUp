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
  logout,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  updatePassword,
  loginAdmin,
  saveAddress,
  userCart,
  getUserCart,
  createOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  emptyCart,
  getAllOrders,
  getMonthwiseOrderIncome,
  getMonthwiseOrderCount,
  getYearlyTotalOrders,
  getSingleOrder,
  updateOrder,
} = require("../controller/userCtrl");
const { checkout,paymentVerification } = require("../controller/paymentCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");




router.get("/refresh", handleRefreshToken);
router.post("/register", createUser);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
router.get("/getmyorders", authMiddleware, getMyOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/getMonthwiseOrderIncome", authMiddleware, getMonthwiseOrderIncome);
router.get("/getMonthwiseOrderCount", authMiddleware, getMonthwiseOrderCount);
router.get("/getYearlyTotalOrders", authMiddleware, getYearlyTotalOrders);
router.get("/getorderbyuser/:id", authMiddleware, isAdmin, getSingleOrder);

router.put("/update-order/:id", authMiddleware, isAdmin, updateOrder);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/all-users", authMiddleware, isAdmin, getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", authMiddleware, isAdmin, deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);

// router.put(
//   "/order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.post("/logout",  logout);

module.exports = router;