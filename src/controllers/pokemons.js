const boom = require('@hapi/boom');
const pokemonRepository = require('../repositories/pokemons-repository');

class PokemonController {
  constructor(router) {
    this.router = router;
    this.router.get('/pokemons', this.list);
    this.router.get('/pokemons/:pokemonid', this.one);
    this.router.post('/pokemons', this.store);
    this.router.put('/pokemons/:pokemonid', this.update);
    this.router.delete('/pokemons/:pokemonid', this.destroy);
  }

  async list(req, res, next) {
    try {
      const list = await pokemonRepository.all();
      res.json(list);
    } catch (error) {
      next(error);
    }
  }

  async one(req, res, next) {
    try {
      const { pokemonid } = req.params;
      const item = await pokemonRepository.one(pokemonid);
      if (item) res.json(item);
      else next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const item = await pokemonRepository.store(body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { pokemonid } = req.params;
      const { body } = req;
      const item = await pokemonRepository.update(pokemonid, body);
      if (item) res.send(item);
      else next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }

  destroy(req, res, next) {
    try {
      const { pokemonid } = req.params;
      const item = pokemonRepository.destroy(pokemonid);
      if (item) res.json(item);
      else next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PokemonController;
