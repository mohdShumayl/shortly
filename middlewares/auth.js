const { getUser } = require("../service/auth")


function checkForAuthentication(req, res, next){
    const tokenCookie = req.cookies?.token;
     req.user = null;
    if (!tokenCookie) {
        return next();
    }

    const token = tokenCookie;
    const user = getUser(token);

    req.user = user;
    return next();
}

function restrictTo(roles = []){
    return function (req, res, next){
        if(!req.user ){
            return res.redirect("/login");
        }
        if(!roles.includes(req.user.role)){
            res.end("Unauthorized")
        }
        return next();
    }
}


module.exports = { checkForAuthentication, restrictTo };



/*async function restrictToLoginUserOnly(req, res, next) {
    //const userUid = req.cookies?.uid;  //sending token via cookie 

    const userUid = req.headers.authorization

    if (!userUid) return res.redirect("/login")

    const token = userUid.split('Bearer ')[1]; //"Bearer 64fdg4fwdsb"   
    //const user = getUser(userUid); //sending token via cookie 
    const user = getUser(token); //sending token via res authentication header

    if (!user) return res.redirect("/login");

    req.user = user; //session code
    //console.log(req.user)
    next();
}

async function checkAuth(req, res, next) {
    //sending token via cookie 
    //const userUid = req.cookies?.uid;
    //const user = getUser(userUid);

    //sending token via res authentication header
    const userUid = req.headers.authorization
    const token = userUid.split("Bearer ")[1];
    const user = getUser(token);

    req.user = user;
    next();
}
module.exports = { restrictToLoginUserOnly, checkAuth }*/
