/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport')

module.exports = {

	_config: {
		actions: false,
		shortcuts: false,
		rest: false
	},

	// Acceder
	login: function (req, res, next) {
		passport.authenticate('local', function (err, user, info) {
			if (err || !user) {
				return res.send({
					message: info.message,
					user: user
				});
			}

			// Loguedo del `usuario`
			req.logIn(user, function (err) {
				if (err) return res.send(err);
				return res.send({
					message: info.message,
					user: user
				});
			});
		})(req, res, next);
	},

	// Cerrar sesión
	logout: function (req, res) {
		req.logout();
		res.redirect('/');
	}

};
