const Users = require('../models/users')

async function getUsers(req, res )  {

    try {  
        const  users = await Users.find();  
    res.status(200).json({ users });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'error ' });
    }
    
}

async function newUser(req, res) {
    try {
        const { name,  email, password } = req.body;
        const  user = await Users.create({ name, email, password });
        await user.save();
        res.status(200).json({ user });
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'error ' });
    }
}

module.exports = { getUsers, newUser };