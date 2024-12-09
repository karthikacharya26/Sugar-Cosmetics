require("dotenv").config();
const express = require("express");

const cors = require("cors");
const PORT = process.env.PORT || 4000;
const UserRouter = require("./routes/user.route");
const connection = require("./config/db");
const ProductRouter = require("./routes/product.route");
const CartRouter = require("./routes/cart.route");
const PaymentRouter = require("./routes/payment.route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);
app.use("/payment", PaymentRouter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "server working fine" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("server is running and DB is connected");
  } catch (error) {
    console.log("error occured while starting server");
  }
});
