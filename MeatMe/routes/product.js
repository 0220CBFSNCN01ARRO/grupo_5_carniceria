var express = require('express');
var router = express.Router();
var controllers = require("../controllers/productController");

/* GET product page. */
router.get('/', controllers.show);
router.get("/cart", controllers.cart);
router.get("/:category", controllers.byCategory);
router.get("/:category/detail/:id", controllers.detail);




module.exports = router;
