const express = require('express');

/** Express App */
const app = express();

/** Handlers */
const requestHandler = require('./middlewares/request-handler');
const errorHandler = require('./middlewares/error-handler');

/** Controllers */
const InfoController = require('./controllers/info');
const PokemonsController = require('./controllers/pokemons');

app.use(express.json());
app.use(requestHandler());
app.use(new InfoController(express.Router()).router);
app.use(new PokemonsController(express.Router()).router);
app.use(errorHandler());

module.exports = app;
