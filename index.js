const { setConfig } = require("./src/config");
const register = require("./src/register")

function init(options){
    setConfig(options)
}

module.exports = {
    init , 
    register
}


/* 
this is the example for initializing of the options
outh.init({
  model: User,
  identifier: "email",
  passwordField: "password",
  jwtSecret: process.env.JWT_SECRET,

  allowedFields: [
    "email",
    "password",
    "name",
    "phone",
    "address",
    "age",
    "gender",
    "pincode"
  ]
}); */