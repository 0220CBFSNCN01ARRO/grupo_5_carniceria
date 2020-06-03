module.exports = {
    register: (req, res) => {
        res.render("register");
    },
    admin: (req, res) => {
        res.render("productAdd");
    },
    login: (req, res) => {
        res.render("login");
    }
}