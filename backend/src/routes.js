const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const express = require('express');
const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/profile', ProfileController.index);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


module.exports = routes;