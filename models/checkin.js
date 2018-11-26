module.exports = function(sequelize, DataTypes) {
  var CheckIn = sequelize.define("CheckIn", {
    UserId: DataTypes.INTEGER,
    sleep_quality: DataTypes.INTEGER,
    sleep_amount: DataTypes.INTEGER,
    mood_rating: DataTypes.INTEGER,
    mood_type: DataTypes.INTEGER,
    diet_quality: DataTypes.INTEGER,
    stress_level: DataTypes.INTEGER,
    user_entry: DataTypes.TEXT,
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  });

  CheckIn.associate = function(models) {
    CheckIn.belongsTo(models.User, {
      foreignKey: {
        name: "UserId",
        allowNull: false
      }
    });
  }
  return CheckIn;
};
