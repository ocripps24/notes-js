(function(exports) {

  var NoteList = function() {
    this.notes = []
  };

  NoteList.prototype.returnAll = function() {
    return this.notes
  };

  NoteList.prototype.newNote = function(content) {
    var note = new Note(content)
    this.notes.push(note)
  }

  exports.NoteList = NoteList;

 })(this);
