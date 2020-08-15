let express = require('express');
let router = express.Router();
let classController = require('../controllers/classController');
let userController = require('../controllers/userController');
router.get('/', userController.isLoggedIn,async(req, res, next) => {
    let user_inf = await classController.getuser(req.session.user.id);
    res.locals.user_inf = user_inf;

    let cl = await classController.getclass(req.session.user.id);
    res.locals.cl = cl; 
    res.render('class')
});
router.get('/:id', userController.isLoggedIn, async (req, res) => {
    
    
    var ID = req.params.id;
    let content = await classController.getcontent(ID);
    res.locals.content = content;
    let tc = await classController.getteacher(ID);
    res.locals.tc = tc; 
    res.render('single-class')
});

module.exports = router;