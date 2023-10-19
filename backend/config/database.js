const mongoose = require('mongoose');

const connectDB = (uri) => {
    mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    })
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => {
        console.error('Error de conexión a la base de datos:', error);
    });
}

module.exports = connectDB;
