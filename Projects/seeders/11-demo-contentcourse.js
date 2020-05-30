'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
            "lesson": "Lesson 1",
            "courseId": 1,
            "topic": "Part 1 - Building Online Shopping Web Application using NodeJS Express & Handlebars",
            "link": "https://youtu.be/UGCVlK7z3Pk?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          }, 
          {
            "lesson": "Lesson 2",
            "courseId": 1,
            "topic": "Part 2 - Designing and Developing Postgres Database for Online Shopping Web Application",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 3",
            "courseId": 1,
            "topic": "Part 3 - Building View List Functionality for Online Shopping Web Application",
            "link": "https://youtu.be/hqUUJNNG5q4?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 4",
            "courseId": 1,
            "topic": "Part 4 - Building View Details Functionality for Online Shopping Web Application",
            "link": "https://youtu.be/h1tJjMW-tJ4?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 5",
            "courseId": 1,
            "topic": "Part 5 - Building Browse & Filter Functionalities for Online Shopping Web Application",
            "link": "https://youtu.be/qeJiEDBF1Ng?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 6",
            "courseId": 1,
            "topic": "Part 6 - Building Searching, Sorting and Paging Functionalities for Online Shopping Web Application",
            "link": "https://youtu.be/ArqWwAOqaZ4?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 7",
            "courseId": 1,
            "topic": "Part 7 - Building Shopping Cart for Online Shopping Web Application",
            "link": "https://youtu.be/DBqMwK1LCVw?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 8",
            "courseId": 1,
            "topic": "Part 8 - Building Add Comment Functionality for Online Shopping Web Application",
            "link": "https://youtu.be/DBqMwK1LCVw?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 9",
            "courseId": 1,
            "topic": "Part 9 - Building Review Product Functionality for Online Shopping Web Application",
            "link": "https://youtu.be/1NgwNyWT5x0?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 10",
            "courseId": 1,
            "topic": "Part 10 - Building Register and Login Functionalities for Online Shopping Web Application",
            "link": "https://youtu.be/5FJUEQpgRpk?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          //course 2               
                
          {
            "lesson": "Lesson 1",
            "courseId": 2,
            "topic": "utilize synergistic bandwidth",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
          }, 
          {
            "lesson": "Lesson 2",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 3",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 4",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 5",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 6",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 7",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 8",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 9",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          {
            "lesson": "Lesson 10",
            "courseId": 2,
            "topic": "engineer compelling methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
          },
          //course 3
          {
            "lesson": "Lesson 1",
            "courseId": 3,
            "topic": "facilitate 24/365 architectures",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
          }, 
          //course 4
          {
            "lesson": "Lesson 1",
            "courseId": 4,
            "topic": "matrix integrated methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
          }, {
            "lesson": "Lesson 1",
            "courseId": 5,
            "topic": "expedite turn-key infomediaries",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
          }, {
            "lesson": "Lesson 1",
            "courseId": 6,
            "topic": "embrace cross-media schemas",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
          }, {
            "lesson": "Lesson 1",
            "courseId": 7,
            "topic": "syndicate cutting-edge action-items",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 8,
            "topic": "scale wireless niches",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 9,
            "topic": "architect robust relationships",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
          }, {
            "lesson": "Lesson 1",
            "courseId": 10,
            "topic": "integrate enterprise web-readiness",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
          }, {
            "lesson": "Lesson 1",
            "courseId": 11,
            "topic": "cultivate compelling channels",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 12,
            "topic": "whiteboard innovative interfaces",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 13,
            "topic": "generate user-centric vortals",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
          }, {
            "lesson": "Lesson 1",
            "courseId": 14,
            "topic": "benchmark viral convergence",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
          }, {
            "lesson": "Lesson 1",
            "courseId": 15,
            "topic": "aggregate end-to-end applications",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
          }, {
            "lesson": "Lesson 1",
            "courseId": 16,
            "topic": "deploy front-end mindshare",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 17,
            "topic": "morph sticky platforms",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 18,
            "topic": "aggregate mission-critical e-business",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
          }, {
            "lesson": "Lesson 1",
            "courseId": 19,
            "topic": "exploit dynamic experiences",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
          }, {
            "lesson": "Lesson 1",
            "courseId": 20,
            "topic": "transform robust bandwidth",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 21,
            "topic": "monetize cutting-edge functionalities",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 22,
            "topic": "incubate bleeding-edge interfaces",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Fusce consequat. Nulla nisl. Nunc nisl."
          }, {
            "lesson": "Lesson 1",
            "courseId": 23,
            "topic": "visualize clicks-and-mortar functionalities",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
          }, {
            "lesson": "Lesson 1",
            "courseId": 24,
            "topic": "recontextualize compelling relationships",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 25,
            "topic": "reinvent open-source e-commerce",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 26,
            "topic": "reintermediate mission-critical action-items",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
          }, {
            "lesson": "Lesson 1",
            "courseId": 27,
            "topic": "productize cross-media web-readiness",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
          }, {
            "lesson": "Lesson 1",
            "courseId": 28,
            "topic": "generate magnetic applications",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 29,
            "topic": "transform seamless paradigms",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 30,
            "topic": "e-enable sticky portals",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
          }, {
            "lesson": "Lesson 1",
            "courseId": 31,
            "topic": "empower impactful systems",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
          }, {
            "lesson": "Lesson 1",
            "courseId": 32,
            "topic": "reinvent front-end synergies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
          }, {
            "lesson": "Lesson 1",
            "courseId": 33,
            "topic": "empower world-class methodologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
          }, {
            "lesson": "Lesson 1",
            "courseId": 34,
            "topic": "synthesize open-source e-business",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
          }, {
            "lesson": "Lesson 1",
            "courseId": 35,
            "topic": "empower granular paradigms",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
          }, {
            "lesson": "Lesson 1",
            "courseId": 36,
            "topic": "expedite one-to-one architectures",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
          }, {
            "lesson": "Lesson 1",
            "courseId": 37,
            "topic": "architect vertical e-business",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
          }, {
            "lesson": "Lesson 1",
            "courseId": 38,
            "topic": "disintermediate seamless initiatives",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 39,
            "topic": "evolve cutting-edge action-items",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 40,
            "topic": "repurpose e-business channels",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
          }, {
            "lesson": "Lesson 1",
            "courseId": 41,
            "topic": "disintermediate enterprise infomediaries",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
          }, {
            "lesson": "Lesson 1",
            "courseId": 42,
            "topic": "iterate global supply-chains",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 43,
            "topic": "engage real-time functionalities",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
          }, {
            "lesson": "Lesson 1",
            "courseId": 44,
            "topic": "scale one-to-one technologies",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
          }, {
            "lesson": "Lesson 1",
            "courseId": 45,
            "topic": "repurpose revolutionary architectures",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
          }, {
            "lesson": "Lesson 1",
            "courseId": 46,
            "topic": "unleash impactful supply-chains",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
          }, {
            "lesson": "Lesson 1",
            "courseId": 47,
            "topic": "benchmark bricks-and-clicks niches",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
          }, {
            "lesson": "Lesson 1",
            "courseId": 48,
            "topic": "orchestrate e-business e-services",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          }, {
            "lesson": "Lesson 1",
            "courseId": 49,
            "topic": "integrate scalable e-markets",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
          }, {
            "lesson": "Lesson 1",
            "courseId": 50,
            "topic": "evolve plug-and-play e-markets",
            "link": "https://youtu.be/LtLeoStzL3w?list=PLWrEfGrgPNXd7KVOaTkEySIZnsskT47Sg",
            "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
          }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });

        return queryInterface.bulkInsert('ContentCourses', data, {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ContentCourses', null, {});

    }
};