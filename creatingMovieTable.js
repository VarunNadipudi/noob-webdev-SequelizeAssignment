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

//defining movieTable
let movieTable = sequelize.define('movieTable', {
  movieId : {
    primaryKey : true,
    type : Sequelize.INTEGER
  },
  movieName : Sequelize.STRING,
  movieType : Sequelize.STRING,
  language : Sequelize.STRING,
  movieCast : Sequelize.STRING
}, {
  timestamps : false,
  freezeTableName : true
});

// //creating the movieTable
// movieTable.sync().then( ()=>{
//   console.log(" movieTable is created successfully!!");
// })
// .catch( (error)=>{
//   console.log(error);
// })
// .finally( ()=>{
//   sequelize.close();
// });

//displaying all the records of movieTable
movieTable.findAll({raw:true}).then( (data)=>{
  console.log(data);
})
.catch( (error)=>{
  console.log(error);
});