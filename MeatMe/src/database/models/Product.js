module.exports = (sequelize, DataTypes) => {

    const cols = {
        name: DataTypes.VARCHAR,
        category_id: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        type: DataTypes.VARCHAR,
        weight: DataTypes.DECIMAL,
        image: DataTypes.VARCHAR
    }

    const config = {
        tableName : 'products',
        timestamps: false
    }

    const Product = sequelize.define('Products',cols,config);

    Product.associate = function(models) {
        Product.belongsTo(models.Items,{
            as: 'item',
            foreignKey: 'products_id'
        });
        Product.belongsToMany(models.Users,{
            as: 'users',
            through: 'user_product',
            foreignKey: 'products_id',
            otherKey: 'users_id',
            timestamps: false
        })
    }
    
    return Product;

};