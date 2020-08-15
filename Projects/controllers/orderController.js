let controller = {};
let models = require('../models');


controller.addInvoice = async (courseId,userId) =>{

    const us = await models.sequelize.query(`Insert into invoicedetails(courseid,userid,createAt) values(${courseId},${userId},${new Date().toDateString}) `, 
    { type: models.Sequelize.QueryTypes.INSERT});
    return us;
};
