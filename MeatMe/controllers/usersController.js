module.exports = {
    register: (req, res) => {
        res.render("register")
    },
    admin: (req, res) => {
        res.render("productAdd")
    }
}