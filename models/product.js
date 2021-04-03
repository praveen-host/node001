const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  productCode: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true    
  },
  skuName:{
    type: Sequelize.STRING,
    allowNull: false
  } ,
  uomSymbol: {
    type: Sequelize.STRING,
    allowNull: false
  } ,
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },   
  shortDescription: {
    type: Sequelize.STRING
  }, 
  longDescription: {
    type: Sequelize.STRING
  }, 
  hsnCode: {
    type: Sequelize.STRING,
    allowNull: false
  },   
  status: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    defaultValue:1
  } 
});
 
Product.sync(); 
module.exports = Product; 