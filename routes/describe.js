const express = require("express");
const describeController = require("../controllers/describe");

const router = express.Router();

router.get("/", describeController.getDescribes);
// router.get("/:value", describeController.getDescribe);
router.post("/", describeController.postDescribe);
// router.put("/", describeController.putDescribe);
// router.delete("/:id", describeController.deleteDescribe);

router.use((request, response) => response.status(404).end());

module.exports = router;
