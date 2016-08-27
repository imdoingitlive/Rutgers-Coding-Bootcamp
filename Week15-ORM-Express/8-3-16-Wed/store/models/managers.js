'use strict';
module.exports = function(sequelize, DataTypes) {
  var Managers = sequelize.define('Managers', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Managers;
};