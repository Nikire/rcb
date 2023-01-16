const Setup = require('../../class/Setup')

const createSetup = (type) => {
    const setupHandler = new Setup(type)
    setupHandler.createSet()
}

module.exports = createSetup;