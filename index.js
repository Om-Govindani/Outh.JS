const { setConfig } = require("./src/config");
const register = require("./src/register")

function init(options){
    setConfig(options)
}

module.exports = {
    init , 
    register
}