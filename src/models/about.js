'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  about.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    bio: DataTypes.TEXT,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'about',
    tableName: 'abouts',
    timestamps: false
  });
  return about;
};