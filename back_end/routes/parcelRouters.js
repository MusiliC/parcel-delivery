const express = require("express");
const router = express.Router();

const parcelController = require('../controllers/parcelController')
const verifyRoute = require("../middleware/verifyToken");


router.get("/",  parcelController.getParcels);
router.get("/:id", parcelController.getParcel);
router.delete("/:id", verifyRoute, parcelController.deleteParcel);
router.post("/",parcelController.createParcel);
router.put("/:id", verifyRoute, parcelController.updateParcel);




module.exports = router;