
const express = require('express');
const routes = express.Router();

const clientes = require('./controller/controllerclientes');
const pizzas = require('./controller/controllerpizzas');
const pedidos = require('./controller/controllerpedidos');

routes.get('/clientes', clientes.read);
routes.post('/clientes', clientes.create);
routes.put('/clientes/:id', clientes.update);
routes.delete('/clientes/:id', clientes.del);

routes.get('/pizzas', pizzas.read);
routes.post('/pizzas', pizzas.create);
routes.put('/pizzas/:id', pizzas.update);
routes.delete('/pizzas/:id', pizzas.del);

routes.get('/pedidos', pedidos.read);
routes.get('/pedidos/:id', pedidos.readOne);
routes.post('/pedidos', pedidos.create);
routes.put('/pedidos/:id', pedidos.update);
routes.delete('/pedidos/:id', pedidos.del);



module.exports = routes;