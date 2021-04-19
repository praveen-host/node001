const Sequelize = require('sequelize');
const sequelize = require('../util/database');
 
const Price = sequelize.define('price', {
    priceId:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true    
    },
    storeId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    productCode: {
        type: Sequelize.STRING,
        allowNull: false    
    },
    mrp:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },  
    sellingPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    uomSymbol:{
        type: Sequelize.STRING,
        allowNull: false  
    },
    perUnit:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1  
    },
    fromDate: {
        type: Sequelize.DATE
    },  
    toDate: {
        type: Sequelize.DATE
    },    
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:'A'
    } 
});     

module.exports = Price; 