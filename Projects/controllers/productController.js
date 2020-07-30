let controller = {};
let models = require('../models');
let Course = models.Course;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

//get trending products
controller.getTrendingCourses = () => {
    return new Promise((resolve, reject) => {
        Course
            .findAll({
                order: [
                    ['overallReview', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'price', 'imagepath']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

// get all products
controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.Category }],
            attributes: ['id', 'name', 'price', 'imagepath'],
            where: {
                price: {
                    [Op.gte]: query.min,
                    [Op.lte]: query.max
                }
            }
        };
        if (query.category > 0) {
            options.where.categoryId = query.category;
        }
        if (query.search != '') {
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.teacher > 0) {
            options.where.teacherId = query.teacher;
        }
        if (query.level > 0) {
            options.include.push({
                model: models.CourseLevel,
                attributes: [],
                where: { levelId: query.level }
            });
        }
        // Pagination
        if (query.limit > 0) {
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }
        // Sort
        if (query.sort) {
            switch (query.sort) {
                case 'name':
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
                case 'price':
                    options.order = [
                        ['price', 'ASC']
                    ];
                    break;
                case 'overallReview':
                    options.order = [
                        ['overallReview', 'DESC']
                    ];
                    break;
                default:
                    options.order = [
                        ['name', 'ASC']
                    ];

            }
        }
        Course
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};
//Courses
controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let course;
        Course
            .findOne({
                where: { id: id },
                include: [{ model: models.Category }]
            })
            .then(result => {
                course = result;
                return models.CourseSpecification.findAll({
                    where: { courseId: id },
                    include: [{ model: models.Specification }]
                });
            })
            .then(courseSpecification => {
                course.CourseSpecifications = courseSpecification;
                return models.Comment.findAll({
                    where: { courseId: id, parentCommentId: null },
                    include: [{ model: models.User },
                        {
                            model: models.Comment,
                            as: 'SubComments',
                            include: [{ model: models.User }]
                        }
                    ]
                });
            })
            .then(comments => {
                course.Comments = comments;
                return models.Review.findAll({
                    where: { courseId: id },
                    include: [{ model: models.User }]
                });
            })
            .then(reviews => {
                course.Reviews = reviews;
                let stars = [];
                for (let i = 1; i <= 5; i++) {
                    stars.push(reviews.filter(item => (item.rating == i)).length);
                }
                course.stars = stars;
                resolve(course);
            })
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;