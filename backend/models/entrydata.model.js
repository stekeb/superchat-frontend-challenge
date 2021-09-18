const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class Entrydata extends Model {}

Entrydata.init(
  {
    nanoId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    repo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frameColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Entrydata",
  }
);

module.exports = Entrydata;
