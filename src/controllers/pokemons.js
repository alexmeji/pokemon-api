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

  async list(req, res) {
    try {
      const list = await pokemonRepository.all();
      res.json(list);
    } catch (error) {
      res.status(500).json({
        error: 500,
        message: 'Ocurrio un prolema en el API',
      });
    }
  }

  async one(req, res) {
    try {
      const { pokemonid } = req.params;
      const item = await pokemonRepository.one(pokemonid);
      if (item) res.json(item);
      else {
        res.status(404).json({
          error: 404,
          message: 'Este pokemon no existe en la Base de Datos',
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 500,
        message: 'Ocurrio un prolema en el API',
      });
    }
  }

  async store(req, res) {
    try {
      const { body } = req;
      const item = await pokemonRepository.store(body);
      res.json(item);
    } catch (error) {
      res.status(500).json({
        error: 500,
        message: 'Ocurrio un prolema en el API',
      });
    }
  }

  async update(req, res) {
    try {
      const { pokemonid } = req.params;
      const { body } = req;
      const item = await pokemonRepository.update(pokemonid, body);
      if (item) res.send(item);
      else {
        res.status(404).json({
          error: 404,
          message: 'Este pokemon no existe en la Base de Datos',
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 500,
        message: 'Ocurrio un prolema en el API',
      });
    }
  }

  destroy(req, res) {
    try {
      const { pokemonid } = req.params;
      const item = pokemonRepository.destroy(pokemonid);
      if (item) res.json(item);
      else {
        res.status(404).json({
          error: 404,
          message: 'Este pokemon no existe en la Base de Datos',
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 500,
        message: 'Ocurrio un prolema en el API',
      });
    }
  }
}

module.exports = PokemonController;
