let express = require("express");
let router = express.Router();
let paypal = require("paypal-rest-sdk");

router.get("/", (req, res, next) => {
  var cart = req.session.cart;
  res.locals.cart = cart.getCart();
  res.render("cart");
});

router.post("/", (req, res, next) => {
  var courseid = req.body.id;
  var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
  var courseController = require("../controllers/productController");
  courseController
    .getByid(courseid)
    .then((course) => {
      var cartItem = req.session.cart.add(course, courseid, quantity);
      res.json(cartItem);
    })
    .catch((error) => next(error));
});

router.put("/", (req, res) => {
  var courseid = req.body.id;
  var quantity = parseInt(req.body.quantity);
  var cartItem = req.session.cart.update(courseid, quantity);
  res.json(cartItem);
});

router.delete("/", (req, res) => {
  var courseid = req.body.id;
  req.session.cart.remove(courseid);
  res.json({
    totalQuantity: req.session.cart.totalQuantity,
    totalPrice: req.session.cart.totalPrice,
  });
});

router.delete("/all", (req, res) => {
  req.session.cart.empty();
  res.sendStatus(204);
  res.end();
});

paypal.configure({
  mode: "sandbox",
  client_id:
    "ASFthYP4yc_HJ4s3FHW9XqclQ7R2TeTnEFjcFoziey5eoPDOeFwszehw8ojqBpH3_UvNx0G5F_XVIQVE",
  client_secret:
    "ECDD_KQj8uXbZeoizVr47NfwM0Fzw-tSOQfO42LIUEP_x04G-ba-xdNgYem0bb0qeQPDTPtB6wj6W8Gh",
});

router.post("/pay", (req, res) => {
  var create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "https://thuongmaidientu20b01.herokuapp.com/",
      cancel_url: "https://thuongmaidientu20b01.herokuapp.com/cart",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "MUA KHOA HOC",
              sku: "001",
              price: req.session.cart.totalPrice,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: req.session.cart.totalPrice,
        },
        description: "This is the payment description.",
      },
    ],
  };
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

router.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: req.session.cart.totalPrice,
        },
      },
    ],
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.render("/");
    }
  });
});

router.get("/cancel", (req, res) => res.render("cart"));

module.exports = router;
