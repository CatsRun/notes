// add notes to screen
 const input = document.querySelector('#noteInput');
 const button = document.querySelector('button');
 const list = document.querySelector('#list');

//  loads saved notes from local storage
 loadNotes();

//  saves the users notes to local storage
// function saveNotes() {
//     localStorage.setItem('myNotes', JSON.stringify(input));
// }

// loads all notes
// function loadNotes() {
//     const input = localStorage.getItem('myNotes');
//     if (!input)
//         return [];
//     // try {
//     //     return JSON.parse(input);
//     // }
//     // catch (err) {
//     //     console.error('fix input', err);
//     //     return [];
//     // }
//     try {
//         const notes = JSON.parse(input);
//         notes.forEach(text => {
//             const li = document.createElement('li');
//             const deleteBtn = document.createElement('button');
            
//             li.textContent = text + ' ';
//             deleteBtn.textContent = '❌';
//             li.append(deleteBtn);
//             list.appendChild(li);

//             deleteBtn.addEventListener('click', () => {
//                 list.removeChild(li);
//                 saveNotes();
//             });
//         });
//     } catch (err) {
//         console.error("Could not load notes:", err);
//     }

// }

function loadNotes() {
    const saved = localStorage.getItem('myNotes');
    if (!saved) return;

    try {
        const notes = JSON.parse(saved);
        notes.forEach(text => {
            const li = document.createElement('li');
            const deleteBtn = document.createElement('button');
            
            li.textContent = text + ' ';
            deleteBtn.textContent = '❌';
            li.append(deleteBtn);
            list.appendChild(li);

            deleteBtn.addEventListener('click', () => {
                list.removeChild(li);
                saveNotes();
            });
        });
    } catch (err) {
        console.error("Could not load notes:", err);
    }
}


function newNote (input) {
    button.addEventListener('click', function () {
        const text = input.value.trim();

        if (text === '') {
            input.focus();
            console.log("input is empty")
            return
        }

        // create new note
        const li = document.createElement('li');     
        const deleteButton = document.createElement('button');

        li.textContent = text + ' ';
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.appendChild(li);

        // delete 
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            saveNotes();           // ← save after delete too
        });

        input.value = '';
        input.focus();
        console.log("Note added");

        saveNotes();


        // if (input.value != '') {
        //     const li = document.createElement('li');
        //     const deleteButton = document.createElement('button');
        //     li.textContent = input.value;
        //     deleteButton.textContent = '❌';
        //     li.append(deleteButton);
        //     list.append(li);
        //     deleteButton.addEventListener('click', function () {
        //         list.removeChild(li);
        //     });
        //     input.value = '';
        //     input.focus();
        //     console.log("note works");

        // }

        // else {
        //     input.focus();
        //     console.log("Why is button not working?");
            
        // }
    });
}

function saveNotes() {
    const notes = [];
    list.querySelectorAll('li').forEach(li => {
        // Get text before the delete button
        const text = li.firstChild.textContent.trim();
        notes.push(text);
    });
    
    localStorage.setItem('myNotes', JSON.stringify(notes));
}



newNote(input);
// saveNotes(newNote());