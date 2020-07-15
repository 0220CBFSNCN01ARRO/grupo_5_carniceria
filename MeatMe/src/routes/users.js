var express = require('express');
var router = express.Router();
var controllers = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require("express-validator");


const userRoute = require('../middlewares/UserRoute');
const guestRoute = require('../middlewares/guestRoute');
const validator = require("../validators/userValidator");

var storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, path.join(__dirname,'../../public/img/avatars'))
      },
      filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
    var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/register', guestRoute, controllers.register);
router.post('/register', upload.any(), validator.register, controllers.store);

router.get('/login', guestRoute,controllers.login);
router.post('/login', validator.login, controllers.processLogin);
router.get('/logout', controllers.logout);

router.get('/profile/:id', userRoute, controllers.profile);

router.get('/admin/:id', userRoute, controllers.admin);



module.exports = router;
