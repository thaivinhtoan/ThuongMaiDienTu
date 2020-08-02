'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "username": "phandiem@gmail.com",
            "password": "diem123",
            "fullname": "Phil Van Arsdall",
            "avatarPath": "/img/product/review-1.png",
            "isAdmin": true
        }, {
            "username": "mytien@gmail.com",
            "password": "tien123",
            "fullname": "Harris Ryder",
            "avatarPath": "/img/product/review-2.png",
            "isAdmin": false
        }, {
            "username": "khaitran@gmail.com",
            "password": "tran123",
            "fullname": "Danita Jamot",
            "avatarPath": "/img/product/review-3.png",
            "isAdmin": true
        }, {
            "username": "vinhtoan@gmail.com",
            "password": "toan123",
            "fullname": "Fabiano Elcum",
            "avatarPath": "/img/product/review-1.png",
            "isAdmin": false
        }, {
            "username": "lvminh@gmail.com",
            "password": "minh123",
            "fullname": "Tresa Carruthers",
            "avatarPath": "/img/product/review-2.png",
            "isAdmin": true
        }, {
            "username": "huudung@gmail.com",
            "password": "dung123",
            "fullname": "Annie Hucklesby",
            "avatarPath": "/img/product/review-3.png",
            "isAdmin": false
        }, {
            "username": "tieumi@mail.com",
            "password": "mi123",
            "fullname": "Estella Asty",
            "avatarPath": "/img/product/review-1.png",
            "isAdmin": false
        }, {
            "username": "minhanh@gmail.com",
            "password": "anh123",
            "fullname": "Donna Hutton",
            "avatarPath": "/img/product/review-2.png",
            "isAdmin": false
        }, {
            "username": "quocbinh@gmail.com",
            "password": "binh123",
            "fullname": "Katerina Ornillos",
            "avatarPath": "/img/product/review-3.png",
            "isAdmin": false
        }, {
            "username": "lam@gmail.com",
            "password": "lam123",
            "fullname": "Derry Malam",
            "avatarPath": "/img/product/review-1.png",
            "isAdmin": false
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Users', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};