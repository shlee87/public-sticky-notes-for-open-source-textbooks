var editBox = null;
var editBoxTextArea = null;
var currentNote = null;

window.addEventListener("load", () => {
    // get html and append it to end of page body
    fetch(chrome.runtime.getURL('contentScripts/note/note.html')).then((response) => {
        return response.text();
    }).then((htmlData) => {
        // create note edit box
        editBox = document.createElement("div");
        editBox.classList.add("note-cont");
        editBox.style.display = "none";
        editBox.innerHTML = htmlData;
        document.getElementsByTagName('body')[0].appendChild(editBox);
        editBoxTextArea = editBox.querySelector(".note-editbox");
        editBox.querySelector(".note-close-btn").addEventListener("click", closeEditBox);
        editBox.querySelector(".note-delete-btn").addEventListener("click", () => deleteNote(currentNote.uuid));
    }).catch((err) => {
        console.error(err);
        console.warn("ERROR");
    });
});

function editNote(noteId) {
    currentNote = noteList.find((a) => a.uuid === noteId);
    editBox.style.left = `${currentNote.pageX}px`;
    editBox.style.top = `${currentNote.pageY}px`;
    editBox.style.display = "block";
    editBoxTextArea.innerHTML = currentNote.text;
    editBox.scrollIntoView({ behavior: 'smooth', block: "center" });
}

async function closeEditBox() {
    const result = await getFromStorage("noteList");
    if (result.noteList) noteList = result.noteList;

    noteList.map((a) => {
        if (a.uuid === currentNote.uuid) {
            a.text = editBoxTextArea.innerHTML;
        }
    })
    setInStorage("noteList", noteList);

    editBox.style.display = "none";
    currentNote = null;
}

async function deleteNote(uuid) {
    const result = await getFromStorage("noteList");
    if (result.noteList) noteList = result.noteList;
    const newNoteList = noteList.filter((a) => a.uuid !== uuid);
    noteList = newNoteList;
    setInStorage("noteList", newNoteList);
    document.querySelector(`.NOTE_${uuid}`)?.remove();
    editBox.style.display = "none";
    currentNote = null;
}