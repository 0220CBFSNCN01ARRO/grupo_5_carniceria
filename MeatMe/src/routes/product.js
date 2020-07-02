var express = require('express');
var router = express.Router();
var controllers = require('../controllers/productController');
const multer = require('multer');
var path = require("path");
const userRoute = require('../middlewares/UserRoute');
var adminRoute = require("../middlewares/adminRoute");
var cart = require("../middlewares/cart")

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname,'../../public/img/'))
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });


/* GET product page. */
router.get('/', controllers.show);
router.get('/cart',cart, controllers.cart);
router.get('/cartAdd/:category/:id',cart, controllers.cartAdd);


/*** CREATE ONE PRODUCT ***/ 
router.get('/create/',userRoute, adminRoute, controllers.create); 
router.post('/create/',userRoute, adminRoute, upload.any(), controllers.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',userRoute, adminRoute, controllers.edit); 
router.put('/edit/:id',userRoute, adminRoute, upload.any(), controllers.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id',userRoute, adminRoute, controllers.destroy); 

router.get('/:category', controllers.byCategory);
router.get('/:category/detail/:id', controllers.detail);

module.exports = router;
