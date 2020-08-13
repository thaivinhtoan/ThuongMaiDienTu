'use strict';
module.exports = (sequelize, DataTypes) => {
    const InvoiceDetail = sequelize.define('InvoiceDetail', {
        price: DataTypes.DECIMAL,
        datePurchase: DataTypes.DATE
    }, {});
    InvoiceDetail.associate = function(models) {
        // associations can be defined here
        InvoiceDetail.belongsTo(models.CodeCourse, { foreignKey: 'codecourseId' });
        InvoiceDetail.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return InvoiceDetail;
};