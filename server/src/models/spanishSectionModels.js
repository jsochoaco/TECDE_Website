const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SpanishSections = sequelize.define('spanishSection', {
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
    spanishBlogId: {
      type: DataTypes.INTEGER,
      references: {
        model: SpanishBlog,
        key: 'id'
      }
    }
  }, {
    tableName: 'spanishSections',
    timestamps: false,
  });
  return SpanishSections
};