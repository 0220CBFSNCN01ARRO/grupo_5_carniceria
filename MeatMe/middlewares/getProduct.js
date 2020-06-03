const fs = require("fs");
const path = require("path");

module.exports = {
    getProduct: () => {
    const productosPath = path.join(__dirname, "../data/productos.json");
    const productosData = JSON.parse(fs.readFileSync(productosPath), "utf-8");
    return productosData;
    }
}
