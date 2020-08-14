'use strict';
module.exports = (sequelize, DataTypes) => {
    const CourseLevel = sequelize.define('CourseLevel', {
        imagepath: DataTypes.TEXT
    }, {tableName: 'courselevels'});
    CourseLevel.associate = function(models) {
        // associations can be defined here
        CourseLevel.belongsTo(models.Level, { foreignKey: 'levelid' });
        CourseLevel.belongsTo(models.Course, { foreignKey: 'courseid' });
    };
    return CourseLevel;
};