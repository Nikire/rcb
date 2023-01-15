const fs = require('fs');
const path = require('path');
const Main = require('./Main.js')

class Setup extends Main {
    constructor(type) {
        super()
        this.type = type;
    }
    createSet() {
        let pathSetup = `/src/${this.type}/`
        this.setupCreate(this.type, pathSetup)
    }
}

module.exports = Setup;