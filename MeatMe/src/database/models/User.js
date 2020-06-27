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