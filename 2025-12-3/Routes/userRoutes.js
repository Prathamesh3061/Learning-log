const express = require("express");
const router = express.Router();
const {createUser, allUser} = require("../Controllers/userController.js");

router.post("/create", createUser);
router.get("/allUsers",allUser)



module.exports = router;