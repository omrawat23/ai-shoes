const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

const directURI = 'mongodb+srv://or63529:63QYF3wjMX7BYo9y@cluster0.xwxcard.mongodb.net/';
mongoose.connect(directURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
  console.error("DB Connection Error:", err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {
  console.log("Backend server is running!");
});