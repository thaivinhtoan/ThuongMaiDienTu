let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('cart');
});

router.post('/', (req, res, next) => {
    var courseId = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var courseController = require('../controllers/productController');
    courseController
        .getById(courseId)
        .then(course => {
            var cartItem = req.session.cart.add(course, courseId, quantity);
            res.json(cartItem);
        })
        .catch(error => next(error));
});

router.put('/', (req, res) => {
    var courseId = req.body.id;
    var quantity = parseInt(req.body.quantity);
    var cartItem = req.session.cart.update(courseId, quantity);
    res.json(cartItem);
});

router.delete('/', (req, res) => {
    var courseId = req.body.id;
    req.session.cart.remove(courseId);
    res.json({
        totalQuantity: req.session.cart.totalQuantity,
        totalPrice: req.session.cart.totalPrice
    });
});

router.delete('/all', (req, res) => {
    req.session.cart.empty();
    res.sendStatus(204);
    res.end();
});

module.exports = router;