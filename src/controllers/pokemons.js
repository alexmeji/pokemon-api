const pokemonsdb = require('../../db/pokemondb');

class PokemonController {
  constructor(router) {
    this.router = router;
    this.router.get('/pokemons', this.list);
    this.router.get('/pokemons/:pokemonid', this.one);
    this.router.post('/pokemons', this.store);
    this.router.put('/pokemons/:pokemonid', this.update);
    this.router.delete('/pokemons/:pokemonid', this.destroy);
  }

  list(req, res) {
    res.json(pokemonsdb);
  }

  one(req, res) {
    const pokemon = pokemonsdb.find((pk) => String(pk.id) === req.params.pokemonid);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({
        error: 404,
        message: 'Este pokemon no existe en la Base de Datos',
      });
    }
  }

  store(req, res) {
    const newPokemon = req.body;
    const pokemon = pokemonsdb.find((pk) => pk.id === newPokemon.id);
    if (!pokemon) {
      pokemonsdb.push(newPokemon);
      res.json(newPokemon);
    } else {
      res.status(409).json({
        error: 409,
        message: 'Este pokemon existe en la Base de Datos',
      });
    }
  }

  update(req, res) {
    const pokemonId = req.params.pokemonid;
    const updatePokemon = req.body;
    const pokemonIndex = pokemonsdb.findIndex((pk) => pk.id === parseInt(pokemonId, 10));
    if (pokemonIndex > 0) {
      pokemonsdb.splice(pokemonIndex, 1, updatePokemon);
      res.json(updatePokemon);
    } else {
      res.status(404).json({
        error: 404,
        message: 'Este pokemon no existe en la Base de Datos',
      });
    }
  }

  destroy(req, res) {
    const pokemonId = req.params.pokemonid;
    const pokemonIndex = pokemonsdb.findIndex((pk) => pk.id === parseInt(pokemonId, 10));
    if (pokemonIndex > 0) {
      pokemonsdb.splice(pokemonIndex, 1);
      res.json({
        message: 'El pokemon ha sido eliminado',
      });
    } else {
      res.status(404).json({
        error: 404,
        message: 'Este pokemon no existe en la Base de Datos',
      });
    }
  }
}

module.exports = PokemonController;
