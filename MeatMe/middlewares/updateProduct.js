const fs = require("fs");
const path = require("path");
const getProduct = require("./getProduct");
const productosPath = path.join(__dirname, "../data/productos.json");


module.exports = {
    updateProduct: (req) => {
        let productosData = getProduct.getProduct();
		let final = productosData.map(prod => {
			if(prod.id == req.params.id){
				return {
					id: prod.id,
					...req.body,
					image: req.files[0].filename
				}
			} else {
				return prod
			}
		})
		fs.writeFileSync(productosPath, JSON.stringify(final, null, ' '));
    }
}