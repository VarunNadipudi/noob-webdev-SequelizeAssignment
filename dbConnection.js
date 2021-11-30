const Sequelize = require('sequelize');
const dbconfig = require('./db.config');

//creating a sequelize object with all the database parameters
const sequelize  = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host : dbconfig.HOST,
  dialect : dbconfig.dialect,
  pool : {
    max : dbconfig.pool.max,
    min : dbconfig.pool.min,
    acquire : dbconfig.pool.acquire,
    idle : dbconfig.pool.idle
  }
});

//connecting to the database sequelizeAssignment
sequelize.authenticate().then( ()=>{
  console.log("Connection is established successfully!");
})
.catch( (error)=>{
  console.log(error);
})
.finally( ()=>{
  sequelize.close();
});