const express = require('express');

/** Express App */
const app = express();

/** Controllers */
const InfoController = require('./controllers/info');
const PokemonsController = require('./controllers/pokemons');

app.use(express.json());
app.use(new InfoController(express.Router()).router);
app.use(new PokemonsController(express.Router()).router);

module.exports = app;
