var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Order = require('../models/order');
var Cart = require('../models/cart');
var User = require('../models/user');

var csrfProtection = csrf();

router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next) {
  Order.find({
    user: req.user
  }, function(err, orders) {
    if (err) {
      return res.write('Error!');
    }
    var cart;
    orders.forEach(function(order) {
      cart = new Cart(order.cart);
      order.items = cart.generateArray();
    });
    res.render('user/profile', {
      csrfToken: req.csrfToken(),
      orders: orders,
      user: req.user
    });
  });
});

router.post('/profile', function(req, res, next) {

  console.log('Bateu na rota com req: ', req.body);

  if (req.body.email) {
    User.findOne({
      email: req.body.email
    }, function(err, doc) {

      if (err) {
        req.flash('error', 'falhou')
        console.log(err);
      }

      console.log(doc);

      doc.email = req.body.email;
      doc.name = req.body.name;
      doc.state = req.body.state;
      doc.city = req.body.city;
      
      doc.save();

    });
  } else {
    console.log("email inválido");
  }

  // User.findOne({
  //   email: req.body.email
  // }, (err, user) => {

  //   console.log("Deu merda:", err);
  //   console.log("Usuário: ", user);

  //   // if (err) return res.end(' @@@@@@@@@@@@@@@@@@2 DEU BOSTA @@@@@@@@@@@@@@@@@@@@!');

  //   if (!err) {

  //     console.log('SEM ERROS!!');

  //     for (var id in req.body) {
  //       user[id] = req.body[id];
  //     }

  //     console.log('SEM ERROS 2!!');
  //     user.update(function(err) {

  //       console.log('SEM ERROS 3!!');

  //       if (err) {
  //         req.flash('error', 'Falha ao atualizar cadastro!');
  //         console.log(err);
  //         // res.end()
  //       }

  //       // return res.redirect();

  //       // return res.send({
  //       //   // _id: res._id,
  //       //   // alias: res.alias
  //       // });
  //     });
  //   }
  // });

  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/profile');
  }

  res.end();

});

// router.post('/updateProfile', function(req, res, next) {
//   console.log(2312);

//   var user = new User(req.session.user);
//   console.log(user);

//   var errMsg = req.flash('error')[0];
//   res.redirect('user/profile');

// });

// router.post('/updateProfile', passport.authenticate('local.updateProfile', {
//   failureRedirect: '/user/signup',
//   failureFlash: true
// }), function(req, res, next) {
//   console.log('tey');

//   if (req.session.oldUrl) {
//     var oldUrl = req.session.oldUrl;
//     req.session.oldUrl = null;
//     res.redirect(oldUrl);
//   } else {
//     res.redirect('/user/profile');
//   }
// });

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post('/signup', passport.authenticate('local.signup', {
  failureRedirect: '/user/signup',
  failureFlash: true
}), function(req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/profile');
  }
});

router.get('/signin', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

router.post('/signin', passport.authenticate('local.signin', {
  failureRedirect: '/user/signin',
  failureFlash: true
}), function(req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/profile');
  }
});

router.use('/', notLoggedIn, function(req, res, next) {
  next();
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}