const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/userController");
const verifyRoute = require("../middleware/verifyToken");


router.get("/",  userscontroller.getUsers);
router.get("/:id", userscontroller.getUser);
router.post("/", userscontroller.createUser);
router.put("/:id", userscontroller.updateUser);
router.delete("/:id", userscontroller.deleteUser);
router.post("/login", userscontroller.userLogin);




module.exports = router;