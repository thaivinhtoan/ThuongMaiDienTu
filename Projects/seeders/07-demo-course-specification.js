'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { "courseid": 1, "specificationid": 1, "description": "mauris" },
            { "courseid": 1, "specificationid": 2, "description": "sapien urna pretium" },
            { "courseid": 1, "specificationid": 3, "description": "diam neque" },
            { "courseid": 1, "specificationid": 4, "description": "eleifend" },
            { "courseid": 1, "specificationid": 5, "description": "semper" },

            { "courseid": 2, "specificationid": 1, "description": "tristique in" },
            { "courseid": 2, "specificationid": 2, "description": "duis" },
            { "courseid": 2, "specificationid": 3, "description": "at lorem" },
            { "courseid": 2, "specificationid": 4, "description": "amet eros" },
            { "courseid": 2, "specificationid": 5, "description": "ligula" },

            { "courseid": 3, "specificationid": 1, "description": "quam sapien" },
            { "courseid": 3, "specificationid": 2, "description": "eget nunc" },
            { "courseid": 3, "specificationid": 3, "description": "dictumst" },
            { "courseid": 3, "specificationid": 4, "description": "quis" },
            { "courseid": 3, "specificationid": 5, "description": "magna ac consequat" },

            { "courseid": 4, "specificationid": 1, "description": "elit ac" },
            { "courseid": 4, "specificationid": 2, "description": "nisi at nibh" },
            { "courseid": 4, "specificationid": 3, "description": "lorem ipsum" },
            { "courseid": 4, "specificationid": 4, "description": "est" },
            { "courseid": 4, "specificationid": 5, "description": "justo pellentesque" },

            { "courseid": 5, "specificationid": 1, "description": "vestibulum ac est" },
            { "courseid": 5, "specificationid": 2, "description": "quis lectus" },
            { "courseid": 5, "specificationid": 3, "description": "congue vivamus" },
            { "courseid": 5, "specificationid": 4, "description": "justo" },
            { "courseid": 5, "specificationid": 5, "description": "pede malesuada" },
            

            { "courseid": 6, "specificationid": 1, "description": "non sodales sed" },
            { "courseid": 6, "specificationid": 2, "description": "est quam pharetra" },
            { "courseid": 6, "specificationid": 3, "description": "blandit" },
            { "courseid": 6, "specificationid": 4, "description": "quam nec dui" },
            { "courseid": 6, "specificationid": 5, "description": "nisi" },
            
            { "courseid": 7, "specificationid": 1, "description": "turpis a" },
            { "courseid": 7, "specificationid": 2, "description": "orci vehicula" },
            { "courseid": 7, "specificationid": 3, "description": "ipsum dolor sit" },
            { "courseid": 7, "specificationid": 4, "description": "nulla sed" },
            { "courseid": 7, "specificationid": 5, "description": "sed tristique in" },
            
            { "courseid": 8, "specificationid": 1, "description": "placerat ante nulla" },
            { "courseid": 8, "specificationid": 2, "description": "venenatis turpis enim" },
            { "courseid": 8, "specificationid": 3, "description": "sit amet justo" },
            { "courseid": 8, "specificationid": 4, "description": "est donec odio" },
            { "courseid": 8, "specificationid": 5, "description": "hac" },
            
            { "courseid": 9, "specificationid": 1, "description": "sed" },
            { "courseid": 9, "specificationid": 2, "description": "non" },
            { "courseid": 9, "specificationid": 3, "description": "ut" },
            { "courseid": 9, "specificationid": 4, "description": "mattis egestas metus" },
            { "courseid": 9, "specificationid": 5, "description": "ornare" },
            
            { "courseid": 10, "specificationid": 1, "description": "non" },
            { "courseid": 10, "specificationid": 2, "description": "nunc nisl" },
            { "courseid": 10, "specificationid": 3, "description": "vulputate ut" },
            { "courseid": 10, "specificationid": 4, "description": "ultrices vel" },
            { "courseid": 10, "specificationid": 5, "description": "molestie nibh" },
            
            { "courseid": 11, "specificationid": 1, "description": "aliquam augue quam" },
            { "courseid": 11, "specificationid": 2, "description": "pede posuere" },
            { "courseid": 11, "specificationid": 3, "description": "nibh" },
            { "courseid": 11, "specificationid": 4, "description": "feugiat non" },
            { "courseid": 11, "specificationid": 5, "description": "libero ut" },
            
            { "courseid": 12, "specificationid": 1, "description": "vivamus vestibulum" },
            { "courseid": 12, "specificationid": 2, "description": "vel pede" },
            { "courseid": 12, "specificationid": 3, "description": "adipiscing" },
            { "courseid": 12, "specificationid": 4, "description": "diam nam" },
            { "courseid": 12, "specificationid": 5, "description": "risus" },
            
            { "courseid": 13, "specificationid": 1, "description": "dui nec nisi" },
            { "courseid": 13, "specificationid": 2, "description": "amet sapien" },
            { "courseid": 13, "specificationid": 3, "description": "luctus et ultrices" },
            { "courseid": 13, "specificationid": 4, "description": "nunc" },
            { "courseid": 13, "specificationid": 5, "description": "diam" },
            
            { "courseid": 14, "specificationid": 1, "description": "porttitor" },
            { "courseid": 14, "specificationid": 2, "description": "eget eros elementum" },
            { "courseid": 14, "specificationid": 3, "description": "nulla" },
            { "courseid": 14, "specificationid": 4, "description": "risus" },
            { "courseid": 14, "specificationid": 5, "description": "pede" },
            
            { "courseid": 15, "specificationid": 1, "description": "vulputate vitae nisl" },
            { "courseid": 15, "specificationid": 2, "description": "ut nunc" },
            { "courseid": 15, "specificationid": 3, "description": "fermentum" },
            { "courseid": 15, "specificationid": 4, "description": "sem duis" },
            { "courseid": 15, "specificationid": 5, "description": "enim" },
            
            { "courseid": 16, "specificationid": 1, "description": "neque vestibulum" },
            { "courseid": 16, "specificationid": 2, "description": "consectetuer eget" },
            { "courseid": 16, "specificationid": 3, "description": "justo morbi ut" },
            { "courseid": 16, "specificationid": 4, "description": "congue" },
            { "courseid": 16, "specificationid": 5, "description": "maecenas ut" },
            
            { "courseid": 17, "specificationid": 1, "description": "luctus et" },
            { "courseid": 17, "specificationid": 2, "description": "non velit" },
            { "courseid": 17, "specificationid": 3, "description": "vestibulum ante" },
            { "courseid": 17, "specificationid": 4, "description": "ac" },
            { "courseid": 17, "specificationid": 5, "description": "morbi vel lectus" },
            
            { "courseid": 18, "specificationid": 1, "description": "donec pharetra" },
            { "courseid": 18, "specificationid": 2, "description": "duis bibendum morbi" },
            { "courseid": 18, "specificationid": 3, "description": "nullam sit amet" },
            { "courseid": 18, "specificationid": 4, "description": "in libero" },
            { "courseid": 18, "specificationid": 5, "description": "interdum venenatis" },
            
            { "courseid": 19, "specificationid": 1, "description": "tincidunt" },
            { "courseid": 19, "specificationid": 2, "description": "felis fusce" },
            { "courseid": 19, "specificationid": 3, "description": "nisl venenatis" },
            { "courseid": 19, "specificationid": 4, "description": "ante ipsum" },
            { "courseid": 19, "specificationid": 5, "description": "sapien in sapien" },
            
            { "courseid": 20, "specificationid": 1, "description": "odio curabitur" },
            { "courseid": 20, "specificationid": 2, "description": "odio porttitor id" },
            { "courseid": 20, "specificationid": 3, "description": "lacus" },
            { "courseid": 20, "specificationid": 4, "description": "id ligula" },
            { "courseid": 20, "specificationid": 5, "description": "bibendum" },
            
            { "courseid": 21, "specificationid": 1, "description": "vestibulum" },
            { "courseid": 21, "specificationid": 2, "description": "nam" },
            { "courseid": 21, "specificationid": 3, "description": "metus sapien" },
            { "courseid": 21, "specificationid": 4, "description": "diam" },
            { "courseid": 21, "specificationid": 5, "description": "risus" },
            
            { "courseid": 22, "specificationid": 1, "description": "pulvinar sed nisl" },
            { "courseid": 22, "specificationid": 2, "description": "sociis natoque penatibus" },
            { "courseid": 22, "specificationid": 3, "description": "nulla dapibus" },
            { "courseid": 22, "specificationid": 4, "description": "a suscipit" },
            { "courseid": 22, "specificationid": 5, "description": "vestibulum eget vulputate" },
            
            { "courseid": 23, "specificationid": 1, "description": "parturient" },
            { "courseid": 23, "specificationid": 2, "description": "eros" },
            { "courseid": 23, "specificationid": 3, "description": "id mauris vulputate" },
            { "courseid": 23, "specificationid": 4, "description": "congue" },
            { "courseid": 23, "specificationid": 5, "description": "pulvinar" },
            
            { "courseid": 24, "specificationid": 1, "description": "parturient montes nascetur" },
            { "courseid": 24, "specificationid": 2, "description": "justo in" },
            { "courseid": 24, "specificationid": 3, "description": "nulla" },
            { "courseid": 24, "specificationid": 4, "description": "proin leo odio" },
            { "courseid": 24, "specificationid": 5, "description": "nulla nunc purus" },
            
            { "courseid": 25, "specificationid": 1, "description": "arcu" },
            { "courseid": 25, "specificationid": 2, "description": "nec" },
            { "courseid": 25, "specificationid": 3, "description": "non mi integer" },
            { "courseid": 25, "specificationid": 4, "description": "adipiscing molestie" },
            { "courseid": 25, "specificationid": 5, "description": "morbi" },
        
            { "courseid": 26, "specificationid": 1, "description": "sed lacus" },
            { "courseid": 26, "specificationid": 2, "description": "diam" },
            { "courseid": 26, "specificationid": 3, "description": "aenean" },
            { "courseid": 26, "specificationid": 4, "description": "lobortis est phasellus" },
            { "courseid": 26, "specificationid": 5, "description": "nisl aenean lectus" },

            { "courseid": 27, "specificationid": 1, "description": "leo odio" },
            { "courseid": 27, "specificationid": 2, "description": "dolor sit amet" },
            { "courseid": 27, "specificationid": 3, "description": "libero" },
            { "courseid": 27, "specificationid": 4, "description": "massa volutpat convallis" },
            { "courseid": 27, "specificationid": 5, "description": "orci pede" },
            
            { "courseid": 28, "specificationid": 1, "description": "imperdiet sapien urna" },
            { "courseid": 28, "specificationid": 2, "description": "neque" },
            { "courseid": 28, "specificationid": 3, "description": "dui" },
            { "courseid": 28, "specificationid": 4, "description": "lobortis est" },
            { "courseid": 28, "specificationid": 5, "description": "vel enim" },
            
            { "courseid": 29, "specificationid": 1, "description": "justo" },
            { "courseid": 29, "specificationid": 2, "description": "ipsum" },
            { "courseid": 29, "specificationid": 3, "description": "molestie sed justo" },
            { "courseid": 29, "specificationid": 4, "description": "vitae" },
            { "courseid": 29, "specificationid": 5, "description": "nec" },
            
            { "courseid": 30, "specificationid": 1, "description": "nec nisi" },
            { "courseid": 30, "specificationid": 2, "description": "vivamus" },
            { "courseid": 30, "specificationid": 3, "description": "tellus semper interdum" },
            { "courseid": 30, "specificationid": 4, "description": "dapibus duis at" },
            { "courseid": 30, "specificationid": 5, "description": "elementum pellentesque quisque" },
            
            { "courseid": 31, "specificationid": 1, "description": "sed accumsan" },
            { "courseid": 31, "specificationid": 2, "description": "varius ut" },
            { "courseid": 31, "specificationid": 3, "description": "sodales" },
            { "courseid": 31, "specificationid": 4, "description": "eros viverra" },
            { "courseid": 31, "specificationid": 5, "description": "tempus vivamus" },
            
            { "courseid": 32, "specificationid": 1, "description": "vel" },
            { "courseid": 32, "specificationid": 2, "description": "convallis tortor risus" },
            { "courseid": 32, "specificationid": 3, "description": "velit vivamus vel" },
            { "courseid": 32, "specificationid": 4, "description": "non" },
            { "courseid": 32, "specificationid": 5, "description": "metus" },
            
            { "courseid": 33, "specificationid": 1, "description": "vivamus" },
            { "courseid": 33, "specificationid": 2, "description": "auctor gravida sem" },
            { "courseid": 33, "specificationid": 3, "description": "at" },
            { "courseid": 33, "specificationid": 4, "description": "at" },
            { "courseid": 33, "specificationid": 5, "description": "aliquam quis turpis" },
            
            { "courseid": 34, "specificationid": 1, "description": "quis orci" },
            { "courseid": 34, "specificationid": 2, "description": "maecenas tincidunt lacus" },
            { "courseid": 34, "specificationid": 3, "description": "pede morbi porttitor" },
            { "courseid": 34, "specificationid": 4, "description": "lorem vitae" },
            { "courseid": 34, "specificationid": 5, "description": "purus phasellus" },
            
            { "courseid": 35, "specificationid": 1, "description": "ante" },
            { "courseid": 35, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 35, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 35, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 35, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 36, "specificationid": 1, "description": "ante" },
            { "courseid": 36, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 36, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 36, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 36, "specificationid": 5, "description": "aenean lectus pellentesque" },
                
            { "courseid": 37, "specificationid": 1, "description": "ante" },
            { "courseid": 37, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 37, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 37, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 37, "specificationid": 5, "description": "aenean lectus pellentesque" },
                
            { "courseid": 38, "specificationid": 1, "description": "ante" },
            { "courseid": 38, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 38, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 38, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 38, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 39, "specificationid": 1, "description": "ante" },
            { "courseid": 39, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 39, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 39, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 39, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 40, "specificationid": 1, "description": "ante" },
            { "courseid": 40, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 40, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 40, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 40, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 41, "specificationid": 1, "description": "ante" },
            { "courseid": 41, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 41, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 41, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 41, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 42, "specificationid": 1, "description": "ante" },
            { "courseid": 42, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 42, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 42, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 42, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 43, "specificationid": 1, "description": "ante" },
            { "courseid": 43, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 43, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 43, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 43, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 44, "specificationid": 1, "description": "ante" },
            { "courseid": 44, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 44, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 44, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 44, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 45, "specificationid": 1, "description": "ante" },
            { "courseid": 45, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 45, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 45, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 45, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 46, "specificationid": 1, "description": "ante" },
            { "courseid": 46, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 46, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 46, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 46, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 47, "specificationid": 1, "description": "ante" },
            { "courseid": 47, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 47, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 47, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 47, "specificationid": 5, "description": "aenean lectus pellentesque" },
        
            { "courseid": 48, "specificationid": 1, "description": "ante" },
            { "courseid": 48, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 48, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 48, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 48, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 49, "specificationid": 1, "description": "ante" },
            { "courseid": 49, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 49, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 49, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 49, "specificationid": 5, "description": "aenean lectus pellentesque" },
                    
            { "courseid": 50, "specificationid": 1, "description": "ante" },
            { "courseid": 50, "specificationid": 2, "description": "massa volutpat" },
            { "courseid": 50, "specificationid": 3, "description": "dolor sit amet" },
            { "courseid": 50, "specificationid": 4, "description": "maecenas pulvinar lobortis" },
            { "courseid": 50, "specificationid": 5, "description": "aenean lectus pellentesque" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('coursespecifications', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('coursespecifications', null, {});

    }
};