const { Router } = require('express');
const  postActivity  = require('../controller/activity.controller.js');
const { getCountriesName, getCountriesId, getCountries } = require('../controller/countries.controller.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', getCountries);

router.get('/countries/:idPais', getCountriesId);

router.get('/countries', getCountriesName);

router.post('/activities', postActivity);


module.exports = router;
