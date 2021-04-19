const Sequelize = require('sequelize');
const sequelize = require('../util/database');
 
const Store = sequelize.define('store', {
    storeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true    
    },
    storeName: {
        type: Sequelize.STRING,
        allowNull: false    
    },
    address:{
        type: Sequelize.STRING,    
    },
    city:{
        type: Sequelize.STRING,    
    },
    stateCode:{
        type: Sequelize.STRING,    
    },
    pinCode:{
        type: Sequelize.INTEGER,    
    },
    latitude:{
        type:Sequelize.DECIMAL(10,8)
    },
    longitude:{
        type:Sequelize.DECIMAL(10,8)
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:'A'
    } 
});
     

module.exports = Store; 