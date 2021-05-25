const express = require("express");
const invoiceNumberController = require("../controllers/invoiceNumber");

const router = express.Router();

router.get("/", invoiceNumberController.getInvoiceNumber);
router.post("/", invoiceNumberController.postInvoiceNumber);
router.put("/", invoiceNumberController.putInvoiceNumber);

router.use((request, response) => response.status(404).end());

module.exports = router;
