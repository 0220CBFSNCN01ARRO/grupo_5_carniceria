module.exports = (sequelize, DataTypes) => {

    const cols = {
        items_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
    }

    const config = {
        tableName : 'orders',
        timestamps: false
    }

    const Order = sequelize.define('Orders',cols,config);

    Order.associate = function(models) {
        Order.belongsTo(models.Users,{
            as: 'user',
            foreignKey: 'users_id'
        });
        Order.hasMany(models.Items,{
            as: 'items',
            foreignKey: 'items_id',
            timestamps: false
        })
    }

    return Order;

};