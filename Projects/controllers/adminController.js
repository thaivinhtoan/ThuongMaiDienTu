let controller = {};
let models = require('../models');
let InvoiceDetail = models.InvoiceDetail;

controller.getAmountBillCategory = async () =>{
    
    const hd= await models.sequelize.query(`Select count(b.*) as sl, c.name , c.imagepath
    from categories c full outer join 
    (select courses.* from courses, invoicedetails where courses.id = invoicedetails.courseid ) b 
    on c.id= b.categoryid 
    group by c.name, c.imagepath
    `, { type: models.Sequelize.QueryTypes.SELECT})
    return hd
}



module.exports = controller;