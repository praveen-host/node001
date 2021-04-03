const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ProductImage=sequelize.define('prodcutImage',{
    imageId:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productCode:{
        type:Sequelize.STRING
    },    
    fileName:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.SMALLINT,
        defaultValue:1
    }
});
 
ProductImage.sync();
module.exports=ProductImage;