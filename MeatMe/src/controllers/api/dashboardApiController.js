let db = require("../../database/models");
const { sequelize } = db.Sequelize;

const controller = {

    widgets: async (req, res) => {

        const products = await db.Products.findAll()
        const users = await db.Users.findAll()

        let amount = 0;

        products.map(product => {
            amount += Number(product.price)
        })
        res.json({
            meta: {
                status: 200,
                link: "/api/dashboard/widgets"
            },
            data: [
                {
                    text: "Products in Data Base",
                    value: products.length,
                    icon: "fa-clipboard-list"
                },
                {
                    type: "success",
                    text: "Amount in product",
                    value: "$" + amount,
                    icon: "fa-dollar-sign"
                },
                {
                    type: "warning",
                    text: "Users Quantity",
                    value: users.length,
                    icon: "fa-user-check"
                }

            ]
        })

    },
    lastProduct: async (req, res) => {
        const lastProduct = await db.Products.findOne({
            limit: 1,
            order: [["id", 'DESC']]
        })
        const category = await db.Categorys.findAll({
            where: {
                id: lastProduct.category_id
            }
        })

        res.json({
            meta: {
                status: 200,
                link: "/api/dashboard/lastProduct"
            },
            data: [
                {
                    id: lastProduct.id,
                    name: lastProduct.name,
                    category_id: category[0].id,
                    category_name: category[0].name,
                    price: "$" + lastProduct.price,
                    image: `/img/${lastProduct.image}`,
                }
            ]
        })
    },
    categories: async (req, res) => {
        const categorys = await db.Categorys.findAll({ include: ["products"] })
        res.json({
            meta: {
                status: 200,
                link: "/api/dashboard/categories"
            },
            data:
                categorys.map(category => {
                    return {
                        category: category.name,
                        products: category.products.length
                    }
                })

        })

    },
    allProducts: (req, res) => {

    }
}

module.exports = controller;