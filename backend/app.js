const express = require('express');
const mongoose = require('mongoose');

const pedidoRoutes = require('../backend/routes/pedidoRoutes'); 
const connectDB = require('../backend/config/database.js');
const pedidoRoutes = require('../backend/routes/pedidoRoutes');
const documentoEntregaRoutes = require('../backend/routes/documentoEntregaRoutes');
const guiaTransporteRoutes = require('../backend/routes/guiaTransporteRoutes');
const pruebaEntregaRoutes = require('../backend/routes/pruebaEntrega');
const testRoutes = require('../backend/routes/test.js');

const dotenv = require('dotenv');
const app = express();
dotenv.config();

 

app.get("/",(req,res)=>{
    res.send('servidor corriendo');
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async(req,res) =>{
  try {
      connectDB(MONGO_URI);
      console.log('base de datos conectada')
      app.listen(PORT, () => {
          console.log(`Conexión exitosa http://localhost:${PORT}`);
      });
      
  } catch (error) {
      console.log(error)
  }
}


app.use('/api', testRoutes);
app.use('/api', pedidoRoutes); 
app.use('/api', documentoEntregaRoutes);
app.use('/api', guiaTransporteRoutes);
app.use('/api', pruebaEntregaRoutes);
app.use('/api', facturaRoutes);

start();
