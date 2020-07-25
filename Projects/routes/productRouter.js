let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    if ((req.query.category == null) || isNaN(req.query.category)) {
        req.query.category = 0;
    }
    if ((req.query.min == null) || isNaN(req.query.min)) {
        req.query.min = 0;
    }
    if ((req.query.max == null) || isNaN(req.query.max)) {
        req.query.max = 100;
    }
    if ((req.query.sort == null)) {
        req.query.sort = 'name';
    }
    if ((req.query.limit == 'undefined') || isNaN(req.query.limit)) {
        req.query.limit = 9;
    }
    if ((req.query.page == 'undefined') || isNaN(req.query.page)) {
        req.query.page = 1;
    }
    // if ((req.query.search = null)) {
    //     req.query.search = '';
    // }
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll(req.query)
        .then(data => {
            res.locals.Categories = data;
            let courseController = require('../controllers/productController');
            console.log(req.query)
            return courseController.getAll(req.query);
        })
        .then(data => {
            res.locals.courses = data;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
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

/* đang nghĩ cách chèn mỗi bài học học 1 link video nhúng*/
// router.get('/:id/link', (req, res, next) => {
//     res.redirect('https://youtu.be/QH2-TGUlwu4');

// });
module.exports = router;