const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inmuebleSchema = new Schema({
    piso: String,
    extensión: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email: String
})

module.exports = mongoose.model('inmueble', inmuebleSchema);