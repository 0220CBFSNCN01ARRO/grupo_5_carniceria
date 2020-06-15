const fs = require("fs");
const path = require("path");
const getUsers = require("./getUsers");
const usersPath = path.join(__dirname, "../data/usuarios.json");
const bcrypt = require("bcrypt");

module.exports = {
    storeUser: (req) => {
		let usersData = getUsers.getUsers();
		let ids = usersData.map(prod=>prod.id)
		let id = Math.max(...ids) + 1
        req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);

		let userNew = {
			id:id,
			... req.body,
			// image: req.files[0].filename
		}
		// req.session.user = userNew;
		let final = [...usersData, userNew];
        fs.writeFileSync(usersPath, JSON.stringify(final,null,' '));
    }
}

