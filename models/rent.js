'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
      this.belongsTo(models.film, {
        foreignKey: 'filmId'
      });
    }
  };
  Rent.init({
    //Aqui he añadido los dos campos userId y filmId a mano porque son las claves foráneas
    userId: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER,
    return_date: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};