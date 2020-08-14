'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.STRING,
        avatarpath: DataTypes.STRING,
        isadmin: DataTypes.BOOLEAN
    }, {tableName: 'users'});
    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Comment, { foreignKey: 'userid' });
        User.hasMany(models.Review, { foreignKey: 'userid' });
        User.hasMany(models.InvoiceDetail, { foreignKey: 'userid' });
    };
    return User;
};