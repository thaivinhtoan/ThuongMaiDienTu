'use strict';
module.exports = (sequelize, DataTypes) => {
    const CourseSpecification = sequelize.define('CourseSpecification', {
        description: DataTypes.TEXT
    }, {tableName: 'coursespecifications'});
    CourseSpecification.associate = function(models) {
        // associations can be defined here
        CourseSpecification.belongsTo(models.Specification, { foreignKey: 'specificationid' });
        CourseSpecification.belongsTo(models.Course, { foreignKey: 'courseid' });
    };
    return CourseSpecification;
};