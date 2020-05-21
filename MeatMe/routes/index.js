var express = require('express');
var router = express.Router();
var controllers = require("../controllers/indexController");

/* GET home page. */
router.get('/', controllers.index);

module.exports = router;
