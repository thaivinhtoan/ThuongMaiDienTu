'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Nguyễn Thị Mỹ Tiên' , imagepath: '/img/tearchers/1.jpg'},
            { name: 'Thái Vĩnh Toàn' , imagepath: '/img/tearchers/2.jpg'},
            { name: 'Phan Thị Mỹ Diễm' , imagepath: '/img/tearchers/3.jpg' },
            { name: 'Huỳnh Khải trân', imagepath: '/img/tearchers/4.jpg' },
            { name: 'Lương Vĩ Minh' , imagepath: '/img/tearchers/5.png'},
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('teachers', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('teachers', null, {});

    }
};