
// const fs = require('fs');
// const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models');
let sequelize = db.sequelize;
const { Op } = db.Sequelize;
const { check, validationResult, body } = require("express-validator");



module.exports = {
    register: (req, res) => {
        res.render("register");
    },
    store: (req, res, next) => {
        let errors = validationResult(req);
        console.log(req.files)

        if(!errors.isEmpty()){
           return res.render("register",{ errors: errors.errors })
        } else {
        delete req.body.repassword;
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        req.body.avatar = req.files.length ? req.files[0].filename : "avatardefault.png";
        
        db.Users.findOne({
            where: {
                email: { [Op.like]: [ req.body.email ] }
            }
        }).then( user => {
            if(!user){
                db.Users.create(req.body).then()
                    res.redirect('/')
            } else {
                errors = [ 
                    { msg: "El email ya existe" }
                ]
                return res.render("register",{ errors: errors })
            }
        })
        
    }
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
        let errors = validationResult(req);
        console.log(errors)
        if(!errors.isEmpty()){
            console.log(errors)
           return res.render("login",{ errors: errors.errors })
        } else {
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
                        res.redirect(`admin/${usuario[0].id}`)
                    }
                } else {
                    errors = [ 
                        { msg: "La contraseña no es correcta" }
                    ]
                   return res.render("login",{ errors: errors })
                }
        } else {
            errors = [ 
                { msg: "El usuario no es correcto" }
            ]
           return res.render("login",{ errors: errors })

        }
        })
    }
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