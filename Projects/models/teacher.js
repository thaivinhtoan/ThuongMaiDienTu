'use strict';
module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('Teacher', {
        name: DataTypes.STRING,
        imagepath: DataTypes.TEXT,
        summary: DataTypes.TEXT
    }, {tableName: 'teachers'});
    Teacher.associate = function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Course, { foreignKey: 'teacherid' });
    };
    return Teacher;
};