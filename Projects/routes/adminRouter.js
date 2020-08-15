let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController');
let userController = require('../controllers/userController');
router.get('/', userController.isLoggedIn,async(req, res, next) => {
    userController.isLoggedIn
    let hoaDon_c = await adminController.getAmountBillCategory();
    res.locals.hoaDon_c = hoaDon_c;

    let sluser = await adminController.getAmountUser();
    res.locals.sluser = sluser;

    let hoaDon_t = await adminController.getAmountBillteacher();
    res.locals.hoaDon_t = hoaDon_t;
    
    res.render('admin')
});
module.exports = router;