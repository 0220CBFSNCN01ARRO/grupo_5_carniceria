const fs = require("fs");
const path = require("path");
const getProduct = require("../funciones/getProduct");
const getProductByCategory = require("../funciones/getProductByCategory");
const storeProduct = require("../funciones/storeProduct");
const productosPath = path.join(__dirname, "../data/productos.json");
const updateProduct = require("../funciones/updateProduct");

const controller = {
  show: (req, res, next) => {
    let productosData = getProduct.getProduct();
    res.render("product", { productosData })
  },

  byCategory: (req, res) => {
    let productos = getProductByCategory.getProductByCategory(req);
    let categoria = req.params.category;
    if (productos) {
      res.render("productByCategory", { productos, categoria })
    }
  },

  detail: (req, res) => {
    let productosData = getProduct.getProduct();
    let id = req.params.id;
    let producto = productosData.find(prod => prod.id == id);
    res.render("productDetail", { producto });
  },

  cart: (req, res) => {
    res.render("productCart");
  },

  // Create - crear
  create: (req, res) => {
    res.render('productAdd');
  },

  // Create -  guardar
	store: (req, res) => {
    storeProduct.storeProduct(req);
		res.redirect('/product');
	},

  // Update - editar
	edit: (req, res) => {
    let productosData = getProduct.getProduct();
		let producto = productosData.find(prod => prod.id == req.params.id);
    res.render("productEdit", {
      producto
    });
  },

  // Update - actualizar
	update: (req, res) => {
    updateProduct.updateProduct(req);
		res.redirect('/')
  },

  // Delete -
	destroy : (req, res) => {
    let productosData = getProduct.getProduct();
    let final = productosData.filter(prod=> prod.id != req.params.id)
    console.log(final)
		fs.writeFileSync(productosPath, JSON.stringify(final, null, ' '));
		res.redirect('/')
	}

};

module.exports = controller;