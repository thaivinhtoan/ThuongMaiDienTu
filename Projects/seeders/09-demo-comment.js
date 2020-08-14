'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
                userid: 1,
                courseid: 9,
                parentCommentid: null
            },
            {
                message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
                userid: 2,
                courseid: 28,
                parentCommentid: null
            },
            {
                message: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
                userid: 3,
                courseid: 21,
                parentCommentid: null
            },
            {
                message: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                userid: 4,
                courseid: 20,
                parentCommentid: null
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                userid: 5,
                courseid: 30,
                parentCommentid: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                userid: 6,
                courseid: 9,
                parentCommentid: null
            },
            {
                message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
                userid: 7,
                courseid: 4,
                parentCommentid: null
            },
            {
                message: 'Aenean sit amet justo.',
                userid: 8,
                courseid: 13,
                parentCommentid: null
            },
            {
                message: 'Donec dapibus. Duis at velit eu est congue elementum. In hachabitasse platea dictumst.',
                userid: 9,
                courseid: 12,
                parentCommentid: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
                userid: 10,
                courseid: 20,
                parentCommentid: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
                userid: 1,
                courseid: 32,
                parentCommentid: null
            },
            {
                message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                userid: 2,
                courseid: 12,
                parentCommentid: null
            },
            {
                message: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
                userid: 3,
                courseid: 21,
                parentCommentid: null
            },
            {
                message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userid: 4,
                courseid: 27,
                parentCommentid: null
            },
            {
                message: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                userid: 5,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'Maecenas ut massa quis augue luctus tincidunt.',
                userid: 6,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
                userid: 7,
                courseid: 32,
                parentCommentid: null
            },
            {
                message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
                userid: 8,
                courseid: 22,
                parentCommentid: null
            },
            {
                message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
                userid: 9,
                courseid: 25,
                parentCommentid: null
            },
            {
                message: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userid: 10,
                courseid: 4,
                parentCommentid: null
            },
            {
                message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
                userid: 1,
                courseid: 30,
                parentCommentid: null
            },
            {
                message: 'Aliquam sit amet diam in magna bibendum imperdiet.',
                userid: 2,
                courseid: 27,
                parentCommentid: null
            },
            {
                message: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
                userid: 3,
                courseid: 31,
                parentCommentid: null
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sedaccumsan felis. Ut at dolor quis odio consequat varius. Integer acleo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
                userid: 4,
                courseid: 27,
                parentCommentid: null
            },
            {
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
                userid: 5,
                courseid: 35,
                parentCommentid: null
            },
            {
                message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                userid: 6,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userid: 7,
                courseid: 23,
                parentCommentid: null
            },
            {
                message: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eumagna vulputate luctus. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                userid: 8,
                courseid: 7,
                parentCommentid: null
            },
            {
                message: 'Proin interdum mauris non ligula pellentesque ultrices.',
                userid: 9,
                courseid: 33,
                parentCommentid: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odiojusto, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
                userid: 10,
                courseid: 4,
                parentCommentid: null
            },
            {
                message: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
                userid: 1,
                courseid: 19,
                parentCommentid: null
            },
            {
                message: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userid: 2,
                courseid: 21,
                parentCommentid: null
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userid: 3,
                courseid: 29,
                parentCommentid: null
            },
            {
                message: 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretiumiaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
                userid: 4,
                courseid: 21,
                parentCommentid: null
            },
            {
                message: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
                userid: 5,
                courseid: 20,
                parentCommentid: null
            },
            {
                message: 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
                userid: 6,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
                userid: 7,
                courseid: 17,
                parentCommentid: null
            },
            {
                message: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetramagna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
                userid: 8,
                courseid: 22,
                parentCommentid: null
            },
            {
                message: 'Pellentesque ultrices mattis odio.',
                userid: 9,
                courseid: 19,
                parentCommentid: null
            },
            {
                message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
                userid: 10,
                courseid: 10,
                parentCommentid: null
            },
            {
                message: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
                userid: 1,
                courseid: 35,
                parentCommentid: null
            },
            {
                message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justoeu massa. Donec dapibus.',
                userid: 2,
                courseid: 29,
                parentCommentid: null
            },
            {
                message: 'Nam nulla.',
                userid: 3,
                courseid: 34,
                parentCommentid: null
            },
            {
                message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userid: 4,
                courseid: 12,
                parentCommentid: null
            },
            {
                message: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nullatempus. Vivamus in felis eu sapien cursus vestibulum.',
                userid: 5,
                courseid: 19,
                parentCommentid: null
            },
            {
                message: 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                userid: 6,
                courseid: 20,
                parentCommentid: null
            },
            {
                message: 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
                userid: 7,
                courseid: 27,
                parentCommentid: null
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
                userid: 8,
                courseid: 1,
                parentCommentid: null
            },
            {
                message: 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
                userid: 9,
                courseid: 22,
                parentCommentid: null
            },
            {
                message: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit laciniaerat.',
                userid: 10,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sedsagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
                userid: 1,
                courseid: 2,
                parentCommentid: null
            },
            {
                message: 'Praesent id massa id nisl venenatis lacinia. Aenean sit ametjusto.',
                userid: 2,
                courseid: 11,
                parentCommentid: 88
            },
            {
                message: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
                userid: 3,
                courseid: 22,
                parentCommentid: 38
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userid: 4,
                courseid: 26,
                parentCommentid: null
            },
            {
                message: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
                userid: 5,
                courseid: 35,
                parentCommentid: 41
            },
            {
                message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userid: 6,
                courseid: 14,
                parentCommentid: null
            },
            {
                message: 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userid: 7,
                courseid: 35,
                parentCommentid: 41
            },
            {
                message: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. Inhac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userid: 8,
                courseid: 35,
                parentCommentid: 41
            },
            {
                message: 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
                userid: 9,
                courseid: 19,
                parentCommentid: 31
            },
            {
                message: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aeneansit amet justo. Morbi ut odio.',
                userid: 10,
                courseid: 21,
                parentCommentid: null
            },
            {
                message: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatistristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
                userid: 1,
                courseid: 32,
                parentCommentid: 11
            },
            {
                message: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                userid: 2,
                courseid: 3,
                parentCommentid: null
            },
            {
                message: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                userid: 3,
                courseid: 16,
                parentCommentid: null
            },
            {
                message: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
                userid: 4,
                courseid: 27,
                parentCommentid: 14
            },
            {
                message: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                userid: 5,
                courseid: 25,
                parentCommentid: 19
            },
            {
                message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
                userid: 6,
                courseid: 24,
                parentCommentid: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
                userid: 7,
                courseid: 11,
                parentCommentid: null
            },
            {
                message: 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
                userid: 8,
                courseid: 10,
                parentCommentid: null
            },
            {
                message: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                userid: 9,
                courseid: 6,
                parentCommentid: null
            },
            {
                message: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
                userid: 10,
                courseid: 34,
                parentCommentid: null
            },
            {
                message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
                userid: 3,
                courseid: 29,
                parentCommentid: null
            },
            {
                message: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duisat velit eu est congue elementum. In hac habitasse platea dictumst.',
                userid: 2,
                courseid: 13,
                parentCommentid: 8
            },
            {
                message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                userid: 1,
                courseid: 33,
                parentCommentid: null
            },
            {
                message: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
                userid: 4,
                courseid: 32,
                parentCommentid: 17
            },
            {
                message: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer nonvelit.',
                userid: 5,
                courseid: 11,
                parentCommentid: 67
            },
            {
                message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
                userid: 6,
                courseid: 6,
                parentCommentid: 69
            },
            {
                message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                userid: 7,
                courseid: 10,
                parentCommentid: 68
            },
            {
                message: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quisorci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
                userid: 8,
                courseid: 25,
                parentCommentid: null
            },
            {
                message: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felissed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
                userid: 10,
                courseid: 31,
                parentCommentid: null
            },
            {
                message: 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
                userid: 9,
                courseid: 3,
                parentCommentid: 62
            },
            {
                message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla.',
                userid: 2,
                courseid: 7,
                parentCommentid: 28
            },
            {
                message: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
                userid: 3,
                courseid: 32,
                parentCommentid: 17
            },
            {
                message: 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget,tempus vel, pede. Morbi porttitor lorem id ligula.',
                userid: 1,
                courseid: 5,
                parentCommentid: null
            },
            {
                message: 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
                userid: 10,
                courseid: 13,
                parentCommentid: null
            },
            {
                message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                userid: 9,
                courseid: 30,
                parentCommentid: 21
            },
            {
                message: 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                userid: 8,
                courseid: 17,
                parentCommentid: null
            },
            {
                message: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
                userid: 7,
                courseid: 10,
                parentCommentid: 68
            },
            {
                message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
                userid: 6,
                courseid: 11,
                parentCommentid: null
            },
            {
                message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                userid: 5,
                courseid: 23,
                parentCommentid: 27
            },
            {
                message: 'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
                userid: 4,
                courseid: 5,
                parentCommentid: 83
            },
            {
                message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donecposuere metus vitae ipsum.',
                userid: 3,
                courseid: 29,
                parentCommentid: 71
            },
            {
                message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
                userid: 1,
                courseid: 28,
                parentCommentid: null
            },
            {
                message: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
                userid: 2,
                courseid: 13,
                parentCommentid: 8
            },
            {
                message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                userid: 3,
                courseid: 31,
                parentCommentid: null
            },
            {
                message: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
                userid: 4,
                courseid: 4,
                parentCommentid: 30
            },
            {
                message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
                userid: 5,
                courseid: 34,
                parentCommentid: null
            },
            {
                message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
                userid: 6,
                courseid: 11,
                parentCommentid: 88
            },
            {
                message: 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien utnunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metusvitae ipsum. Aliquam non mauris.',
                userid: 7,
                courseid: 35,
                parentCommentid: 41
            },
            {
                message: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
                userid: 8,
                courseid: 28,
                parentCommentid: 92
            },
            {
                message: 'Aenean lectus. Pellentesque eget nunc.',
                userid: 9,
                courseid: 1,
                parentCommentid: null
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('comments', null, {});

    }
};