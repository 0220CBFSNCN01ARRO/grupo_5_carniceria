module.exports = (sequelize, DataTypes) => {

    const cols = {
        name: DataTypes.STRING
    }

    const config = {
        tableName : 'category',
        timestamps: false
    }

    const Category = sequelize.define('Categorys',cols,config);

    Category.associate = function(models) {
        Category.hasMany(models.Products,{
            as:"products",
            foreignKey:"category_id"
        })
    }
    
    return Category;

};