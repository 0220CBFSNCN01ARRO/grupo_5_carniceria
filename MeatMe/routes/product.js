var express = require('express');
var router = express.Router();
var controllers = require("../controllers/productController");

/* GET product page. */
router.get('/', controllers.show);
router.get("/cart", controllers.cart);
router.get("/:category", controllers.byCategory);
router.get("/:category/detail/:id", controllers.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', controllers.create); /* GET - Form to create */
router.post('/create/', controllers.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', controllers.edit); /* GET - Form to create */
router.put('/edit/:id', controllers.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', controllers.destroy); /* DELETE - Delete from DB */



module.exports = router;
