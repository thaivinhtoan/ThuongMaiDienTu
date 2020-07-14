let controller = {};
let models = require('../models');
let Course = models.Course

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
controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Course
            .findAll({
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'price', 'imagepath']
            })
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
                resolve(course);
            })
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;