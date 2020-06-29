module.exports = (sequelize, DataTypes) => {

    const cols = {
        fist_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        avatar: DataTypes.STRING,
        status: DataTypes.INTEGER
    }

    const config = {
        tableName : 'users',
        timestamps: false
    }

    const User = sequelize.define('Users',cols,config);

    User.associate = function(models) {
        User.belongsTo(models.Orders,{
            as: 'order',
            foreignKey: 'users_id'
        });
        User.belongsToMany(models.Products,{
            as: 'products',
            through: 'user_product',
            foreignKey: 'users_id',
            otherKey: 'products_id',
            timestamps: false
        })
    }
    
    return User;

};