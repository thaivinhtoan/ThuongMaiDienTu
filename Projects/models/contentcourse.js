'use strict';
module.exports = (sequelize, DataTypes) => {
    const ContentCourse = sequelize.define('ContentCourse', {
        lesson: DataTypes.TEXT,
        topic: DataTypes.TEXT,
        link: DataTypes.TEXT,
        description: DataTypes.TEXT
    }, {});
    ContentCourse.associate = function(models) {
        // associations can be defined here
        ContentCourse.belongsTo(models.Course, { foreignKey: 'courseId' });
    };
    return ContentCourse;
};