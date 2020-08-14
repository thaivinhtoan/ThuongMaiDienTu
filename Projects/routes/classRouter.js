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
router.get('/:id', async (req, res) => {
    
    
    var id = req.params.id;
    let content = await classController.getcontent(id);
    res.locals.content = content;
    res.render('single-class')
});

module.exports = router;