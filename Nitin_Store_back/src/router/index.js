const express = require("express");
const router = express.Router();
const userRoute = require("./user/userroute");

userRoute(router);

module.exports = router;
