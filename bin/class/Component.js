const Main = require('./Main.js');

class Component extends Main {
	constructor(name) {
		super();
		this.name = name;
	}
	componentPath = '/src/components/';
	createComponent() {
		this.findOrCreateFolder(this.componentPath + this.name);
	}
}
module.exports = Component;
