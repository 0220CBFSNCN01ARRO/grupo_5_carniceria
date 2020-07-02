
// const fs = require('fs');
// const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models');
let sequelize = db.sequelize;
const { Op } = db.Sequelize;




module.exports = {
    register: (req, res) => {
        res.render("register");
    },
    store: (req, res, next) => {
        delete req.body.repasswword;
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        req.body.avatar = req.files[0].filename;
        db.Users.create(req.body)
        .then( res.redirect('/'))
      
    },
    admin: async (req, res) => {
      const categorys = await db.Categorys.findAll({
            include: [{ association: "products" }]
        })
      const users = await db.Users.findAll()
        res.render("admin", { categorys, users });
    },

    login: (req, res) => {
        res.render("login");
    },

    processLogin: (req, res, next) => {
        db.Users.findAll({
            where: {
                email: { [Op.like]: [ req.body.email ] }
            }
        })
        .then( usuario => {
        if (usuario[0] != undefined) {
             if (bcrypt.compareSync(req.body.password, usuario[0].password)) {
                    req.session.user = usuario[0];
                    if (req.body.remember){
                        res.cookie('user', usuario, { maxAge: 1000 * 60 * 60 * 24 * 90 });
                        // req.session.user = req.cookies.user;
                    }
                    if(usuario[0].status == 0 && 1){
                res.redirect(`profile/${usuario[0].id}`)
                    } else {
                        // req.session.admin = usuario;
                        res.redirect(`admin/${usuario[0].id}`)
                    }
                } else {
                res.send('La contraseña no es correcta')
                }
        } else {
            res.send("El usuario no existe")
        }
        })
    },
    profile: (req, res) => {
        res.render('profile');
    },
    logout: (req, res) => {
        req.session.user = null
        res.clearCookie('user');
        res.redirect('/')
    }
}