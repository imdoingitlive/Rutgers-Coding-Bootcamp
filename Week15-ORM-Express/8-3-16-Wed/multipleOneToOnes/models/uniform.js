'use strict';
module.exports = function(sequelize, DataTypes) {
  var Uniform = sequelize.define('Uniform', {
    color: DataTypes.STRING,
    uniformNum: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Uniform;
};