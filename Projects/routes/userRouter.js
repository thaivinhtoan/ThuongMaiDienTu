let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', (req, res) => {
    req.session.returnURL = req.query.returnURL;
    res.render('login');
});


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/login', (req, res) => {
    let email = req.body.username;
    let password = req.body.password;
    let keepLoggedIn = (req.keepLoggedIn != undefined);
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.password)) {
                    req.session.cookie.maxAge = keepLoggedIn ? 30 * 24 * 60 * 60 * 100 : null;
                    req.session.user = user;
                    if (req.session.returnURL) {
                        res.redirect(req.session.returnURL);
                    } else {
                        res.redirect('/');
                    }
                } else {
                    res.render('login', {
                        message: 'Incorrect Password!',
                        type: 'alert-danger'
                    });
                }
            } else {
                res.render('login', {
                    message: 'Email does not exists!',
                    type: 'alert-danfer'
                });
            }
        });
});

router.post('/register', (req, res, next) => {
    let fullname = req.body.fullname;
    let email = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    //kiem tra confrirmPassword va Password giong nhau
    if (password != confirmPassword) {
        return res.render = ('register', {
            message: 'confirmPassword does not match password!',
            type: 'alert-danger'
        });
    }
    //kiem tra username chua ton tai
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                return res.render('register', {
                    message: `Email exists ${email}! Please use another Email Address!`,
                    type: 'alert-danger'
                });
            }
            //tao tai khoan
            user = {
                fullname,
                username: email,
                password
            };
            return userController
                .createUser(user)
                .then(user => {
                    if (keepLoggedIn) {
                        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 100;
                        req.session.user = user;
                        res.redirect('/');
                    } else {
                        res.render('login', {
                            message: 'You have regitered, now please login!',
                            type: 'alert-primary'
                        });
                    }
                });
        })
        .catch(error => next(error));;
});



router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error);
        } else {
            return res.redirect('/users/login');
        }
    });
});

module.exports = router;