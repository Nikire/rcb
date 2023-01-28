const Main = require('./Main.js');
const Template = require('./Template.js');

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
    let rfcTemplate = new Template();
    rfcTemplate.useTemplate('/components/rfc.js');
    rfcTemplate.setVariable({ name: this.name });
    console.log(rfcTemplate.actualTemplate);
    this.createFile(jsx, rfcTemplate.render());
    this.createFile(css);
  }
}
module.exports = Component;
