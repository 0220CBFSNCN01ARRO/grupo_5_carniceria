module.exports = (sequelize, DataTypes) => {

    const cols = {
        product_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        order_id: DataTypes.INTEGER,
        name: DataTypes.VARCHAR
    }

    const config = {
        tableName : 'items',
        timestamps: false
    }

    const Item = sequelize.define('Items',cols,config);

    Item.associate = function(models) {
        Item.belongsTo(models.Orders,{
            as: 'order',
            foreignKey: 'orders_id'
        });
        Product.belongsTo(models.Products,{
            as: 'products',
            foreignKey: 'products_id',
            timestamps: false
        })
    }
    
    return Item;

};