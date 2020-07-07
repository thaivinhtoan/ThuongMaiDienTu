'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        summary: DataTypes.TEXT,
        description: DataTypes.TEXT,
        availability: DataTypes.BOOLEAN,
        imagepath: DataTypes.TEXT,
        thumbnailPath: DataTypes.TEXT,
        overallReview: DataTypes.DOUBLE,
        reviewCount: DataTypes.INTEGER
    }, {});
    Course.associate = function(models) {
        // associations can be defined here

        Course.belongsTo(models.Category, { foreignKey: 'categoryId' });

    };
    return Course;
};