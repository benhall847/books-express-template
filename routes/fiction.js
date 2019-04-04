const Router = require('express').Router;

const retrieveAll = require('../controllers/fiction');

const fictionRoutes = Router();

fictionRoutes.get('/', retrieveAll);

module.exports = fictionRoutes;