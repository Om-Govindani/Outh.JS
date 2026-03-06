let config = {}

function setConfig(options){
    config = options
}

function getConfig(){
    return config
}

module.exports = {
    setConfig,
    getConfig
}