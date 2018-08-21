'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    models.tag.belongsToMany(models.article, {through: 'articleTags'});
  };
  return tag;
};
