'use strict';
module.exports = (sequelize, DataTypes) => {
  const CodeCourse = sequelize.define('CodeCourse', {
    code: DataTypes.TEXT,
    status: DataTypes.TEXT,
    dateUse: DataTypes.DATE
  }, {});
  CodeCourse.associate = function(models) {
    // associations can be defined here
    CodeCourse.belongsTo(models.Course, { foreignKey: 'courseId' });
    CodeCourse.hasMany(models.InvoiceDetail, { foreignKey: 'codecourseId' });

  };
  return CodeCourse;
};