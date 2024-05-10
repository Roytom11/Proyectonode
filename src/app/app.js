const express = require ('express');
const cors = require ('cors');
const morgan = require('morgan');
const userRouter = require ('../router/user.js');
const { dbConnection } = require('../db/connection');


const app = express();
const corsoptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsoptions));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



//dbConnection();

app.use('/user', userRouter);


module.exports = app;
