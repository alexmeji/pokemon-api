'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemons = sequelize.define('Pokemons', {
    name: DataTypes.STRING,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    experience: DataTypes.FLOAT
  }, {});
  Pokemons.associate = function(models) {
    // associations can be defined here
  };
  return Pokemons;
};