let getProduct = require("./getProduct");


module.exports = {
    getProductByCategory: (req) => {
     let productos = getProduct.getProduct();
     let categoria = req.params.category;
     let product = null;

    if (categoria == "vacuno") {
        let vacuno = productos.filter(producto => producto.category == "vacuno");
        product = vacuno;
    }
    if (categoria == "cerdo") {
       let cerdo = productos.filter(producto => producto.category == "cerdo");
       product = cerdo;
    }
    if (categoria == "pollo") {
       let pollo = productos.filter(producto => producto.category == "pollo");
       product = pollo;
    }
    return product;
    }
}