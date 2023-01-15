const Component = require('../../class/Component');

function createReactComponent(name) {
	const componentHandler = new Component(name);
	componentHandler.createComponent();
}

module.exports = createReactComponent;
