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

const userRouter = require ('../router/user')

app.use('user', userRouter);

module.exports = app;
