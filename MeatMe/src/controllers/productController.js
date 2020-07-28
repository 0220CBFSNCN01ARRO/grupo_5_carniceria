const fs = require("fs");
const path = require("path");

const db = require('../database/models');

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
 
  cartAdd: async (req,res,next) => {
    const product = await db.Products.findByPk(req.params.id)
    const categorys = await db.Categorys.findByPk(req.params.category)
    req.session.cart.push({ product,categorys});
    res.locals.cart = req.session.cart;
    // console.log(req.session.cart.product.name)
    res.redirect("/product")
  },

  // Create - crear
  create: async (req, res) => {
    const product = await db.Products.findAll()
    const categorys = await db.Categorys.findAll()
      res.render('productAdd', { product, categorys });
  },

  // Create -  guardar
	store: async (req, res) => {
    let errors = req.file.error;
    console.log(errors)
        if(errors != undefined){
          const product = await db.Products.findAll()
          const categorys = await db.Categorys.findAll()
           return res.render("productAdd", { errors , product, categorys })
        } else {
    product = req.body;
        product.category_id = req.body.category
        product.image = req.file ? req.file.filename : 'sin_imagen.jpg';

      await db.Products
            .create(product)
            .then(storedProduct => {
                //storedProduct.addTags(req.body.keywords.split(' '))
                return res.redirect(`/product`)
            })
            .catch(error => { console.log(error) });
          }

	},

  // Update - editar
	edit: async (req, res) => {
     const Products = await db.Products.findByPk(req.params.id)
     const categorys = await db.Categorys.findAll()
       res.render("productEdit", {Products, categorys})


  },

  // Update - actualizar
	update: (req, res) => {
    req.body.image = req.files[0] ? req.files[0].filename : " ";

    db.Products.update(req.body, {
            where: {id: req.params.id}
        })
        .then(() => res.redirect(`/admin`)
        .catch(error => { console.log(error) })  
      )
  },

  // Delete -
	destroy : (req, res) => {
    db.Products
            .findByPk(req.params.id)
            // Si el registro existe
            .then(async product => {
            console.log(product)
                // Lo borramos
                await db.Products.destroy({ where: { id: req.params.id } });

                // y además borramos la imagen asociada
                // const imagePath = path.resolve(__dirname, '../../public/images/products', product.image);
                // if (fs.existsSync(imagePath)) {
                //     fs.unlinkSync(imagePath);
                // }

                // luego volvemos al listado
                res.redirect(`/product/`)
            })
            .catch(error => console.log(error));
    }

};

module.exports = controller;