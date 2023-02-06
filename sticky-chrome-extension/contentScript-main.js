// this code will be executed before page load
(function () {
    console.log('before.js executed');
    insertHtml();
})();

function send(title, payload) {

    chrome.runtime.sendMessage({ title, payload });
}

function listen() {
    chrome.runtime.onMessage.addListener((req, sender, res) => {
        console.log("responding to render message");

        switch (req.title) {
            case "SHOW_TRANSLATION": {
                showTranslationModal(req);
                break;
            }

            case "SHOW_FORM": {
                showForm(req);
                break;
            }

            case 'HIDE_FORM': {
                hideForm();
                break;
            }
            default: {
                console.log("No a valid SpringCompanion Option");
            }
        }
    });
}

function showForm() {
    hideForm();
    document.querySelector('[note-ex-form]').classList.add('show')
}

function hideForm() {
    document.querySelector('[note-ex-form]').classList.remove('show')
}

function insertHtml() {

    const style = `
[note-ex-form] {
        position: fixed;
        z-index: 1000;
        top: 0;
        margin: 20px;
        background-color: #FFFFCC;
        visibility: hidden;
        padding: 10px;
    }

    [note-ex-form].show {
        visibility: initial;
    }

    [note-ex-form] :is(input,textarea){
        padding: 3px;
    }
   `

    const content = `
    <form note-ex-form class="flex-col" style="display:flex;flex-direction: column;gap: 10px;" onsubmit="noteExInsert()">
    <span>
        Write note here
    </span>
    <input type="text" id="title" placeholder="title"></input>
    <textarea name="note" id="" cols="30" rows="10" onkeyup="Allow()" placeholder="note..."></textarea>
    <!-- <input id="note" type="text" maxlength="500" onkeyup="Allow()"> -->
    <input type="submit" value="Save/Show" />
   

</form>`;

    const script = `
    <script type="text/javascript">
    var notes = [];
    var noteInput = document.getElementById("note");
    var messageBox = document.getElementById("display");

    function Allow() {
        if (!user.note.value.match(/[a-zA-Z]$/) && user.note.value != "") {
            user.note.value = "";
            alert("Please Enter only alphabets");
        }
    }

    function noteExInsert() {
        notes.push(noteInput.value);
        NoteExclearAndShow();
    }

    function NoteExclearAndShow() {
        noteInput.value = "";
        messageBox.innerHTML = "";
        messageBox.innerHTML += "Notes: <br/><br/>" + notes.join("<br/><br/>");
        document.querySelector(['note-ex-form']).classlist.remove('show')
    }
</script>`;

    const makeElement = (tag, innerHtml,/** @type {{}}*/attributes) => {
        /** @type {HTMLElement} */
        const element = document.createElement(tag);
        element.innerHTML = innerHtml;

        if (attributes && Object.values(attributes).length) {
            //add attributes to the element
            Object.entries(attributes).forEach(([attName, attValue]) => {
                element.setAttribute(attName, attValue)
            })
        }

        return element;
    }

    const body = document.querySelector('body')

    const formElement = makeElement('div', content, { 'notexe-new-form': '' });
    body.append(formElement)
    body.append(makeElement('style', style))
    console.log('notex-insertion complete')

}

listen()
