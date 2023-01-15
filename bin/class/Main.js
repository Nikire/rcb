const fs = require('fs');
const path = require('path');

class Main {
	parsePath(p) {
		let newPath = p.split('/');
		newPath = newPath.filter((str) => str !== '');
		for (let i = 0; i < newPath.length; i++) {
			if (i === 0) continue;
			newPath[i] = newPath[i - 1] + '/' + newPath[i];
		}
		return newPath;
	}
	findOrCreateFolder(p) {
		let pathing = this.parsePath(p);
		pathing.forEach((dir) => {
			let exists = fs.existsSync(path.join(process.cwd(), dir));
			if (!exists) fs.mkdirSync(path.join(process.cwd(), dir));
		});
	}
}

module.exports = Main;
