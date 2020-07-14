let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res, next) => {
    let fullname = req.body.fullname;
    let email = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let keepLogedIn = (req.body.keepLogedIn != undefined);

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
            }
            return userController
                .createUser(user)
                .then(user => {
                    if (keepLogedIn) {
                        req.session.user = user;
                        res.render('/');
                    } else {
                        res.render('login', {
                            message: 'You have regitered, now please login!',
                            type: 'alert-primary'
                        });
                    }
                });
        })
        .catch(error => next(error));;
})
module.exports = router;