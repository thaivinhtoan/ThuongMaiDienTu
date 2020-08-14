'use strict';
module.exports = (sequelize, DataTypes) => {
    const CodeCourse = sequelize.define('CodeCourse', {
        code: DataTypes.TEXT,
        status: DataTypes.TEXT,
        dateuse: DataTypes.DATE
    }, {tableName: 'codecourses'});
    CodeCourse.associate = function(models) {
        // associations can be defined here
        CodeCourse.belongsTo(models.Course, { foreignKey: 'courseid' });
        CodeCourse.hasMany(models.InvoiceDetail, { foreignKey: 'codecourseid' });

    };
    return CodeCourse;
};