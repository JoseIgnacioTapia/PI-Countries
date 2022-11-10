const { Router } = require('express');
// const express = require('express');
// const router = express.Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require('./countries.js');
const activityRoute = require('./activities.js');

const router = Router();

// const router = require('express').Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoute);
router.use('/activities', activityRoute);

module.exports = router;
