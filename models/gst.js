const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Gst = sequelize.define('gst', {
    hsnCode: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true    
    },
    hsnDefination:{
      type: Sequelize.STRING
    } ,  
    IGST: {
      type: Sequelize.FLOAT,
      defaultValue:0.0
    } ,
    CGST: {
      type: Sequelize.FLOAT,
      defaultValue:0.0
    },
    SGST: {
      type: Sequelize.FLOAT,
      defaultValue:0.0
    },     
    CESS: {
      type: Sequelize.FLOAT,
      defaultValue:0.0
    },   
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue:'A'
    } 
  });
 
Gst.sync();
module.exports = Gst;