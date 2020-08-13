let controller = {};
let models = require('../models');
let ContentCourse = models.CouContentCourserse;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

// get all products
controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.ContentCourse }],
            attributes: ['id', 'lesson', 'topic', 'link', 'description'],
            where: {}
        };

        User
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;