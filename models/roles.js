'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.SMALLINT
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};