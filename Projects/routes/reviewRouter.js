let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, (req, res, next) => {
    let controller = require('../controllers/reviewController');
    let review = {
        userid: req.session.user.id,
        courseid: req.body.courseid,
        rating: req.body.rating,
        message: req.body.message
    };
    controller
        .add(review)
        .then(() => {
            res.redirect('/courses/' + review.courseid);
        })
        .catch(error => next(error));
});


module.exports = router;