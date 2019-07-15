const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./Note.js')

var green = chalk.green("Krishna");

console.log(`----${green}----`)

yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
}),
yargs.command({
    command: 'List',
    describe: 'List Note',
    handler(argv) {
        notes.listNote()
    }
}),
yargs.command({
    command: 'read',
    describe: 'read Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


