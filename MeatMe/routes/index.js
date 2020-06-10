var express = require('express');
var router = express.Router();
var controllers = require("../controllers/indexController");
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
          cb(null, path.join(__dirname,'../../public/images/avatars'))
    },
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });


/* GET home page. */
router.get('/', controllers.index);


module.exports = router;
