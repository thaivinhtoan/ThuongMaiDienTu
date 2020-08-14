let controller = {};
let models = require('../models');
let InvoiceDetail = models.InvoiceDetail;

// add InvoiceDetail
controller.add = (invoicedetail) => {
    return new Promise((resolve, reject) => {
        InvoiceDetail
            .findOne({
                where: {
                    userId: invoicedetail.userid,
                    codecourseId: invoicedetail.codecourseId,
                }
            })
            .then(data => {
                if (data) {
                    return InvoiceDetail.update(invoicedetail, {
                        where: {
                            userId: invoicedetail.userid,
                            courseId: invoicedetail.codecourseid,
                        }
                    })
                } else {
                    return InvoiceDetail.create(invoicedetail);
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

// get all InvoiceDetails
controller.getInvoiceDetail = (userid, codecourseid) => {
    return Review.findOne({
        where: {
            userid,
            codecourseid
        }
    });
};

// get all products
// controller.getAll = (query) => {
//     return new Promise((resolve, reject) => {
//         let options = {
//             include: [{ model: models.InvoiceDetail }],
//             attributes: ['id', 'price', 'datePurchase'],
//             where: {}
//         };

//         User
//             .findAndCountAll(options)
//             .then(data => resolve(data))
//             .catch(error => reject(new Error(error)));
//     });
// };

module.exports = controller;