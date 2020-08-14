let controller = {};
let models = require('../models');
let Level = models.Level;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath'],
            include: [{
                model: models.CourseLevel,
                include: [{
                    model: models.Course,
                    attributes: {},
                    where: {
                        price: {
                            [Op.gte]: query.min,
                            [Op.lte]: query.max
                        }
                    }
                }]
            }]
        };
        if (query.category > 0) {
            options.include[0].include[0].where.categoryid = query.category;
        }
        if (query.search != '') {
            options.include[0].include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.teacher > 0) {
            options.include[0].include[0].where.teacherid = query.teacher;
        }
        Level
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;