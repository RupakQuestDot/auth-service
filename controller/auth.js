const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{

    const {name, password } = req.body;

    const user = await User.findOne({name});
    if (!user) return res.status(400).json({message : 'User is not found'});

    const validPassword =  await bcrypt.compareSync(password, user.password);
    if(!validPassword) return res.status(400).json({message : 'Invalid Password'});

    const token = jwt.sign({_id : user._id},process.env.SECRET);
    res.header('auth-token',token).send(token);
};

module.exports = {
    login
}