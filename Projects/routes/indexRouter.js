let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            console.log(data);
            res.locals.Categories = data;
            let productController = require('../controllers/productController');
            return productController.getTrendingCourses();
            // res.render('index', { Categories: data });
        })
        .then(data => {
            res.locals.trendingProducts = data;
            res.render('index');
        })
        .catch(error => next(error));
});

module.exports = router;