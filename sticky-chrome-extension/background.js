// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);

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

// console.log(chrome)
// helpers(chrome);
chrome.contextMenus.onClicked.addListener((onClickData, tabInfo) => {
  switch (onClickData.menuItemId) {
    case 'show_note_ex_form': {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("send message show_note_ex_form");
        chrome.tabs.sendMessage(tabs[0].id, { title: "SHOW_FORM", payload: null });
      });
      break;
    }
    case "history_context": {
      console.log("history listener");
      historyContextClickHandler(onClickData, tabInfo);

      break;
    }
    case "clear_context": {
      clearHistory();
    }
  }
});

chrome.runtime.onMessage.addListener((req, sender, res) => {
  //update context menu with selection payload
  if (req.title == "TEXT_SELECTED") {
    console.log("responding to text_selected msg");
    chrome.contextMenus.update("show_note_ex_form", { title: `Translate: ${req.payload}`, onclick: translateContextClickHandler });
  }
});


chrome.runtime.onInstalled.addListener(async function (tab, statusInfo, response) {
  //create our context menus
  _contexts = [
    { id: "show_note_ex_form", title: "Create Notes", contexts: ["all"] },
    { id: "history_context", title: "See notes", contexts: ["all"] },
    { id: "clear_context", title: "Clear history", contexts: ["all"] },
  ];

  _contexts.forEach((ctx) => {
    chrome.contextMenus.create(ctx, () => {
      console.log("ctx created", ctx);
    });
  });

  // updateHistoryContext();
});

function helpers(chrome) {

  const listen = (chrome) => {

    chrome.runtime.onMessage.addListener((req, sender, res) => {
      //update context menu with selection payload
      if (req.title == "TEXT_SELECTED") {
        console.log("responding to text_selected msg");
        chrome.contextMenus.update("show_note_ex_form", { title: `Translate: ${req.payload}`, onclick: translateContextClickHandler });
      }
    });
  }

  const setupContextEventListener = (chrome) => {

    // chrome.contextMenus.onClicked.addListener((onClickData, tabInfo) => {
    //   switch (onClickData.menuItemId) {
    //     case "history_context": {
    //       console.log("history listener");
    //       historyContextClickHandler(onClickData, tabInfo);

    //       break;
    //     }
    //     case "clear_context": {
    //       clearHistory();
    //     }
    //   }
    // });
  }



  const populateContextMenusAndHandleEvents = (chrome) => {

    chrome.runtime.onInstalled.addListener(async function (tab, statusInfo, response) {
      //create our context menus
      _contexts = [
        { id: "show_note_ex_form", title: "Create Notes", contexts: ["all"] },
        { id: "history_context", title: "See notes", contexts: ["all"] },
        { id: "clear_context", title: "Clear history", contexts: ["all"] },
      ];

      _contexts.forEach((ctx) => {
        chrome.contextMenus.create(ctx, () => {
          console.log("ctx created", ctx);
        });
      });

      // updateHistoryContext();
    });

    setupContextEventListener();
  }






  const init = (chrome) => {
    listen(chrome);
    populateContextMenusAndHandleEvents(chrome);
  }

  init();


  function translateContextClickHandler(onClickData, tabInfo) {
    translateWord(onClickData.selectionText ?? "");
  }


  async function historyContextClickHandler(onClickData, tabInfo) {
    chrome.storage.sync.get(["historic_tranlations"], (storage) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("send message historic_tranlations", storage.historic_tranlations);
        chrome.tabs.sendMessage(tabs[0].id, { title: "SHOW_HISTORY", payload: storage.historic_tranlations });
      });
    });
  }


  function saveTranslation(query, result) {
    chrome.storage.sync.get(["historic_tranlations"], ({ historic_tranlations = {} }) => {
      // storage.historic_tranlations = storage.historic_tranlations ?? {};
      historic_tranlations[query] = { input: query, output: result };
      chrome.storage.sync.set({ historic_tranlations }, () => {
        console.log("saved");
        // updateHistoryContext();
      });
    });
  }

  async function getHistoryTranslations() {
    let { historic_tranlations } = await chrome.storage.sync.get(["historic_tranlations"]);
    return historic_tranlations;
  }

  function clearHistory() {
    console.log("clearing history");
    chrome.storage.sync.set({ historic_tranlations: {} }, () => {
      // updateHistoryContext();
    });
  }

  function updateHistoryContext() {
    chrome.storage.sync.get(["historic_tranlations"], ({ historic_tranlations }) => {
      chrome.contextMenus.update("history_context", { title: `Translation History ${Object.values(historic_tranlations).length}`, onclick: historyContextClickHandler });
    });
  }

}