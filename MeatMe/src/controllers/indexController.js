let db = require("../database/models");
let sequelize = db.sequelize;


module.exports = {
    index: (req, res) => {
        // sequelize.query("SELECT * FROM movies")
        // .then( respuesta => {
        // res.send(respuesta)
        // });
        res.render("index");
    }
}