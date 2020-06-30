const fs = require("fs");
const path = require("path");
// const getProduct = require("../funciones/getProduct");
// const getProductByCategory = require("../funciones/getProductByCategory");
// const storeProduct = require("../funciones/storeProduct");
// const productosPath = path.join(__dirname, "../data/productos.json");
// const updateProduct = require("../funciones/updateProduct");
const db = require('../database/models');
// const { Association } = require("sequelize/types");

const controller = {
  show: async (req, res, next) => {
    const category = await db.Categorys.findAll()

      const product = await db.Products.findAll ()
        res.render ("product", {product, category});
  },

  byCategory: async (req, res) => {
    const category = await db.Categorys.findAll({
    where:{
      id: req.params.category
    }
    });
    const product = await db.Products.findAll ({
      where: {
        category_id: req.params.category
      }})
      if (product){
    res.render("productByCategory", { product, category })
    }else {
      res.render('error');
  }

  },
//  por que tenemos detail???
  detail: async (req, res) => {
    const category = await db.Categorys.findAll({
      where:{
        id: req.params.category
      }
      });
      const product = await db.Products.findAll ({
        where: {
          id: req.params.id
        }})

        res.render ("productDetail", {product, category});
  },

  cart: (req, res) => {
    res.render("productCart");
  },

  // Create - crear
  create: (req, res) => {
    db.Products.findAll()
            .then(product => {
                res.render('productAdd', { product });
            })
            .catch(error => console.log(error));
  },

  // Create -  guardar
	store: (req, res) => {
    product = req.body;
        product.image = req.file ? req.file.filename : '';

        db.Products
            .create(product)
            .then(storedProduct => {
                //storedProduct.addTags(req.body.keywords.split(' '))
                return res.redirect(`/product/${storedProduct.id}`)
            })
            .catch(error => { console.log(error) });

	},

  // Update - editar
	edit: (req, res) => {
      db.Products.findByPk(req.params.id,{include:['category']})
      .then (Products =>{
        res.render("productEdit", {Products})
      })


  },

  // Update - actualizar
	update: (req, res) => {

    req.body.image = req.files[0] ? req.files[0].filename : " ";

    db.Products.update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => res.redirect(`/product/${req.params.id}`)
        .catch(error => { console.log(error) })  
      )
        
  },

  // Delete -
	destroy : (req, res) => {
    db.product
            .findByPk(req.params.id)
            // Si el registro existe
            .then(async product => {
                // Lo borramos
                await db.product.destroy({ where: { id: req.params.id } });

                // y además borramos la imagen asociada
                const imagePath = path.resolve(__dirname, '../../public/images/products', product.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }

                // luego volvemos al listado
                res.redirect(`/product/`)
            })
            .catch(error => console.log(error));
    }

};

module.exports = controller;