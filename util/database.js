var Sequelize = require('sequelize');

var sequelize = new Sequelize('sssQw0eC4y', 'sssQw0eC4y', '6om4HGi5cb', {
    host: "remotemysql.com",
    port:"3306",
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports=sequelize;