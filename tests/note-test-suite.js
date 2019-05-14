function storeStringsAsNoteText() {
  var note = new Note('Test');

  assert.isTrue(note.content === 'Test')
};
console.log('storeStringsAsNoteText');
storeStringsAsNoteText();

function checkDisplayText() {
  var note = new Note('Banana')
  assert.isTrue(note.displayText() === 'Banana')
};
console.log('checkDisplayText');
checkDisplayText();

function returnAllNotes() {
  var noteList = new NoteList()
  assert.arraysMatch(noteList.returnAll(), noteList.notes);
}
console.log('returnAllNotes');
returnAllNotes()

function createNewNote() {
  var notelist = new NoteList();
  notelist.createNewNote('Pears')
  var note = notelist.notes[0];
  assert.isTrue(note.displayText() === 'Pears');
}
console.log('createNewNote');
createNewNote();

// function createNewNote() {
//   var noteList = new NoteList();
//   // var note = new Note('Favourite drink: seltzer')
//   content = 'Favourite drink: seltzer'
//   noteList.newNote()
//   assert.isTrue(noteList.returnAll()[0].displayText() === content)
// }
// console.log('createNewNote');
// createNewNote()
