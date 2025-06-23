'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class educations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  educations.init({
    school: DataTypes.STRING,
    major: DataTypes.STRING,
    degree: DataTypes.STRING,
    gpa: DataTypes.INTEGER,
    start: DataTypes.INTEGER,
    end: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'educations',
    tableName: 'educations',
    timestamps: false
  });
  return educations;
};