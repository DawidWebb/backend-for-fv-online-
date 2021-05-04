const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./_config");
const mongoose = require("mongoose");

//* mongoose conect *//
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const usersRoutes = require("./routes/users.js");
// const clientsRoutes = require("./routes/clients");
// const ordersRoutes = require("./routes/orders");
// const orderNumberRoutes = require("./routes/orderNumber");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use("/ordernumber", orderNumberRoutes);
app.use("/users", usersRoutes);
// app.use("/clients", clientsRoutes);
// app.use("/orders", ordersRoutes);

app.listen(8000, () => console.log("Server for appForm has started"));

module.exports = app;
