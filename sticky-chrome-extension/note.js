const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_NOTE = 'EDIT_NOTE';

var clickPageX = 0;
var clickPageY = 0;
var noteList = [];

window.addEventListener("load", async () => {
    loadAllNotes();
});

window.addEventListener("contextmenu", (_event) => {
    clickPageX = _event.pageX;
    clickPageY = _event.pageY;
});

async function addNote() {
    const result = await getFromStorage("noteList");
    if (result.noteList) noteList = result.noteList;
    const noteId = crypto.randomUUID();
    const myUrl = window.location.hostname + window.location.pathname;
    const info = {
        url: myUrl,
        uuid: noteId,
        text: "",
        pageX: clickPageX,
        pageY: clickPageY,
    };

   
    noteList.push(info);
    window.noteTurnedOn = false;
    editNote(noteId);
    setInStorage("noteList", noteList);
}

async function loadAllNotes() {
    const result = await getFromStorage("noteList");
    if (result.noteList) noteList = result.noteList;
}