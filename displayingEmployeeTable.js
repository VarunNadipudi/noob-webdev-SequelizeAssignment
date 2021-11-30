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

// //displaying all the records of the employeeTable
// employeeTable.findAll({raw:true}).then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //find the element by Primary key
// employeeTable.findByPk(7)
// .then( (data)=>{
//   console.log(data.dataValues);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //displaying using where clause
// employeeTable.findAll({
//   where : { employeeName : 'Varun'},
//   raw : true
// })
// .then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //displaying only name and department in employeeTable
// employeeTable.findAll({
//   attributes : ['employeeName', 'department'],
//   where : { department : 'IT'},
//   raw : true
// })
// .then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //counting all the records of the employee table
// employeeTable.findAndCountAll({raw:true}).then( (data)=>{
//   console.log("The total Number of records in employeeTable are : "+data.count);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //displaying employeeTable records in ascending order
// employeeTable.findAll({
//   order : [ 'employeeName' ],
//   raw : true
// })
// .then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //displaying names similar to varun using like operator
// const Op = Sequelize.Op;
// employeeTable.findAll({
//   where : { 
//     employeeName : { [Op.like] : 'v%'}
//   },
//   raw : true
// })
// .then( (data)=>{
//   console.log(data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

// //updating name to fullname
// employeeTable.update(
//   { employeeName : 'Varun Nadipudi'},
//   { where : { employeeName : 'Varun'}}
// )
// .then( (data)=>{
//   console.log("Number of records updated : "+data);
// })
// .catch( (error)=>{
//   console.log(error);
// });

//deleting a record in employeeTable
employeeTable.destroy({
  where : { employeeId : 12}
})
.then( (data)=>{
  console.log(data);
})
.catch( (error)=>{
  console.log(error);
});