var express = require("express");
var usersRouter = require("./users");
var router = express.Router();

const { index } = require("../controllers/index");

router.use("/users", usersRouter);

/* GET home page. */
router.get("/", index);

module.exports = router;
