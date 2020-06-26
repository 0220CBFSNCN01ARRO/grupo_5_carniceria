module.exports = (sequelize, DataTypes) => {

    const cols = {
        product_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        order_id: DataTypes.INTEGER,
        name: DataTypes.VARCHAR
    }

    const config = {
        tableName : 'item',
        timestamps: false
    }

    const Item = sequelize.define('Items',cols,config);

    Item.associate = function(models) {
        Item.belongsTo(models.Orders,{
            as: 'order',
            foreignKey: 'order_id'
        });
        Product.belongsTo(models.Products,{
            as: 'products',
            foreignKey: 'product_id',
            timestamps: false
        })
    }
    
    return Item;

};