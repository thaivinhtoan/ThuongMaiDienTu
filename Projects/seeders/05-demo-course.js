'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: 'HTML and CSS for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product1.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 1,
                categoryid: 1,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'HTML and CSS from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product2.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 2,
                categoryid: 1,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'HTML and CSS for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product3.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 3,
                categoryid: 1,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'HTML and CSS vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product4.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 4,
                categoryid: 1,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'HTML and CSS After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product5.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 5,
                categoryid: 1,
                reviewcount: 3,
                overallreview: 2.67
            },

            {
                name: 'HTML and CSS accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product6.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 1,
                categoryid: 1,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'HTML and CSS field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product7.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 2,
                categoryid: 1,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'HTML and CSS practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product8.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 3,
                categoryid: 1,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'HTML and CSS teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product9.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 4,
                categoryid: 1,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'HTML and CSS for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product10.png',
                thumbnailpath: '/img/product/product-sm-1.png',
                teacherid: 5,
                categoryid: 1,
                reviewcount: 3,
                overallreview: 2.67
            },
            //JavaScript
            {
                name: 'JavaScript for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product11.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 1,
                categoryid: 2,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'JavaScript from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product12.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 2,
                categoryid: 2,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'JavaScript for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product13.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 3,
                categoryid: 2,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'JavaScript vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product14.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 4,
                categoryid: 2,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'JavaScript After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product15.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 5,
                categoryid: 2,
                reviewcount: 3,
                overallreview: 2.67
            },

            {
                name: 'JavaScript accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product16.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 1,
                categoryid: 2,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'JavaScript field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product17.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 2,
                categoryid: 2,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'JavaScript practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product18.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 3,
                categoryid: 2,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'JavaScript teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product19.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 4,
                categoryid: 2,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'JavaScript for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product20.png',
                thumbnailpath: '/img/product/product-sm-2.png',
                teacherid: 5,
                categoryid: 2,
                reviewcount: 3,
                overallreview: 2.67
            },
            //XML Tutorials
            {
                name: 'XML Tutorials for every one',
                price: '50.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product21.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 1,
                categoryid: 3,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'XML Tutorials from basic to advanced',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product22.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 2,
                categoryid: 3,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'XML Tutorials for lazy people',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product23.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 3,
                categoryid: 3,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'XML Tutorials vividly understandable',
                price: '30.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product24.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 4,
                categoryid: 3,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'XML Tutorials After studying, go to work immediately',
                price: '68.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product25.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 5,
                categoryid: 3,
                reviewcount: 3,
                overallreview: 2.67
            },

            {
                name: 'XML Tutorials accessible',
                price: '90.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product26.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 1,
                categoryid: 3,
                reviewcount: 3,
                overallreview: 2.67
            },
        
            {
                name: 'XML Tutorials field fight',
                price: '70.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product27.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 2,
                categoryid: 3,
                reviewcount: 4,
                overallreview: 3.67
            },

            {
                name: 'XML Tutorials practical application',
                price: '80.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product28.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 3,
                categoryid: 3,
                reviewcount: 5,
                overallreview: 4.67
            },


            {
                name: 'XML Tutorials teaching experts',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product29.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 4,
                categoryid: 3,
                reviewcount: 2,
                overallreview: 2.67
            },

            {
                name: 'XML Tutorials for busy people',
                price: '63.81',
                summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
                description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
                availability: false,
                imagepath: '/img/product/product30.png',
                thumbnailpath: '/img/product/product-sm-3.png',
                teacherid: 5,
                categoryid: 3,
                reviewcount: 3,
                overallreview: 2.67
            },

           //SQL
           {
            name: 'SQL for every one',
            price: '50.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product31.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 1,
            categoryid: 4,
            reviewcount: 3,
            overallreview: 2.67
        },
    
        {
            name: 'SQL from basic to advanced',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product32.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 2,
            categoryid: 4,
            reviewcount: 4,
            overallreview: 3.67
        },

        {
            name: 'SQL for lazy people',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product33.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 3,
            categoryid: 4,
            reviewcount: 5,
            overallreview: 4.67
        },


        {
            name: 'SQL vividly understandable',
            price: '30.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product34.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 4,
            categoryid: 4,
            reviewcount: 2,
            overallreview: 2.67
        },

        {
            name: 'SQL After studying, go to work immediately',
            price: '68.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product35.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 5,
            categoryid: 4,
            reviewcount: 3,
            overallreview: 2.67
        },

        {
            name: 'SQL accessible',
            price: '90.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product36.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 1,
            categoryid: 4,
            reviewcount: 3,
            overallreview: 2.67
        },
    
        {
            name: 'SQL field fight',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product37.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 2,
            categoryid: 4,
            reviewcount: 4,
            overallreview: 3.67
        },

        {
            name: 'SQL practical application',
            price: '80.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product38.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 3,
            categoryid: 4,
            reviewcount: 5,
            overallreview: 4.67
        },


        {
            name: 'SQL teaching experts',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product39.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 4,
            categoryid: 4,
            reviewcount: 2,
            overallreview: 2.67
        },

        {
            name: 'SQL for busy people',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product40.png',
            thumbnailpath: '/img/product/product-sm-4.png',
            teacherid: 5,
            categoryid: 4,
            reviewcount: 3,
            overallreview: 2.67
        },
        //Python
        {
            name: 'Python for every one',
            price: '50.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product41.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 1,
            categoryid: 5,
            reviewcount: 3,
            overallreview: 2.67
        },
    
        {
            name: 'Python from basic to advanced',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product42.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 2,
            categoryid: 5,
            reviewcount: 4,
            overallreview: 3.67
        },

        {
            name: 'Python for lazy people',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product43.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 3,
            categoryid: 5,
            reviewcount: 5,
            overallreview: 4.67
        },


        {
            name: 'Python vividly understandable',
            price: '30.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product44.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 4,
            categoryid: 5,
            reviewcount: 2,
            overallreview: 2.67
        },

        {
            name: 'Python After studying, go to work immediately',
            price: '68.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product45.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 5,
            categoryid: 5,
            reviewcount: 3,
            overallreview: 2.67
        },

        {
            name: 'Python accessible',
            price: '90.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product46.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 1,
            categoryid: 5,
            reviewcount: 3,
            overallreview: 2.67
        },
    
        {
            name: 'Python field fight',
            price: '70.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product47.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 2,
            categoryid: 5,
            reviewcount: 4,
            overallreview: 3.67
        },

        {
            name: 'Python practical application',
            price: '80.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product48.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 3,
            categoryid: 5,
            reviewcount: 5,
            overallreview: 4.67
        },


        {
            name: 'Python teaching experts',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product49.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 4,
            categoryid: 5,
            reviewcount: 2,
            overallreview: 2.67
        },

        {
            name: 'Python for busy people',
            price: '63.81',
            summary: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
            description: '<p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.</p><p>Duis bibendum. Morbi non quamnec dui luctus rutrum. Nulla tellus.</p>',
            availability: false,
            imagepath: '/img/product/product50.png',
            thumbnailpath: '/img/product/product-sm-5.png',
            teacherid: 5,
            categoryid: 5,
            reviewcount: 3,
            overallreview: 2.67
        }
        

        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('courses', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('courses', null, {});
    }
};