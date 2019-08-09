// Archivo para iniciar el servidor
require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parce_application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// parce application/json

app.use(bodyParser.json());

app.use(require('./routes/usuario'));

//Conectar ala BDD
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true },(err, resp)=>{
    if(err) throw err; // Si hay error que lo muestre

    console.log('Base de datos online');
});

app.listen(process.env.PORT, ()=>{
    console.log('Escuchando Puerto: ', process.env.PORT);
})


