const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = async () => {
try{
    await mongoose.connect(process.env.MONGO_ULR, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'activosInformaticos'
    });
    console.log('connect')
} catch (error) {
    console.log(error);
    throw new Error('Error de inicio a la db');
}
};
module.exports = { dbConnection};