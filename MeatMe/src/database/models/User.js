module.exports = (sequelize, DataTypes) => {

    const cols = {
        first_name: {type: DataTypes.STRING, allowNull: false},
        last_name: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        address: {type: DataTypes.STRING, allowNull: false},
        city: {type: DataTypes.STRING, allowNull: false},
        state: {type: DataTypes.STRING, allowNull: false},
        avatar: {type: DataTypes.STRING},
        status: DataTypes.INTEGER
    }

    const config = {
        tableName : 'users',
        timestamps: false
    }

    const User = sequelize.define('Users',cols,config);

    User.associate = function(models) {
        User.hasOne(models.Orders,{
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