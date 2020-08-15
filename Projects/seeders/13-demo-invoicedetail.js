'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "userid": 11,
            "codecourseid": 1,
            "courseid": 1,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 1,
            "codecourseid": 2,
            "courseid": 2,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 2,
            "codecourseid": 3,
            "courseid": 3,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 3,
            "codecourseid": 4,
            "courseid": 4,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 4,
            "codecourseid": 5,
            "courseid": 5,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 11,
            "codecourseid": 6,
            "courseid": 6,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 5,
            "codecourseid": 7,
            "courseid": 7,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 11,
            "codecourseid": 8,
            "courseid": 8,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 7,
            "codecourseid": 9,
            "courseid": 9,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 7,
            "codecourseid": 10,
            "courseid": 10,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 8,
            "codecourseid": 11,
            "courseid": 11,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 9,
            "codecourseid": 12,
            "courseid": 12,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 9,
            "codecourseid": 13,
            "courseid": 13,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 10,
            "codecourseid": 14,
            "courseid": 14,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 1,
            "codecourseid": 15,
            "courseid": 15,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 2,
            "codecourseid": 16,
            "courseid": 16,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 3,
            "codecourseid": 17,
            "courseid": 17,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 4,
            "codecourseid": 18,
            "courseid": 18,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 5,
            "codecourseid": 19,
            "courseid": 19,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 6,
            "codecourseid": 20,
            "courseid": 20,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 7,
            "codecourseid": 21,
            "courseid": 21,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 8,
            "codecourseid": 22,
            "courseid": 22,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 9,
            "codecourseid": 23,
            "courseid": 23,
            "price": "100",
            "datepurchase": "2020-07-01"
          }, {
            "userid": 11,
            "codecourseid": 22,
            "courseid": 22,
            "price": "100",
            "datepurchase": "2020-07-01" 
          }, {
            "userid": 11,
            "codecourseid": 23,
            "courseid": 23,
            "price": "100",
            "datepurchase": "2020-07-01"
          }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('invoicedetails', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('invoicedetails', null, {});

    }
};