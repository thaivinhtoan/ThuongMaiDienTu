'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        message: DataTypes.TEXT
    }, {tableName: 'comments'});
    Comment.associate = function(models) {
        // associations can be defined here
        Comment.belongsTo(models.User, { foreignKey: 'userid' });
        Comment.belongsTo(models.Course, { foreignKey: 'courseid' });
        Comment.belongsTo(models.Comment, { as: 'Parent', foreignKey: 'parentCommentid' });
        Comment.hasMany(models.Comment, { as: 'SubComments', foreignKey: 'parentCommentid' });
    };
    return Comment;
};