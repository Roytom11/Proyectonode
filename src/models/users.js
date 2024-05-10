const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nombre obligatorio'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email obligatorio'],
        trim: true,
        unique: true,
    },
    Password: {
        type: String,
        required: [true, 'Contraseña obligatoria'],
        trim: true,
    }, 
}, {    
        collection: 'users',
        database: 'activosinformaticos',
});

const Users = mongoose.model('users', userSchema);

module.exports = { Users };
