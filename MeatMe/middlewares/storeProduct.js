const fs = require("fs");
const path = require("path");
const getProduct = require("./getProduct");
const productosPath = path.join(__dirname, "../data/productos.json");


module.exports = {
    storeProduct: (req) => {
        let productosData = getProduct.getProduct();
		let ids = productosData.map(prod=>prod.id)
		let id = Math.max(...ids) + 1

		req.body.price = Number(req.body.price)
		console.log(req.files)
		let productoNuevo = {
			id:id,
			... req.body,
			image: req.files[0].filename
		}
		let final = [...productosData,productoNuevo];
        fs.writeFileSync(productosPath, JSON.stringify(final,null,' '));
    }
}