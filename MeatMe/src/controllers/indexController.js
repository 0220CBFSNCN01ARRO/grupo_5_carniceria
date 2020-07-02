let db = require("../database/models");
let sequelize = db.sequelize;


module.exports = {
    index: (req, res) => {
        db.Categorys.findAll()
        .then(category =>
            res.render("index", {category}))
    },

};