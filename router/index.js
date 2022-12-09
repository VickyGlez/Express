const productsRouter = require('./products.router');
const express = require('express');
/*const { route } = require('./products.router');
/*const usersRoutes = require('./users.routes');*/

function routerApi(app){
const router = express.Router();
app.use ('/api/v1', router);
router.use('/productos', productsRouter);
}

module.exports = routerApi;
