const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnglishBlogs = sequelize.define('englishBlog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    spanishId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dato: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keyWords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complemento: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titulo_imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    palabras_clave_imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'englishBlogs',
    timestamps: false,
  });
  return EnglishBlogs
};