'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        message: DataTypes.TEXT,
        rating: DataTypes.INTEGER
    }, {tableName: 'reviews'});
    Review.associate = function(models) {
        // associations can be defined here
        Review.belongsTo(models.Course, { foreignKey: 'courseid' });
        Review.belongsTo(models.User, { foreignKey: 'userid' });
    };
    return Review;
};