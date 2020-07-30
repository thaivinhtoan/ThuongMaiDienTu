let controller = {};
let models = require('../models');
let Category = models.Category;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath', 'summary'],
            include: [{ model: models.Course }]
        };
        if (query && query.search != '') {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        Category
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};


module.exports = controller;