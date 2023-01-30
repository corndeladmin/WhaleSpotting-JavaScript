'use strict';
const { Model } =  require('sequelize');
const bcrypt = require('bcrypt');

module.exports =  (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async verifyPassword(password) {
      return await bcrypt.compare(password, this.hash);
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    isAdmin: DataTypes.BOOLEAN,
    hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
