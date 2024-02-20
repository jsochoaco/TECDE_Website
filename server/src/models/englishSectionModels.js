const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnglishSections = sequelize.define('englishSection', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subtitulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    englishBlogId: {
      type: DataTypes.INTEGER,
      references: {
        model: EnglishBlog,
        key: 'id'
      }
    }
  }, {
    tableName: 'englishSections',
    timestamps: false,
  });
  return SpanishSections
};