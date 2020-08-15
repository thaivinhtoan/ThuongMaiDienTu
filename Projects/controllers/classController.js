let controller = {};
let models = require('../models');


controller.getuser = async (id) =>{

    const us = await models.sequelize.query(`SELECT *  FROM users  where id = ${id}`, { type: models.Sequelize.QueryTypes.SELECT})
    return us
};


controller.getclass = async (id)=>{
    const clas = await models.sequelize.query(`SELECT c.* FROM invoicedetails as a, courses as c where a.userid = 1 and a.courseid = c.id `, { type: models.Sequelize.QueryTypes.SELECT})
    return clas
};

 
controller.getcontent = async (id)=>{
    const content = await models.sequelize.query(`Select * from contentcourses where courseid = ${id}   `, { type: models.Sequelize.QueryTypes.SELECT})
    return content
};

controller.isBuy = (req, res, next) => {
    if (req.session.cl) {
        next();
    }
    else {res.redirect(`/users/courses?returnURL=${req.originalUrl}`);}
};

module.exports = controller;