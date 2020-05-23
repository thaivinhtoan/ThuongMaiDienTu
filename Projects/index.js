const express = require('express');


app = express();

// set public static folder

app.use(express.static(__dirname + '/public'));

// use view engine
const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//define your root hear
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:page', (req, res) => {
    const banners = {
        blog: 'Our blog',
        category: 'Category',
        cart: 'Shopping cart',
        checkout: 'checkout',
        confirmation: 'confirmation',
        contact: 'contact',
        login: 'login',
        register: 'register',
    };
    const page = req.params.page;
    res.render(page, { banner: banners[page] });
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/category', (req, res) => {
    res.render('category');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/confirmation', (req, res) => {
    res.render('confirmation');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/single-product', (req, res) => {
    res.render('single-product');
});

app.get('/tracking-order', (req, res) => {
    res.render('tracking-order');
});

// set server port and start serve
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});