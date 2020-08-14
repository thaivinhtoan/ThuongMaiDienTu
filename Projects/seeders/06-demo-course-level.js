'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { "courseid": 1, "levelid": 1, "imagepath": "/img/product/product1.png" },
            { "courseid": 1, "levelid": 2, "imagepath": "/img/product/product1.png" },
            { "courseid": 1, "levelid": 3, "imagepath": "/img/product/product1.png" },
            { "courseid": 2, "levelid": 1, "imagepath": "/img/product/product2.png" },
            { "courseid": 2, "levelid": 1, "imagepath": "/img/product/product2.png" },
            { "courseid": 3, "levelid": 1, "imagepath": "/img/product/product3.png" },
            { "courseid": 3, "levelid": 2, "imagepath": "/img/product/product3.png" },
            { "courseid": 3, "levelid": 3, "imagepath": "/img/product/product3.png" },
            { "courseid": 4, "levelid": 2, "imagepath": "/img/product/product4.png" },
            { "courseid": 5, "levelid": 1, "imagepath": "/img/product/product5.png" },
            { "courseid": 5, "levelid": 2, "imagepath": "/img/product/product5.png" },
            { "courseid": 6, "levelid": 3, "imagepath": "/img/product/product6.png" },
            { "courseid": 7, "levelid": 1, "imagepath": "/img/product/product7.png" },
            { "courseid": 7, "levelid": 2, "imagepath": "/img/product/product7.png" },
            { "courseid": 7, "levelid": 2, "imagepath": "/img/product/product7.png" },
            { "courseid": 8, "levelid": 3, "imagepath": "/img/product/product8.png" },
            { "courseid": 9, "levelid": 1, "imagepath": "/img/product/product9.png" },
            { "courseid": 9, "levelid": 2, "imagepath": "/img/product/product9.png" },
            { "courseid": 10, "levelid": 1, "imagepath": "/img/product/product10.png" },
            { "courseid": 10, "levelid": 2, "imagepath": "/img/product/product10.png" },
            { "courseid": 11, "levelid": 2, "imagepath": "/img/product/product11.png" },
            { "courseid": 12, "levelid": 1, "imagepath": "/img/product/produc12.png" },
            { "courseid": 13, "levelid": 2, "imagepath": "/img/product/product13.png" },
            { "courseid": 14, "levelid": 3, "imagepath": "/img/product/product14.png" },
            { "courseid": 14, "levelid": 2, "imagepath": "/img/product/product14.png" },
            { "courseid": 15, "levelid": 1, "imagepath": "/img/product/product15.png" },
            { "courseid": 15, "levelid": 2, "imagepath": "/img/product/product15.png" },
            { "courseid": 16, "levelid": 2, "imagepath": "/img/product/product16.png" },
            { "courseid": 17, "levelid": 1, "imagepath": "/img/product/product17.png" },
            { "courseid": 17, "levelid": 2, "imagepath": "/img/product/product17.png" },
            { "courseid": 18, "levelid": 1, "imagepath": "/img/product/product18.png" },
            { "courseid": 18, "levelid": 2, "imagepath": "/img/product/product18.png" },
            { "courseid": 19, "levelid": 3, "imagepath": "/img/product/product19.png" },
            { "courseid": 20, "levelid": 1, "imagepath": "/img/product/product20.png" },
            { "courseid": 20, "levelid": 2, "imagepath": "/img/product/product20.png" },
            { "courseid": 20, "levelid": 3, "imagepath": "/img/product/product20.png" },
            { "courseid": 21, "levelid": 1, "imagepath": "/img/product/product21.png" },
            { "courseid": 22, "levelid": 2, "imagepath": "/img/product/product22.png" },
            { "courseid": 23, "levelid": 3, "imagepath": "/img/product/product23.png" },
            { "courseid": 24, "levelid": 1, "imagepath": "/img/product/product24.png" },
            { "courseid": 25, "levelid": 1, "imagepath": "/img/product/product25.png" },
            { "courseid": 26, "levelid": 2, "imagepath": "/img/product/product26.png" },
            { "courseid": 27, "levelid": 1, "imagepath": "/img/product/product27.png" },
            { "courseid": 27, "levelid": 2, "imagepath": "/img/product/product27.png" },
            { "courseid": 28, "levelid": 1, "imagepath": "/img/product/product28.png" },
            { "courseid": 28, "levelid": 2, "imagepath": "/img/product/product28.png" },
            { "courseid": 29, "levelid": 2, "imagepath": "/img/product/product29.png" },
            { "courseid": 29, "levelid": 1, "imagepath": "/img/product/product29.png" },
            { "courseid": 31, "levelid": 3, "imagepath": "/img/product/product31.png" },
            { "courseid": 32, "levelid": 2, "imagepath": "/img/product/product32.png" },
            { "courseid": 33, "levelid": 3, "imagepath": "/img/product/product33.png" },
            { "courseid": 35, "levelid": 3, "imagepath": "/img/product/product35.png" },
            { "courseid": 36, "levelid": 1, "imagepath": "/img/product/product36.png" },
            { "courseid": 37, "levelid": 3, "imagepath": "/img/product/product37.png" },
            { "courseid": 39, "levelid": 1, "imagepath": "/img/product/product39.png" },
            { "courseid": 40, "levelid": 2, "imagepath": "/img/product/product40.png" },
            { "courseid": 40, "levelid": 3, "imagepath": "/img/product/product40.png" },
            { "courseid": 40, "levelid": 1, "imagepath": "/img/product/product40.png" },
            { "courseid": 41, "levelid": 1, "imagepath": "/img/product/product41.png" },
            { "courseid": 41, "levelid": 2, "imagepath": "/img/product/product41.png" },
            { "courseid": 42, "levelid": 3, "imagepath": "/img/product/product42.png" },
            { "courseid": 42, "levelid": 1, "imagepath": "/img/product/product42.png" },
            { "courseid": 42, "levelid": 2, "imagepath": "/img/product/product42.png" },
            { "courseid": 43, "levelid": 3, "imagepath": "/img/product/product43.png" },
            { "courseid": 43, "levelid": 2, "imagepath": "/img/product/product43.png" },
            { "courseid": 43, "levelid": 1, "imagepath": "/img/product/product43.png" },
            { "courseid": 44, "levelid": 1, "imagepath": "/img/product/product44.png" },
            { "courseid": 44, "levelid": 2, "imagepath": "/img/product/product44.png" },
            { "courseid": 45, "levelid": 1, "imagepath": "/img/product/product45.png" },
            { "courseid": 45, "levelid": 2, "imagepath": "/img/product/product45.png" },
            { "courseid": 45, "levelid": 3, "imagepath": "/img/product/product45.png" },
            { "courseid": 46, "levelid": 1, "imagepath": "/img/product/product46.png" },
            { "courseid": 46, "levelid": 2, "imagepath": "/img/product/product46.png" },
            { "courseid": 47, "levelid": 1, "imagepath": "/img/product/product47.png" },
            { "courseid": 47, "levelid": 2, "imagepath": "/img/product/product47.png" },
            { "courseid": 48, "levelid": 1, "imagepath": "/img/product/product48.png" },
            { "courseid": 49, "levelid": 3, "imagepath": "/img/product/product49.png" },
            { "courseid": 50, "levelid": 1, "imagepath": "/img/product/product50.png" },
            { "courseid": 50, "levelid": 3, "imagepath": "/img/product/product50.png" },
            { "courseid": 50, "levelid": 2, "imagepath": "/img/product/product50.png" }
            
         ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('courselevels', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('courselevels', null, {});

    }
};