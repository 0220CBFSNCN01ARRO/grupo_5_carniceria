module.exports = (sequelize, DataTypes) => {

    const cols = {
        fist_name: DataTypes.VARCHAR,
        last_name: DataTypes.VARCHAR,
        email: DataTypes.VARCHAR,
        password: DataTypes.VARCHAR,
        address: DataTypes.VARCHAR,
        city: DataTypes.VARCHAR,
        state: DataTypes.VARCHAR,
        avatar: DataTypes.VARCHAR,
        status: DataTypes.INTEGER
    }

    const config = {
        tableName : 'user',
        timestamps: false
    }

    const User = sequelize.define('Users',cols,config);

    User.associate = function(models) {
        User.belongsTo(models.Orders,{
            as: 'order',
            foreignKey: 'user_id'
        });
        User.belongsToMany(models.Products,{
            as: 'products',
            through: 'user_product',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    
    return User;

};