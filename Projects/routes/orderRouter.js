let express = require("express");
let router = express.Router();
 let models = require('../models');
let InvoiceDetail = models.InvoiceDetail;
let orderController = require('../controllers/orderController');
let classController = require('../controllers/classController');
let userController = require('../controllers/userController');
let courseController = require('../controllers/productController');

router.get('/', userController.isLoggedIn,async(req, res, next) => {
    var courseid =  1;
   
    var userid =  req.session.user.id
    const us = await models.sequelize.query(`Insert into invoicedetails(courseid,userid,createdAt) values(${courseid},${userid},${new Date().getTime()}) `, 
    { type: models.Sequelize.QueryTypes.INSERT});
    return us;
});

module.exports = router;
