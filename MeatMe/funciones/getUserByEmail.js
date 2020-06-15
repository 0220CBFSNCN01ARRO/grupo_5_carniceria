const fs = require("fs");
const path = require("path");
const getUsers = require("./getUsers");
const usersPath = path.join(__dirname, "../data/usuarios.json");
const bcrypt = require("bcrypt");

function getUserByEmail(email){
    let usuarios = getUsers();
    return usuarios.find(user=>user.email == email)
}