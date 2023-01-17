const Environment = require('../../class/Environment');

function createEnvironment(type) {
    const environmentHandler = new Environment(type);
    environmentHandler.createEnvironment();
}

module.exports = createEnvironment;