var express = require('express');
var router = express.Router();
var controllers = require("../controllers/productController");

/* GET product page. */
router.get('/', controllers.show);
router.get("/category", controllers.byCategory);
router.get("/category/detail", controllers.detail);
router.get("/cart", controllers.cart);
router.get("/productAdd", controllers.admin);



module.exports = router;
