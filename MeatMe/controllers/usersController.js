
const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');
let usersPath = path.join(__dirname, '../data/usuarios.json');

function getUsers (){
    let userContent= fs.readFileSync (usersPath, 'utf-8')
    return userContent != '' ? JSON.parse (userContent) : []
}
function generarID () {
    let usuarios= getUsers();
    if (usuarios.length){
        let ids = usuarios.map((user) => user.id);
        return Math.max (...ids) + 1;
    } else{
        return 1
    };
};
function guardarUsuario (usuario) {
    let usuarios = getUsers();
    usuarios.push (usuario);
    fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, " "));
}


module.exports = {
    register: (req, res) => {
        res.render("register");
    },


    store: (req, res, next) => {
        req.body.password = bcrypt.hashSync(req.body.password,10);
        let usuarioNuevo= {
            id: generarID(),
            ...req.body,
            avatar: req.files[0].filename
        }
        guardarUsuario (usuarioNuevo);
        res.redirect ('/')

        //res.send('guardar')
    },


    admin: (req, res) => {
        res.render("productAdd");
    },
    login: (req, res) => {
        res.render("login");
    },
    processLogin: (req, res, next) => {
        res.send('verificado')

    }
}