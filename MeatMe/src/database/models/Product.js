module.exports = (sequelize, DataTypes) => {

    const cols = {
        name: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        type: DataTypes.STRING,
        weight: DataTypes.DECIMAL,
        image: DataTypes.STRING
    }

    const config = {
        tableName : 'products',
        timestamps: false
    }

    const Product = sequelize.define('Products',cols,config);

    Product.associate = function(models) {
        Product.hasOne(models.Items,{
            as: 'item',
            foreignKey: 'products_id'

        });
        Product.belongsToMany(models.Users,{
            as: 'users',
            through: 'user_product',
            foreignKey: 'products_id',
            otherKey: 'users_id',
            timestamps: false
        });
        Product.belongsTo(models.Categorys,{
            as: 'category',
            foreignKey: 'category_id'
        });
    }
    
    return Product;

};