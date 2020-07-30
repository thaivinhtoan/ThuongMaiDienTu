let controller = {};
let models = require('../models');
let Teacher = models.Teacher;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath'],
            include: [{
                model: models.Course,
                attributes: ['id'],
                where: {
                    price: {
                        [Op.gte]: query.min,
                        [Op.lte]: query.max
                    }
                }
            }]
        };
        if (query.category > 0) {
            options.include[0].where.categoryId = query.category;
        }
        if (query.search != '') {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.level > 0) {
            options.include[0].include = [{
                model: models.CourseLevel,
                attributes: [],
                where: { levelId: query.level }
            }];
        }
        Teacher
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;