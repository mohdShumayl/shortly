//const {v4: uuidv4} = require('uuid'); //session code
const User = require("../models/user.model");
const { setUser } = require('../service/auth.js')


async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.redirect('/');
}


async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user)
        return res.render("login", {
            error: "Invalid email or password!",
        });
    //const sessionId = uuidv4();    //session code
    //setUser(sessionId, user); //session code
    const token = setUser(user);
    //res.cookie('uid', sessionId); //session code


    res.cookie('token', token); //sending token via cookie 
    //res.json({token}) //sending token via res authentication header 

    return res.redirect('/');
}



module.exports = {
    handleUserSignup,
    handleUserLogin,
}