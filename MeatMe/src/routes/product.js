var express = require('express');
var router = express.Router();
var controllers = require('../controllers/productController');
const multer = require('multer');
var path = require("path");
const userRoute = require('../middlewares/UserRoute');
var adminRoute = require("../middlewares/adminRoute");
var cart = require("../middlewares/cart")
const { check, validationResult, body } = require("express-validator");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname,'../../public/img/'))
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  const upload = multer({
      storage,
      limits: { fileSize: 1024 * 1024 * 1024 },
      fileFilter(req, file, next) {
        const isPhoto = file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' ? "" : file ;
        console.log(file)
        
        if (isPhoto) {
          next(null, true);
        } else {
            file.error = {
                  error: "El formato de archivo debe ser de tipo PNG, JPG o JPEG"
                };
            req.file = file;
          next(null, false);
        }
      }
    });

/* GET product page. */
router.get('/', controllers.show);
router.get('/cart',cart, controllers.cart);
router.get('/cartAdd/:category/:id',cart, controllers.cartAdd);


/*** CREATE ONE PRODUCT ***/ 
router.get('/create/',userRoute, adminRoute, controllers.create); 
router.post('/create/',userRoute, adminRoute, upload.single("image"),[
      check('name').notEmpty(),
      check('category').notEmpty(),
      check('type').notEmpty(),
      check('price').notEmpty(),
      check('weight').notEmpty()], 
      controllers.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',userRoute, adminRoute, controllers.edit); 
router.put('/edit/:id',userRoute, adminRoute, upload.single("image"),[
check('name').notEmpty(),
check('category').notEmpty(),
check('type').notEmpty(),
check('price').notEmpty(),
check('weight').notEmpty(),]

, controllers.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id',userRoute, adminRoute, controllers.destroy); 

router.get('/:category', controllers.byCategory);
router.get('/:category/detail/:id', controllers.detail);

module.exports = router;
