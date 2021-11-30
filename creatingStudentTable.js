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

//creating a table using sequelize

//defining the table
let studentTable = sequelize.define('studentTable', {
  studentId : Sequelize.INTEGER,
  studentName : Sequelize.STRING,
  stream : Sequelize.STRING,
  marks : Sequelize.INTEGER
}, {
  timestamps : false,
  freezeTableName : true
});

//creating the studentTable
studentTable.sync().then( ()=>{
  console.log("The requested table is created successfully!");
})
.catch( (error)=>{
  console.log(error);
})
.finally( ()=>{
  sequelize.close();
});