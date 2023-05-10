const router = require('express').Router();
const inmueble = require('../../models/inmueble.model');

//Buscar un inmueble en BBDD
router.get('/', (req, res) => {
    inmueble.find()
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({ error: err.message }))
})

//Crear un nuevo inmueble
router.post('/', (req, res) => {
    inmueble.create(req.body)
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({ error: err.message }))
})

//Actualizar inmueble
router.put('/:inmuebleId', (req, res) => {
    inmueble.findByIdAndUpdate(req.params.inmuebleId, req.body)
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({ error: err.message }))
})

//Borrar un inmueble de BBDD
router.delete('/:inmuebleId', (req, res) => {
    inmueble.findByIdAndDelete(req.params.inmuebleId)
        .then(inmueble => res.json(inmueble))
        .catch(err => res.json({ error: err.message }))
})

module.exports = router;