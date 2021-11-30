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

sequelize.query("select ProductOrders.Description,Customer.CustName from ProductOrders   INNER JOIN Customer  ON ProductOrders.ID=Customer.ID;",
  { type : sequelize.QueryTypes.SELECT }
)
.then( (data)=> {
  console.log(data);
});
