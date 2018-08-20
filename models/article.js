'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    models.article.belongsTo(models.author);
    models.article.hasMany(models.comment);
  };
  return article;
};
