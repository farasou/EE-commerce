var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("EXPRESS api is working just fine");
});

module.exports = router;
