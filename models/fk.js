const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const uom=require('./uom');
const product=require('./product');
const productImage=require('./productImage');

const order=require('./order');
const orderDetail=require('./orderDetails');
const User = require('./user');


uom.hasMany(product, {foreignKey: 'uomSymbol', sourceKey: 'uomSymbol'});
product.belongsTo(uom, {foreignKey: 'uomSymbol', targetKey: 'uomSymbol'});

product.hasMany(productImage,{foreignKey: 'productCode', targetKey: 'productCode'});
productImage.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'});


User.sync();

order.belongsTo(User,{foreignKey: 'buyerUserId', sourceKey: 'userId'});
order.belongsTo(User,{foreignKey: 'sellerUserId', sourceKey: 'userId'});
order.hasMany(orderDetail,{foreignKey: 'orderId'});
order.sync(); 

orderDetail.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'})
orderDetail.belongsTo(order,{foreignKey: 'orderId'});
orderDetail.sync();

 
