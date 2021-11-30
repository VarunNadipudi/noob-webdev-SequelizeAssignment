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

// //inserting record using create
// employeeTable.create({
//   employeeId : 12,
//   employeeName : 'Son Goku',
//   department : 'IT',
//   designation : 'HR'
// })
// .then( (data)=>{
//   console.log("Record is created!");
// });

//inserting using build and save
var employeeRecord = employeeTable.build({
  employeeId : 7,
  employeeName : 'Dhoni',
  department : 'PD',
  designation : 'Wellness'
});

employeeRecord.save();