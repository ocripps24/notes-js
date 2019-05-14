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
