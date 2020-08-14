let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, (req, res, next) => {
    let controller = require('../controllers/commentController');
    let comment = {
        userid: req.session.user.id,
        courseid: req.body.courseid,
        message: req.body.message
    };
    if (!isNaN(req.body.parentCommentid) && (req.body.parentCommentid != '')) {
        comment.parentCommentid = req.body.parentCommentid;
    }
    controller
        .add(comment)
        .then(data => {
            res.redirect('/courses/' + data.courseid);
        })
        .catch(error => next(error));
});


module.exports = router;