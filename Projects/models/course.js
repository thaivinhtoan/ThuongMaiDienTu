'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        summary: DataTypes.TEXT,
        description: DataTypes.TEXT,
        availability: DataTypes.BOOLEAN,
        imagepath: DataTypes.TEXT,
        thumbnailpath: DataTypes.TEXT,
        overallreview: DataTypes.DOUBLE,
        reviewcount: DataTypes.INTEGER
    }, {tableName: 'courses'});
    Course.associate = function(models) {
        // associations can be defined here
        Course.belongsTo(models.Category, { foreignKey: 'categoryid' });
        Course.hasMany(models.Comment, { foreignKey: 'courseid' });
        Course.hasMany(models.CourseLevel, { foreignKey: 'courseid' });
        Course.hasMany(models.ContentCourse, { foreignKey: 'courseid' });
        Course.hasMany(models.InvoiceDetail, { foreignKey: 'courseid' });
    };
    return Course;
};