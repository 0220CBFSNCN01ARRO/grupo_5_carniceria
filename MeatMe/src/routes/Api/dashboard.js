var express = require('express');
var router = express.Router();
const DashboardApiController = require('../../controllers/api/dashboardApiController');

router.get('/widgets', DashboardApiController.widgets);
router.get('/lastProduct', DashboardApiController.lastProduct);
router.get('/categories', DashboardApiController.categories);
router.get('/allProducts', DashboardApiController.allProducts);

module.exports = router;