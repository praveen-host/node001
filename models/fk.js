const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const uom=require('./uom');
const product=require('./product');
const productImage=require('./productImage');

const order=require('./order');
const orderDetail=require('./orderDetails');
const user = require('./user');

const store=require('./store');
const price=require('./price');
const userAddress=require('./address');

uom.hasMany(product, {foreignKey: 'uomSymbol', sourceKey: 'uomSymbol'});
product.belongsTo(uom, {foreignKey: 'uomSymbol', targetKey: 'uomSymbol'});

product.hasMany(productImage,{foreignKey: 'productCode', targetKey: 'productCode'});
productImage.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'});


user.sync();

order.belongsTo(user,{foreignKey: 'buyerUserId', sourceKey: 'userId'});
order.belongsTo(user,{foreignKey: 'sellerUserId', sourceKey: 'userId'});
order.hasMany(orderDetail,{foreignKey: 'orderId'});
order.sync(); 

orderDetail.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'})
orderDetail.belongsTo(order,{foreignKey: 'orderId'});
orderDetail.sync();


store.sync();

price.belongsTo(store,{foreignKey:'storeId',sourceKey:'storeId'})
price.belongsTo(uom,{foreignKey:'uomSymbol',sourceKey:'uomSymbol'})
price.belongsTo(product,{foreignKey: 'productCode', sourceKey: 'productCode'})
price.sync();

userAddress.sync();