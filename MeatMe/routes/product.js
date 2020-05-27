var express = require('express');
var router = express.Router();
var controllers = require('../controllers/productController');

/* GET product page. */
router.get('/', controllers.show);
router.get('/cart', controllers.cart);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', controllers.create); 
router.post('/create/', controllers.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', controllers.edit); 
router.put('/edit/:id', controllers.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', controllers.destroy); 

router.get('/:category', controllers.byCategory);
router.get('/:category/detail/:id', controllers.detail);

module.exports = router;
