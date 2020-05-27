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
    res.render("productDetail", { producto });
  },
  
  cart: (req, res) => {
    res.render("productCart");
  },

  // Create - Form to create
  create: (req, res) => {
    res.render('productAdd');
  },

  // Create -  Method to store
	store: (req, res) => {
		let ids = productosData.map(prod=>prod.id) 
		let id = Math.max(...ids) + 1 

		req.body.price = Number(req.body.price)

		let productoNuevo = {
			id:id,
			... req.body,
			image: 'default-image.png'
		}
		let final = [...products,productoNuevo];
		fs.writeFileSync(productosPath, JSON.stringify(final,null,' '));
		res.redirect('/products')
	},

  // Update - Form to edit
	edit: (req, res) => {
		let producto = productosData.find(prod => prod.id == id);
    res.render("productDetail", { 
      producto 
    });
  },

  // Update - Method to update
	update: (req, res) => {

		req.body.price = Number(req.body.price)

		let final = productosData.map(prod => {
			if(prod.id == req.params.id){
				return {
					id: prod.id,
					...req.body,
					image: prod.image
				}
			} else {
				return prod
			}
		})
		fs.writeFileSync(productosPath, JSON.stringify(final, null, ' '));
		res.redirect('/products')
  },
  
  // Delete -
	destroy : (req, res) => {
		let final = productosData.filter(prod=> prod.id != req.params.id)
		fs.writeFileSync(productosPath, JSON.stringify(final, null, ' '));
		res.redirect('/products')
	}

};

