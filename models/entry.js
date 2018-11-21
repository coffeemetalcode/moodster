module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;
};
