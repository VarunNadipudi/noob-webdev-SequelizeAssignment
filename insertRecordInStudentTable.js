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

//inserting records using bulk create
studentTable.bulkCreate([
  {
    studentId : 503,
    studentName : 'Keerthi',
    stream : 'CSE',
    marks : 85
  },
  {
    studentId : 551,
    studentName : 'Hindhuja',
    stream : 'CSE',
    marks : 80
  },
  {
    studentId : 541,
    studentName : 'yash',
    stream : 'CSE',
    marks : 85
  },
])
.then( (data)=>{
  console.log("Records added to the studentTable!");
})
.catch( (error)=>{
  console.log(error);
});