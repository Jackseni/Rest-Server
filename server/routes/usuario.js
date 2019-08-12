// Ruta para manejar los metodos de HTTP ( GET, POT , PUT ,DELETE)

const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

//

app.get('/', (req,res)=> {
    res.json('Hola Mundo');
});

app.get('/usuario', (req, res) => {
    res.json('get Usuario LOCAL' )
});

app.post('/usuario',(req,res) => {
    let body = req.body;

    let usuario = new Usuario({  // Crea nueva instancia del esquema usuario
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role,
        google: body.google
    });

//  Grabar ala BD
    usuario.save((err,usuarioDB) => {
        // Validar si hubo error.
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = req.bod
    y;

    //Traer el usuaio que solicitamos de acuerdo al ID de la BDD
    Usuario.findByIdAndUpdate(id, body,{ new: true } , (err, usuarioDB)=>{
        // Validar si hubo error
        if (err){
            res.status(400).json({
                ok: false,
                err
            })  
        }

        res.json({
            ok: true,
            usuario: UsuarioDB
        });
    });
});

app.delete('/usuario', (req, res) => {
    res.json('Delete Usuario');
})

module.exports = app;
