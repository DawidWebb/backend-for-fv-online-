const express = require("express");
const invoiceController = require("../controllers/invoice");

const router = express.Router();

router.get("/", invoiceController.getInvoices);
router.get("/:value", invoiceController.getInvoice);
router.post("/", invoiceController.postInvoice);
// router.put("/", invoiceController.putInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

router.use((request, response) => response.status(404).end());

module.exports = router;
