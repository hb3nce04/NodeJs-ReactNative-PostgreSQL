var express = require('express');
var router = express.Router();

const db = require('../database/dboperation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('');
});

router.get('/list', async (req, res) => {
  try {
    const users = await db.getUsers("");
    res.json(users);
  } catch (error) {
    res.status(500).send('Error wheng fethcing datas: ', error);
  }
});

module.exports = router;
