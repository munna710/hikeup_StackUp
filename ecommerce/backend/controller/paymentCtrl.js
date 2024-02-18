const Razorpay = require("razorpay")
const instance = new Razorpay({
    key_id: "rzp_test_QkFiEyRnOp9iAy",key_secret:"2Om1ZcCNLcwphK0raImMjlKD"
})

const checkout = async (req, res) => {
    const { amount } = req.body; // Get amount from request body

    const option = {
        amount: amount * 100, // Convert to smallest currency unit
        currency: "INR"
    }

    const order = await instance.orders.create(option)

    res.json({
        success: true,
        order
    })
}
const paymentVerification = async (req, res) => {
    const { razorpayOrderId, razorpayPaymentId } = req.body
    res.json({
        razorpayOrderId,
        razorpayPaymentId
    })
}

module.exports = {
    checkout,
    paymentVerification
}