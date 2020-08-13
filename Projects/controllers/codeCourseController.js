let controller = {};
let models = require('../models');
let CodeCourse = models.CodeCourse;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

// get all products
controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.CodeCourse }],
            attributes: ['id', 'code', 'status', 'dateUse'],
            where: {}
        };

        User
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;