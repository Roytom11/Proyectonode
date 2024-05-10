const Users = require('../models/user')

async function getUsers(req, res )  {

    try {    
    res.status(200).json({ saludo: 'hola'});

    } catch (error) {
        res.status(500).json({ error: 'error ' });
    }
    
    
}

module.exports = { getUsers};