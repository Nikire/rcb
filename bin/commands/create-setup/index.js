const Setup = require('../../class/Setup')

const createSetup = (type) => {
    const setupHandler = new Setup(`${type.toLowerCase()}`)
    setupHandler.createSet()
}

module.exports = createSetup;