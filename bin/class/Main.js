const fs = require('fs');
const path = require('path');

class Main {
  templatesPath = path.join(__dirname, '..', 'templates');
  /**
   * La función toma una string str y una string method, donde str va a ser la cadena de carácteres devuelta
   * en forma de CapitalCase. El method corresponde a qué separación ha de tenerse en cuenta para definir la CapitalCase.
   * @param {string} str str - String a ser capitalizada
   * @param {string} method str - String que define división
   * @returns {string} str - CapitalCase string.
   * @example
   * let str = uncapitalized-string;
   * capitalizeWord(str,'-') // returns 'UncapitalizedString';
   */
  capitalizeWord(str, method = ' ') {
    return str
      .split(method)
      .map((word) =>
        word
          .split('')
          .map((letter, i) =>
            i === 0 ? letter.toUpperCase() : letter.toLowerCase()
          )
          .join('')
      )
      .join('');
  }
  /**
   *La función toma una string p y la procesa para obtener cada subdirectorio separado de la ruta principal.
   * @param {string} p str - Ruta a procesar
   * @returns {string[]} str[] - Directorio subdividido
   * @example
   * let p = 'route/of/the/file';
   * parsePath(p) // returns ['route','route/of','route/of/the','route/of/the/file'];
   */
  parsePath(p) {
    let newPath = p.split('/');
    newPath = newPath.filter((str) => str !== '');
    for (let i = 0; i < newPath.length; i++) {
      if (i === 0) continue;
      newPath[i] = newPath[i - 1] + '/' + newPath[i];
    }
    return newPath;
  }
  /**
   * La función toma una string p y la usa para crear todas las carpetas necesarias si no existen.
   * toman como referencia la posición de la terminal.
   * @example
   * let p = '/var/lib/exampleFolder/'; // Creará var, var/lib y var/lib/exampleFolder.
   * @param {string} p str -
   * @returns undefined
   */
  findOrCreateFolder(p) {
    let pathing = this.parsePath(p);
    pathing.forEach((dir) => {
      let exists = fs.existsSync(path.join(process.cwd(), dir));
      if (!exists) fs.mkdirSync(path.join(process.cwd(), dir));
    });
    console.log('Done creating folder');
  }
  /**
   * La función toma como parámetros dir y content, donde dir es la ruta del archivo con su terminación.
   * @example dir = '/var/lib/example.js';
   * @param {string} dir str - Dirección con terminación del archivo a crear.
   * @param {string} content str - Contenido del archivo, default ''.
   * @returns undefined
   */
  createFile(dir, content = '') {
    fs.writeFileSync(path.join(process.cwd(), dir), content);
    console.log('Done creating ' + dir);
  }
  useTemplate(p, name = 'component') {
    let template = require(path.join(this.templatesPath, p));
    template = template.replaceAll('<NAME>', name);

    return template;
  }

  setupCreate(type, path) {
    switch (type) {
      case 'redux':
        const reduxArray = [
          { name: 'actions', direccion: path + 'actions/' + 'actions' + '.js' },
          { name: 'reducer', direccion: path + 'reducer/' + 'reducer' + '.js' },
          { name: 'store', direccion: path + 'store/' + 'store' + '.js' }
        ]
        this.findOrCreateFolder(path)
        reduxArray.forEach((carpeta) => {
          this.findOrCreateFolder(`${path}/${carpeta.name}`)
          this.createFile(carpeta.direccion, this.useTemplate(`/components/${carpeta.name}.js`))
        })
      default: console.log("Ingrese algun valor recomendado en la documentación")
    }
  }
}

module.exports = Main;
