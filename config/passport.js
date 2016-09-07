var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , bcrypt = require('bcrypt');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ id: id }, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function (email, password, done) {
    User.find({ where: { email: email }, limit: 1 }, function (err, user) {
      if (err) return done(err);
      if (user.length) user = user[0];

      if (!user) {
        return done(null, false, {
          message: 'Incorrect email.'
        });
      }

      bcrypt.compare(password, user.password, function (err, res) {
        if (!res) {
          return done(null, false, {
            message: 'Invalid password.'
          });
        }

        var returnUser = {
          email: user.email,
          id: user.id
        };

        return done(null, returnUser, {
          message: 'Logged In Succesfuly'
        });
      });
    });
  }
))
