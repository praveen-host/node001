const Sequelize = require('sequelize');

const sequelize = require('../util/database');
 
const Uom = sequelize.define('uom', {
    uomSymbol: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true    
    },
    uomType:{
        type: Sequelize.STRING,
        allowNull: false
    } ,  
    uomFormalName: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    uomDecimalPlaces: {
        type: Sequelize.INTEGER,
        defaultValue:0
    },    
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:'A'
    } 
});
     
Uom.sync();
module.exports = Uom; 