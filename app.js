console.log('Starting app.');


const fs = require('fs')
//require is a function pass in on;
//passing in the fs module
const os = require('os');
//Did npm init to initialize the package.json to
//include the module lodash using 'npm install lodash'
//underscore is a common name for the lodash library
const _ = require('lodash');
//This require will obtain the file we create with our own functionality
//Passing in one argument that is a string (File Path "relative bath")
//Modules that I created
const notes = require('./notes.js');

//String parsing library
//parsing data
const yargs = require('yargs');
//argv - argument vector

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log("Yargs", argv);
if(command === 'add')
{
  console.log('Adding new Note');
  notes.addNote(argv.title, argv.body);

}
else if(command === 'list')
{
  notes.getAll();
}
else if(command === 'read')
{
  notes.getNote(argv.title);
}
else if(command === 'remove')
{
  notes.removeNote(argv.title);
}
else {
  console.log("Command not recognized");
}
