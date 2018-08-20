'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    content: DataTypes.STRING,
    articleId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    models.comment.belongsTo(models.article);
    models.comment.belongsTo(models.author);
  };
  return comment;
};
