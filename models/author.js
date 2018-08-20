'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    models.author.hasMany(models.article);
    models.author.hasMany(models.comment);
  };
  return author;
};
