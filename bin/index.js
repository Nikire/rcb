#! /usr/bin/env node
// ^ Importante o nada funciona
const { program } = require('commander');

// Import commands

const createReactComponent = require('./commands/create-react-component');
const createSetup = require('./commands/create-setup')

// Comandos
program
	.command('create-react-component <name>')
	.description(
		'create-react-component [name] used to create a specific component'
	)
	.action(createReactComponent);

program
	.command('create-setup <type')
	.description('create-setup [type] used to create a specific setup')
	.action(createSetup)

// También importante para que todo funcione
program.parse();
