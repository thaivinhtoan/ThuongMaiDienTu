let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let userController = require('../controllers/userController');
    userController
        .getUserByEmail()
        .then(data => {
            res.locals.users = data;
            let invoiceDetailController = require('../controllers/invoiceDetailController');
            return invoiceDetailController.getAll();
        })
        .then(data => {
            res.locals.invoicedetails = data;
            let codeCourseController = require('../controllers/codeCourseController');
            return codeCourseController.getAll();
        })
        .then(data => {
            res.locals.codecourses = data;
            let contentCourseController = require('../controllers/contentCourseController');
            return contentCourseController.getAll();
        })
        .then(data => {
            res.locals.contentcourses = data;
            res.render('index');
        })
        .catch(error => next(error));
});

module.exports = router;