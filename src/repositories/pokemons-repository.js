const { Pokemons } = require('../database/models');

const all = async () => {
  const list = await Pokemons.findAll();
  return list;
};

const one = async (id) => {
  const item = await Pokemons.findOne({
    where: {
      id,
    },
  });

  return item;
};

const store = async (pokemon) => {
  const item = await Pokemons.create({
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    experience: pokemon.experience,
  });

  return item;
};

const update = async (id, pokemon) => {
  let item = await Pokemons.update({
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    experience: pokemon.experience,
  }, { where: { id } });

  if (item[0] === 1) {
    item = await Pokemons.findOne({ where: { id } });
  } else {
    item = null;
  }

  return item;
};

const destroy = async (id) => {
  let item = await Pokemons.findOne({ where: { id } });
  if (item) {
    await Pokemons.destroy({ where: { id } });
  } else item = null;

  return item;
};

module.exports = {
  all,
  one,
  store,
  update,
  destroy,
};
