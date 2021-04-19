const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const userAddress = sequelize.define('userAddress', {
    addressId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true      
    },
    userName:{
      type: Sequelize.STRING
    } ,  
    fullName: {
      type: Sequelize.STRING
    } ,
    phoneNo: {
      type: Sequelize.STRING
    },
    pinCode: {
      type: Sequelize.INTEGER
    },     
    stateProvission: {
      type: Sequelize.STRING
    },   
    city: {
      type: Sequelize.STRING
    } ,
    alternatePhoneNo:{
        type: Sequelize.STRING
    },
    addressLine1:{
        type: Sequelize.STRING
    },
    addressLine2:{
        type: Sequelize.STRING
    },
    locality:{
        type: Sequelize.STRING
    }
  });
 
//Gst.sync();
module.exports = userAddress;