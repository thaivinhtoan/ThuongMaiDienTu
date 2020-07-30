let express = require('express');
let app = express();

//set public static folder
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
app.use(express.static(__dirname + '/public'));

//use view engine
let expressHbs = require('express-handlebars');
let helper = require('./controllers/helper');
let paginateHealper = require('express-handlebars-paginate');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createStarList: helper.createStarList,
        createStars: helper.createStars,
        createPagination: paginateHealper.createPagination
    },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// Define your routes here
// /=> index 
// /products => category
// /prodocts//:id => single product

// Use Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Cookie Parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use Session
let session = require('express-session');
app.use(session({
    cookie: { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: '53cret',
    resave: false,
    saveUninitialized: false
}));

// Use Cart Controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;
    next();
});

app.use('/', require('./routes/indexRouter'));
app.use('/courses', require('./routes/productRouter'));
app.use('/users', require('./routes/userRouter'));
app.use('/cart', require('./routes/cartRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
        .then(() => {
            res.send('database sync completed!')
        });
});

app.get('/link', (req, res, next) => {
    res.redirect('https://youtu.be/QH2-TGUlwu4');

});

app.get('/:page', (req, res) => {
    let banners = {
        blog: 'Our Blog',
        category: 'Category',
        cart: 'Shopping Cart'
    };
    let page = req.params.page;
    res.render(page, { banner: banners[page] });
});
//set sever port 
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`sever is running at port ${app.get('port')}`);
});



app.get('/all', (request, response) => {
    db.query("SELECT id, name, imagepath FROM Courses order by time limit 10", (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json({ people: data[0].rows, animals: data[1].rows });
        console.log(data);
        res.send(data);
    });

});