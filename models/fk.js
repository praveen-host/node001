const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const uom=require('./uom');
const product=require('./product');
const productImage=require('./productImage');

uom.hasMany(product, {foreignKey: 'uomSymbol', sourceKey: 'uomSymbol'});
product.belongsTo(uom, {foreignKey: 'uomSymbol', targetKey: 'uomSymbol'});

product.hasMany(productImage,{foreignKey: 'productCode', targetKey: 'productCode'});
productImage.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'});