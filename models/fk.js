const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const uom=require('./uom');
const product=require('./product');


uom.hasMany(product, {foreignKey: 'uomSymbol', sourceKey: 'uomSymbol'});
product.belongsTo(uom, {foreignKey: 'uomSymbol', targetKey: 'uomSymbol'});