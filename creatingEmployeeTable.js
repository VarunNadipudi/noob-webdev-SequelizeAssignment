const Sequelize = require('sequelize');
const dbconfig = require('./db.config');

//creating the sequelize object with all the Database parameters
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host : dbconfig.HOST,
  dialect : dbconfig.dialect,
  pool : {
    max : dbconfig.pool.max,
    min : dbconfig.pool.min,
    acquire : dbconfig.pool.acquire,
    idle : dbconfig.pool.idle 
  }

});

//defining employeeTable
let employeeTable = sequelize.define('employeeTable', {
  employeeId : {
    primaryKey : true,
    type : Sequelize.INTEGER
  },
  employeeName : Sequelize.STRING,
  department : Sequelize.STRING,
  designation : Sequelize.STRING
}, {
  timestamps : false,
  freezeTableName : true
});

//creating the employeeTable
employeeTable.sync({raw:true}).then( (data)=>{
  console.log("employeeTable is created successfully!");
})
.catch( (error)=>{
  console.log(error);
})
.finally( ()=>{
  sequelize.close();
});

