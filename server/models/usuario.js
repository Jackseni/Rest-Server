//Este archivo contiene el modelo
//usuario de la collection  de la BD.

const mongoose = require ('mongoose');

let Shema = mongoose.Schema; 

    let usuarioSchema = new Schema({
        nombre: {
            type: String,
            require: [true, 'El nombre es necesario']
        },
        email:{
            type: String,
            required: [true, 'El correo es necesario']
        },
        password: {
            type: String,
            required: [true, 'La contraseña es obligatoria']
        },
        img:{
            type: String,
            required : false
        },
        role:{
            type : String,
            required: 'USER_ROLE'

        },
        estado:{
                type: Boolean,
                default: true

        },
        google:{
            type : Boolean,
            required : false

        }

});

module.exports = mongoose.model('Usuario', usuarioSchema);
