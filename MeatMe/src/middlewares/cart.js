
module.exports = (req,res, next) => {
    if (req.session.cart == undefined){
        req.session.cart = [];
        next();
    } else {
        res.locals.cart = req.session.cart;
        next();
    }
}