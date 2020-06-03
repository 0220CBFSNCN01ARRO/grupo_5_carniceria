var express = require('express');
var router = express.Router();
var controllers = require('../controllers/productController');
const multer = require('multer');
var path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname,'../public/img/'))
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });


/* GET product page. */
router.get('/', controllers.show);
router.get('/cart', controllers.cart);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', controllers.create); 
router.post('/create/', upload.any(), controllers.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', controllers.edit); 
router.put('/edit/:id', upload.any(), controllers.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', controllers.destroy); 

router.get('/:category', controllers.byCategory);
router.get('/:category/detail/:id', controllers.detail);

module.exports = router;
