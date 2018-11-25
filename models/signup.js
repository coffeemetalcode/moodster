module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: DataTypes.TEXT,
    person_name: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  return User;
};