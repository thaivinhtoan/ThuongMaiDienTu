'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "userId": 1,
            "codecourseId": 1,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 1,
            "codecourseId": 2,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 2,
            "codecourseId": 3,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 3,
            "codecourseId": 4,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 4,
            "codecourseId": 5,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 4,
            "codecourseId": 6,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 5,
            "codecourseId": 7,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 6,
            "codecourseId": 8,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 7,
            "codecourseId": 9,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 7,
            "codecourseId": 10,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 8,
            "codecourseId": 11,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 9,
            "codecourseId": 12,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 9,
            "codecourseId": 13,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 10,
            "codecourseId": 14,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 1,
            "codecourseId": 15,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 2,
            "codecourseId": 16,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 3,
            "codecourseId": 17,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 4,
            "codecourseId": 18,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 5,
            "codecourseId": 19,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 6,
            "codecourseId": 20,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 7,
            "codecourseId": 21,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 8,
            "codecourseId": 22,
            "price": "100",
            "datePurchase": "2020-07-01"
          }, {
            "userId": 9,
            "codecourseId": 23,
            "price": "100",
            "datePurchase": "2020-07-01"
          }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('InvoiceDetails', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('InvoiceDetails', null, {});

    }
};