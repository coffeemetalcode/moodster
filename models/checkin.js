module.exports = function (sequelize, DataTypes) {
  var CheckIn = sequelize.define("checkIn", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    sleep_quality: DataTypes.INTEGER,
    sleep_amount: DataTypes.INTEGER,
    mood_rating: DataTypes.INTEGER,
    mood_type: DataTypes.INTEGER,
    diet_quality: DataTypes.INTEGER,
    stress_level: DataTypes.INTEGER,
    user_entry: DataTypes.TEXT
  });
  return CheckIn;
};
