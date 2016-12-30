/*
var obj =
{
  name:"Israel"
}

//Returns the json
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/
/*
var presonString = '{"name": "Andrew", "age": 22}';
var person = JSON.parse(presonString);
console.log(typeof person);
console.log(person);
*/
const fs = require('fs');

//Note object
var originalNote =
{
  title: "Some title",
  body: "Some body"
};

//takes our object and converts it into a string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


var notesString = fs.readFileSync('notes.json');
//note variable
//takes the string and converts it into a json object
var note = JSON.parse(notesString);
console.log(typeof note);
console.log(note.title);
