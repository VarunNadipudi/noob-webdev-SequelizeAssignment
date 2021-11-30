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

// //displaying the records of studentTable
// const Op = Sequelize.Op;

// studentTable.findAll({
//   where : {
//     [Op.and] : [ { stream : 'CSE' }, { marks : { [Op.gt] : 75}}]
//   },
//   raw : true
// })
// .then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

//droping the student table
studentTable.drop().then( ()=>{
  console.log("studentTable is dropped!");
})
.catch( (error)=>{
  console.log(error);
});