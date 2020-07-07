let express = require('express');
let router = express.Router();

/* đang nghĩ cách chèn mỗi bài học học 1 link video nhúng*/

router.get('/', (req, res, next) => {

    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            res.locals.Categories = data;
            let courseController = require('../controllers/productController');
            return courseController.getAll();
        })
        .then(data => {
            res.locals.courses = data;
            res.render('category');
        })
        .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
    let productController = require('../controllers/productController');
    productController
        .getById(req.params.id)
        .then(course => {
            res.locals.course = course;
            res.render('single-product');
        })


    .catch(error => next(error));

});

// router.get('/:id/link', (req, res, next) => {
//     res.redirect('https://youtu.be/QH2-TGUlwu4');

// });
module.exports = router