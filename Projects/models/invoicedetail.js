'use strict';
module.exports = (sequelize, DataTypes) => {
    const InvoiceDetail = sequelize.define('InvoiceDetail', {
        price: DataTypes.DECIMAL,
        datepurchase: DataTypes.DATE
    }, {
        timestamps: true
    }, {tableName: 'invoicedetails'});
    InvoiceDetail.associate = function(models) {
        // associations can be defined here
        InvoiceDetail.belongsTo(models.CodeCourse, { foreignKey: 'codecourseid' });
        InvoiceDetail.belongsTo(models.User, { foreignKey: 'userid' });
        InvoiceDetail.belongsTo(models.Course, { foreignKey: 'courseid' });
    };
    return InvoiceDetail;
};