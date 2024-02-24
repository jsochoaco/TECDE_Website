const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Users = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enabled:  {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    newsLetter:  {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });
  return Users
};