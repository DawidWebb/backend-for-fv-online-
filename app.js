const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/_configOmega.js");
const mongoose = require("mongoose");

//* mongoose conect *//
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const usersRoutes = require("./routes/users.js");
const describeRoutes = require("./routes/describe");
const invoiceRoutes = require("./routes/invoice");
const invoiceNumberRoutes = require("./routes/invoiceNumber");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/describe", describeRoutes);
app.use("/invoice", invoiceRoutes);
app.use("/invoiceNumber", invoiceNumberRoutes);
app.use("/users", usersRoutes);

app.listen(8000, () => console.log("Server has started"));

module.exports = app;
