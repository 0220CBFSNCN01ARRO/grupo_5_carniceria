const fs = require("fs");
const path = require("path");
const productosPath = path.join(__dirname, "../data/productos.json");
const productosData = JSON.parse(fs.readFileSync(productosPath), "utf-8");


let vacuno = productosData.filter(producto => producto.category == "vacuno");
let cerdo = productosData.filter(producto => producto.category == "cerdo");
let pollo = productosData.filter(producto => producto.category == "pollo");


module.exports = {
  show: (req, res, next) => {
    res.render("products", { productosData })
  },
  byCategory: (req, res) => {
    let categoria = req.params.category;
    let productos = null;

    if (categoria == "vacuno") {
      productos = vacuno;
      console.log(productos)
    }
    if (categoria == "cerdo") {
      productos = cerdo;
    }
    if (categoria == "pollo") {
      productos = pollo;
    }
    if (productos) {
      res.render("productByCategory", { productos, categoria })
    } else {
      let error = {
        message: 'Producto no encontrado',
        error: {
          status: 404,
          stack: ''
        }
      }
    }
  },
  detail: (req, res) => {
    let id = req.params.id;
    let producto = productosData.find(prod => prod.id == id);
    res.render("productDetail", { producto })
  },
  cart: (req, res) => {
    res.render("productCart")
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('productAdd');
  },



}


