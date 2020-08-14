'use strict';
module.exports = (sequelize, DataTypes) => {
    const ContentCourse = sequelize.define('ContentCourse', {
        lesson: DataTypes.TEXT,
        topic: DataTypes.TEXT,
        link: DataTypes.TEXT,
        description: DataTypes.TEXT
    }, {tableName: 'contentcourses'});
    ContentCourse.associate = function(models) {
        // associations can be defined here
        ContentCourse.belongsTo(models.Course, { foreignKey: 'courseid' });
    };
    return ContentCourse;
};