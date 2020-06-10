const storeUser = require("../funciones/storeUser");
// const getUsers = require("../funciones/getUsers");

module.exports = {
    register: (req, res) => {
        res.render("register");
    },
    store: (req,res) => {
        storeUser.storeUser(req);
        console.log(req.body)
		res.redirect('/');
    },
    admin: (req, res) => {
        res.render("productAdd");
    },
    login: (req, res) => {
        res.render("login");
    }
}