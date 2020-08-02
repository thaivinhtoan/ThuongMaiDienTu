let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, (req, res, next) => {
    let controller = require('../controllers/commentController');
    let comment = {
        userId: req.session.user.id,
        courseId: req.body.courseId,
        message: req.body.message
    };
    if (!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != '')) {
        comment.parentCommentId = req.body.parentCommentId;
    }
    controller
        .add(comment)
        .then(data => {
            res.redirect('/courses/' + data.courseId);
        })
        .catch(error => next(error));
});


module.exports = router;