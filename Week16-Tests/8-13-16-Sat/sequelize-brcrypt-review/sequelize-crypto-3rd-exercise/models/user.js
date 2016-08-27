module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      len: [3]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
