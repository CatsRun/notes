// 2. Helper functions to talk to localStorage
function saveNotes(notes) {
    // Convert array → string → save
    localStorage.setItem("my-notes", JSON.stringify(notes));
}
function loadNotes() {
    var data = localStorage.getItem("my-notes");
    if (!data)
        return []; // first time user → empty list
    try {
        return JSON.parse(data); // string → array
    }
    catch (err) {
        console.error("Broken notes data!", err);
        return [];
    }
}
// 3. Example: current state in your app (React / vanilla TS)
// let allNotes: Note[] = loadNotes();   // load when app starts
// // When user creates or edits a note
// function addOrUpdateNote(newNote: Note): void {
//   // Find if note already exists (by id)
//   const index = allNotes.findIndex(n => n.id === newNote.id);
//   if (index >= 0) {
//     // Update existing note
//     allNotes[index] = { ...newNote, updatedAt: new Date().toISOString() };
//   } else {
//     // Add new note
//     allNotes.push({
//       ...newNote,
//       id: crypto.randomUUID(),           // nice unique ID
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     });
//   }
  saveNotes(allNotes);           // ← this actually persists it
//   // Then update your UI (show list again)
// }
