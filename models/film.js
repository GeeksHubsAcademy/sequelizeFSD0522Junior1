'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Film.hasMany(models.Rent, {
        foreignKey: 'filmId'
      });
    }
  };
  Film.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    genre: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    director: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};