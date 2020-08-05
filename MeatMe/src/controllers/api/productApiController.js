let db = require("../../database/models");
const { Op } = db.Sequelize;

const controller = {
    index: async (req, res) => {
        const products = await db.Products.findAll({
            include: ['category']
        });

        const vacunos = await db.Products.findAll({
            where: {
                category_id: 1
            },
        });
        const cerdos = await db.Products.findAll({
            where: {
                category_id: 2
            },
        });
        const pollos = await db.Products.findAll({
            where: {
                category_id: 3
            },
        });

        res.json({
            meta: {
                status: 200,
                totalItems: products.length,
                link: '   '
            },
            categories: {
                vacuno: vacunos.length,
                cerdo: cerdos.length,
                pollo: pollos.length,

            },
            data: products.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    type: product.type,
                    price: product.price,
                    weight: product.weight,
                    image: product.image,
                    category: product.category,
                    link: `/api/product/${product.id}`
                }
            })
        });
    },
    show: async (req, res, next) => {
        const product = await db.Products.findByPk(req.params.id, {
            include: ['category']
        });
        res.json({
            meta: {
                status: 200,
                link: '/api/product/' + req.params.id
            },
            data: {
<<<<<<< HEAD
                id: product.id,
                name: product.name,
                type: product.type,
                price: product.price,
                weight: product.weight,
                image: `/img/${product.image}`,
                category: product.category,
                link: `/api/product/${product.id}`
            }
=======
                    id: product.id,
                    name: product.name,
                    type: product.type,
                    price: product.price,
                    weight: product.weight,
                    image: `/img/${product.image}`,
                    category: product.category,
                    link: `/api/product/${product.id}`
                }
>>>>>>> 7fca8aa4fbeddc91a42b0310d85210e4e2a122f3
        })
    }
}

module.exports = controller;