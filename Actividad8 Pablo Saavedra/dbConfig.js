const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://127.0.0.1/listadoinmuebles';

mongoose.connect(mongoDBUrl);

require('./models/inmueble.model');