class InfoController {
  constructor(router) {
    this.router = router;
    this.router.get('/', this.root);
    this.router.get('/info', this.info);
  }

  root(req, res) {
    res.json({
      name: 'pokedex-backend',
      version: '0.1.0',
    })
  }

  info(req, res) {
    res.json({
      name: 'pokedex-backend',
      version: '0.1.0',
    });
  }
}

module.exports = InfoController;
