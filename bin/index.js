#! /usr/bin/env node
// ^ Importante o nada funciona
const { program } = require('commander');

// Import commands

const createReactComponent = require('./commands/create-react-component');

// Comandos
program
	.command('create-react-component <name>')
	.description(
		'create-react-component [name] used to create a specific component'
	)
	.action(createReactComponent);

// También importante para que todo funcione
program.parse();
