var express = require('express');
var router = express.Router();
var controllers = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

var storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, path.join(__dirname,'../public/img/avatars'))
      },
      filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
    var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/register', controllers.register);
router.post('/register',upload.any(), controllers.store);
router.get('/admin', controllers.admin);
router.get('/login', controllers.login);
router.post('/login', controllers.processLogin);
router.post('/logout', controllers.logout);
router.get('/profile/:id', controllers.profile);


module.exports = router;
