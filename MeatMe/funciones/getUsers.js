const fs = require("fs");
const path = require("path");

module.exports = {
    getUsers: () => {
    const usersPath = path.join(__dirname, "../data/usuarios.json");
    const usersData = JSON.parse(fs.readFileSync(usersPath), "utf-8");
    return usersData;
    }
}
