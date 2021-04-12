const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Order = sequelize.define('order', {
    orderId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true    
  },
  sellerUserId:{
    type: Sequelize.INTEGER,
    allowNull: false
  } ,
  buyerUserId: {
    type: Sequelize.INTEGER,
    allowNull: false
  } ,
  orderDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  orderAcceptedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },   
  orderDispatchedDate: {
    type: Sequelize.DATE
  }, 
  orderValue: {
    type: Sequelize.DECIMAL(10, 2)
  },   
  orderStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:'S'
  },   
  paymentStatus: {
    type: Sequelize.STRING,
    allowNull: false
  },   
  paymentId: {
    type: Sequelize.STRING,
    allowNull: false
  } 
});

module.exports = Order; 
 