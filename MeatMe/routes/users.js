var express = require('express');
var router = express.Router();
var controllers = require("../controllers/usersController");

/* GET users listing. */
router.get('/register', controllers.register);
router.get("/admin", controllers.admin);
router.get("/login", controllers.login);

module.exports = router;
