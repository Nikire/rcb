const Main = require('./Main.js');

class Environment extends Main {
    constructor(type) {
        super();
        this.type = type.toLowerCase();
    }
    environmentCreate() {
        this.createEnvironment(this.type)
    }
}

module.exports = Environment;