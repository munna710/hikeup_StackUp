const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const PORT = 4000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});