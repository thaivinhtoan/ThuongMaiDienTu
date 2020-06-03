'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    imagepath: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
      Category.hasMany(models.Course, { foreignKey: 'categoryId' });
  };
  return Category;
};