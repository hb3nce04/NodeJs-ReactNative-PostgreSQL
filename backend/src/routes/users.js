var express = require("express");
var router = express.Router();

const { getUsers, listUsers } = require("../controllers/users");

/* GET users listing. */
router.get("/", getUsers);

router.get("/list", listUsers);

module.exports = router;
