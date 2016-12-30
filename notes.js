console.log('Starting notes.js');


var addNote = (title, body) => {
  console.log('Adding note');
  console.log('Title name:', title);
  console.log("Body:", body);
};

var getAll = () =>{
  console.log('Getting all notes');
};

var getNote = (title) =>
{
  console.log('Getting note');
  console.log('Title of Notes:', title);

};
var removeNote = (title) =>
{
  console.log('Removing Note:', title);
}

module.exports = {
    //property add note
    addNote,
    getAll,
    getNote,
    removeNote
};
