let controller = {};
let models = require('../models');
let InvoiceDetail = models.InvoiceDetail;

// add InvoiceDetail
controller.add = (invoicedetail) => {
    return new Promise((resolve, reject) => {
        InvoiceDetail
            .findOne({
                where: {
                    userId: invoicedetail.userId,
                    codecourseId: invoicedetail.codecourseId,
                }
            })
            .then(data => {
                if (data) {
                    return InvoiceDetail.update(invoicedetail, {
                        where: {
                            userId: invoicedetail.userId,
                            courseId: invoicedetail.codecourseId,
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
controller.getInvoiceDetail = (userId, codecourseId) => {
    return Review.findOne({
        where: {
            userId,
            codecourseId
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