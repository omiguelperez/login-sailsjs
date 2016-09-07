/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// Index del sitio
	index: function (req, res) {
		res.view('homepage');
	},

	// Registro
	signup: function (req, res) {
		res.view('signup');
	},

	// Login del sitio
	login: function (req, res) {
		res.view('login');
	}

};
