module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_name: DataTypes.TEXT,
    person_name: DataTypes.TEXT,
    phone_number: DataTypes.INTEGER
  });
  return User;
};