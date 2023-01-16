const Environment = require('../../class/Enviroment');

function createEnvironment(type) {
    const environmentHandler = new Environment(type);
    environmentHandler.createComponent();
}

module.exports = createEnvironment;