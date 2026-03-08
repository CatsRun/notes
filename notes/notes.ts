 const input = document.querySelector('#noteInput') as HTMLInputElement;
 const button = document.querySelector('button');
 const list = document.querySelector('#list');

// class saveNote {
//     private notes: string;
    
//     public constructor(notes: string) {
//         this.notes = notes;     
//     }

//     loadNotes(): string {
//         return this.notes;    
//     }
    
//     // let testNote = new Note() 
// }

function saveNotes() {
    const notes: Array<string> = [];
    const list = document.querySelector('#list') as HTMLInputElement | null;
    
    if (!list) {
        console.error("Element #list not found");
        return;
    } 

    list.querySelectorAll('li').forEach((li) => {
        const first = li.firstChild;
        const text = first?.textContent?.trim() ?? '';
        if (text) {           
            notes.push(text);
        }
    });
    
    localStorage.setItem('myNotes', JSON.stringify(notes));
}

//  this could be a class with methods in it.
// function newNote(input: HTMLInputElement) {
//     // button.addEventListener('click', function () {
//         const button = document.querySelector('button');
//         button?.addEventListener('click', () => {

//         // });



//         const text = input.value.trim();

//         if (text === '') {
//             input.focus();
//             console.log("input is empty")
//             return
//         }

//         // create new note
//         const li = document.createElement('li');     
//         const deleteButton = document.createElement('button');

//         li.textContent = text + ' ';
//         deleteButton.textContent = '❌';
//         li.append(deleteButton);
//         list.appendChild(li);

//         // delete 
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             saveNotes();           // ← save after delete too
//         });

//         input.value = '';
//         input.focus();
//         console.log("Note added");

//         saveNotes();
//     });
// }