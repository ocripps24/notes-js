(function(exports) {
  function storeStringsAsNoteText() {
    var note = new Note('Test');

    if (note.content !== 'Test') {
      throw new Error("Expected 'Test' but instead got something else");
    }
  };

  exports.storeStringsAsNoteText = storeStringsAsNoteText;

})(this);

storeStringsAsNoteText();


// LE STIIFE

// (function(exports) {
//
//   exports.xxx = xxx;
// })(this);


// (function(exports) {
//
//   var assert = {
//     isTrue: function(assertionToCheck) {
//       if (!assertionToCheck) {
//         throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//       }
//     }
//   };
//
//   exports.assert = assert;
//
// })(this);
