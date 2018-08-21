'use strict';
module.exports = (sequelize, DataTypes) => {
  var articleTags = sequelize.define('articleTags', {
    articleId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  articleTags.associate = function(models) {
    // associations can be defined here
  };
  return articleTags;
};