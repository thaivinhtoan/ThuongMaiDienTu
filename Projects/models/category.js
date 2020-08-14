'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        summary: DataTypes.TEXT,
        imagepath: DataTypes.TEXT
    }, {tableName: 'categories'});
    Category.associate = function(models) {
        // associations can be defined here
        Category.hasMany(models.Course, { foreignKey: 'categoryid' });
    };
    return Category;
};