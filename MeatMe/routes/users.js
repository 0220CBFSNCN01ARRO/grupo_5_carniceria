var express = require('express');
var router = express.Router();
var controllers = require("../controllers/usersController");

/* GET users listing. */
// router.get('/', controllers);
router.get('/register', controllers.register);


module.exports = router;
