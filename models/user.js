const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userName:{
    type: Sequelize.STRING,
    allowNull: false
  } ,
  password: {
    type: Sequelize.STRING,
    allowNull: false
  } ,
  emailId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isEmail: true}
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  } 
});

User.sync();
module.exports = User;
