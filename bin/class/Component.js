const Main = require('./Main.js');
class Component extends Main {
  constructor(name) {
    super();
    this.name = this.capitalizeWord(name);
  }
  componentPath = '/src/components/';
  createComponent() {
    let path = this.componentPath + this.name;
    let jsx = path + '/' + this.name + '.jsx';
    let css = path + '/' + this.name + '.modules.css';
    this.findOrCreateFolder(path);
    this.createFile(jsx, this.useTemplate(`/components/${this.name}.js`, this.name));
    this.createFile(css);
  }
}
module.exports = Component;
