const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  invoiceNo: { type: Object },
  client: { type: Object },
  invoice: { type: Object },
  exchange: { type: Object },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
