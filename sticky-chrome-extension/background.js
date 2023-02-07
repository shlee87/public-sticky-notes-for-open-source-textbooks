// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);
chrome.runtime.onInstalled.addListener(async (_reason) => {
    console.log("Extension Notes");

    // remove existing menu items
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({
        title: 'Add Note',
        id: 'add-note',
    });

    // handle context menus events
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        switch (info.menuItemId) {
            case 'add-note':
                addNote(tab);
                break;
            default: break;
        }
    });
}); 
    const SUCCESS = "SUCCESS";
    const ERROR = "ERROR";
    const ADD_NOTE = "ADD_Note";

    // set value in storage
    function setInStorage(key, value) {
        const data = {};
        data[key] = value;
        chrome.storage.sync.set(data, (result) => {
            // console.log(key, "set", value, ":", result);
        });
    }
    // get value from storage
    async function getFromStorage(key) {
        const result = await chrome.storage.sync.get([key]);
        return result;
    }
    // send message to add annotation
    function addNote(tab) {
        chrome.tabs.sendMessage(tab.id, {
            task: ADD_NOTE,
        }, (response) => {
            // update title of context menu accordingly
            // if (response.res == SUCCESS) {
            //     chrome.contextMenus.update("add-note", { title: "cancel note" });
            // } else {
            //     chrome.contextMenus.update("add-note", { title: "Add note" });
            // }
        });
    }

    async function execScript() {
        const tabId = await getTabId();
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['execute.js']
        })
    }

    async function getTabId() {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        return (tabs.length > 0) ? tabs[0].id : null;
    }
