const express = require("express");
const router = express.Router();
const {createUser, allUser, updateUser, getUser} = require("../Controllers/userController.js");

router.post("/create", createUser);
router.get("/allUsers",allUser);
router.get("/:id",getUser);
router.put("/updateUser/:id",updateUser);


module.exports = router;