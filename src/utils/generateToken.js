const jwt = require("jsonwebtoken");

function generateToken(userId , secret){
    return jwt.sign(
        {id : userId},
        secret,
        {expiresIn : "15m"}
    )
}

module.exports = generateToken