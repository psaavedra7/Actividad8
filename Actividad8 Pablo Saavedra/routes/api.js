const router = require('express').Router();

const apiInmuebleRouter = require('./api/inmueble');

router.use('/inmueble', apiInmuebleRouter);

module.exports = router;