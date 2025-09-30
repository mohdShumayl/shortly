//const sessionIdToUseraMap = new Map(); //session code
const jwt = require('jsonwebtoken');
const secrectKey = "ABSCDU"

//session code
// function setUser(id, user){ 
//     sessionIdToUseraMap.set(id, user);
// }

function setUser(user) {
    //console.log(user)
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secrectKey)
}
function getUser(token) {
    //return sessionIdToUseraMap.get(id); //session code
    if (!token) return null; // important check
    try {
        return jwt.verify(token, secrectKey);
    } catch (err) {
        console.error("JWT Error:", err.message);
        return null;
    }
}

module.exports = { setUser, getUser };