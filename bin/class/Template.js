const Main = require('./Main.js');

class Template extends Main {
  /**
   * useTemplate devuelve una string (la template misma) pero a la vez crea una referencia dentro de su entorno
   * con el objetivo de usar la template como queramos con los métodos que nos ofrece la clase Template
   *
   * @param {string} path usado para determinar la ruta de la template creada.
   * @return {string} templateString string devuelta una vez encontrada
   *
   * @example
   * var template = new Template;
   * template.useTemplate('components/rfc')
   */
  actualTemplate = '';
  useTemplate(path) {
    this.actualTemplate = String(require(this.templatesPath + path));
    return this.actualTemplate;
  }

  /** setVariable tiene como función reemplazar un valor en el template el cuál tiene el objetivo de ser reemplazado
   *  @param {mixed} name puede ser tanto com un objeto con varios nombres y valores o un nombre solo
   *  @param {mixed} valor es el valor correspondiente al nombre asignado, solo funciona cuando name no es objeto.
   *
   *  @example
   *  template.setVariable('name', 'Jose') // reemplazará en la template que exista todo {{NAME}} en Jose
   */
  setVariable(name, value) {
    let objHandler = {};

    if (typeof name == 'object' && !Array.isArray(name)) {
      objHandler = name;
    } else {
      objHandler[name] = value;
    }
    for (let n in objHandler) {
      this.actualTemplate = this.actualTemplate.replaceAll(
        '{{' + n.toUpperCase() + '}}',
        objHandler[n]
      );
    }
  }
  render() {
    return this.actualTemplate;
  }
}
module.exports = Template;
