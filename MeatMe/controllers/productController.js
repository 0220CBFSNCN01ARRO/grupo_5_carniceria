module.exports = {
    show: (req,res, next) => {
        res.render("products")
    },
    byCategory: (req, res) => {
        res.render("productByCategory")
    },
    detail: (req, res) => {
        res.render("productDetail")
    },
    cart: (req, res) => {
        res.render("productCart")
    },
    admin: (req, res) => {
        res.render("productAdd")
    }
}
