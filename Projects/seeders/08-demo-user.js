'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "username": "phandiem@gmail.com",
            "password": "diem123",
            "fullname": "Phil Van Arsdall",
            "avatarpath": "/img/product/review-1.png",
            "isadmin": true
        }, {
            "username": "mytien@gmail.com",
            "password": "tien123",
            "fullname": "Harris Ryder",
            "avatarpath": "/img/product/review-2.png",
            "isadmin": false
        }, {
            "username": "khaitran@gmail.com",
            "password": "tran123",
            "fullname": "Danita Jamot",
            "avatarpath": "/img/product/review-3.png",
            "isadmin": true
        }, {
            "username": "vinhtoan@gmail.com",
            "password": "toan123",
            "fullname": "Fabiano Elcum",
            "avatarpath": "/img/product/review-1.png",
            "isadmin": false
        }, {
            "username": "lvminh@gmail.com",
            "password": "minh123",
            "fullname": "Tresa Carruthers",
            "avatarpath": "/img/product/review-2.png",
            "isadmin": true
        }, {
            "username": "huudung@gmail.com",
            "password": "dung123",
            "fullname": "Annie Hucklesby",
            "avatarpath": "/img/product/review-3.png",
            "isadmin": false
        }, {
            "username": "tieumi@mail.com",
            "password": "mi123",
            "fullname": "Estella Asty",
            "avatarpath": "/img/product/review-1.png",
            "isadmin": false
        }, {
            "username": "minhanh@gmail.com",
            "password": "anh123",
            "fullname": "Donna Hutton",
            "avatarpath": "/img/product/review-2.png",
            "isadmin": false
        }, {
            "username": "quocbinh@gmail.com",
            "password": "binh123",
            "fullname": "Katerina Ornillos",
            "avatarpath": "/img/product/review-3.png",
            "isadmin": false
        }, {
            "username": "lam@gmail.com",
            "password": "lam123",
            "fullname": "Derry Malam",
            "avatarpath": "/img/product/review-1.png",
            "isadmin": false
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('users', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};