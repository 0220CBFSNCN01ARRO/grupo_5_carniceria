const db = require('../../database/models');
let sequelize = db.sequelize;
const {
    Op
} = db.Sequelize;
const {
    check,
    validationResult,
    body
} = require("express-validator");



module.exports = {

    index: async (req, res) => {
        const users = await db.Users.findAll();
        res.json({
            meta: {
                status: 200,
                totalItems: users.length,
                link: '/api/apiUsers'
            },
            data: users.map(user => {
                return {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    state: user.state,
                    avatar: user.avatar,
                    status: user.status,
                    link: `/api/apiUsers/${user.id}`
                }
            })
        });
    },

    profile: async (req, res) => {
        const user = await db.Users.findByPk(req.params.id, {
            include: ['order', 'products']
        });
        res.json({
            meta: {
                status: 200,
                link: '/api/apiUsers/' + req.params.id
            },
            data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                address: user.address,
                city: user.city,
                state: user.state,
                avatar: user.avatar,
                status: user.status,
                link: `/api/apiUsers/${user.id}`
            }
        })

    },

}