/* 1-Manager-Schema
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
 * A) Create a store database in mysql: "CREATE DATABASE store0;"
 * B) Create the manager model with Sequelize CLI.
  sequelize model:create —name Manager —attributes "fullName:string, storeZip:string, uniformColor:string, uniformNumber:string"
 * C) Extract the manager model into server.js 
 *    by requiring the model directory.
 * D) Sync your model with models.sequelize.sync()
 * E) Connect the above sync with a .then().
 			Inside the .then, write an anonymous function that
			uses the Manager model to create a manager in your database.
 * E) Run the file with node and check your mysql database 
 *    to check if it created the manager table and field
 * 
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */



// TODO: bring in our Sequelize models object
// var manager = require('./models')['Managers'];
// // TODO: Sync our models
// models.sequelize.sync({force:true})
// .then(function(){
//   return models.Manager.create({
//     name
//   })
// });

// TODO: attach .then to the sync
//       and Create our Manager in the callback
// ================================================

var models = require('./models')


// SOLUTION: Sync our models
models.sequelize.sync({force:true}) 
// {force:true} drops the table everytime the server starts.

// Solution: Create our Manager in a .then callback
// ================================================
.then(function(){

    return models.Manager.create({
        fullName: "Brad Lakes",
        storeZip: "07748",
        uniformColor: "Teal",
        uniformNumber: "9731"
    })

})
