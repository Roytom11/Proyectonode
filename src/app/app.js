const express = require ('express');
const cors = require ('cors');
const morgan = require('morgan');

const app = express();
const corsoptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsoptions));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).json({mensaje: 'Bienvenido a la API de Node.js'});
});

module.exports = app;
