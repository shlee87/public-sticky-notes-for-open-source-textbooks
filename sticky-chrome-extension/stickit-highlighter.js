const highlightColor = "rgb(255, 242, 153)";

const highlightTemplate = `
  <template id="highlightTemplate">
    <span class="highlight" style="background-color: ${highlightColor}; display: inline"></span>
  </template>

  <button id="highlightingButton">
    <svg class="text-marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"></path></svg>
  </button>
`;

const highlightStyled = ({ display = "none", left = 0, top = 0 }) => `
  #highlightingButton {
    align-items: center;
    background-color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: ${display};
    justify-content: center;
    left: ${left}px;
    padding: 5px 10px;
    position: fixed;
    top: ${top}px;
    width: 40px;
    z-index: 9999;
  }
  .text-marker {
    fill: white;
  }
  .text-marker:hover {
    fill: ${highlightColor};
  }
`;

class HighlighterClass extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get markerPosition() {
        return JSON.parse(this.getAttribute("markerPosition") || "{}");
    }

    get styleElement() {
        return this.shadowRoot.querySelector("style");
    }

    get highlightTemplate() {
        return this.shadowRoot.getElementById("highlightTemplate");
    }

    static get observedAttributes() {
        return ["markerPosition"];
    }

    render() {
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = highlightStyled({});
        this.shadowRoot.appendChild(style);
        this.shadowRoot.innerHTML += highlightTemplate;
        this.shadowRoot
            .getElementById("highlightingButton")
            .addEventListener("click", () => this.highlightSelection());
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "markerPosition") {
            this.styleElement.textContent = highlightStyled(this.markerPosition);
        }
    }

    highlightSelection() {
        var userSelection = window.getSelection();
        for (let i = 0; i < userSelection.rangeCount; i++) {
            this.highlightRange(userSelection.getRangeAt(i));
        }
        window.getSelection().empty();
    }

    async highlightRange(range) {
        const pageUrl = window.location.href.split('#')[0];
        try {
            const paragraph = range.commonAncestorContainer.parentNode.closest('p');
            const paragraphText = paragraph.textContent;
            const selectedText = range.toString();
            const startOffset = paragraphText.indexOf(selectedText);
            const endOffset = startOffset + selectedText.length;
            const xpath = this.getXPath(paragraph);

            if (paragraph) {
                const result = await new Promise((resolve) => {
                    chrome.runtime.sendMessage({
                        action: 'saveHighlight',
                        data: {
                            url: pageUrl,
                            text: selectedText,
                            start: startOffset,
                            end: endOffset,
                            color: highlightColor,
                            xpath: xpath
                        }
                    }, function (response) {
                        resolve(response.message);
                    });
                });

                if (result) {
                    const clone = this.highlightTemplate.cloneNode(true).content.firstElementChild;
                    clone.appendChild(range.extractContents());
                    range.insertNode(clone);
                }
            }
        } catch (e) { };
    }

    getXPath(elm) {
        var allNodes = document.getElementsByTagName('*');
        for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
            if (elm.hasAttribute('id')) {
                var uniqueIdCount = 0;
                for (var n = 0; n < allNodes.length; n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                };
                if (uniqueIdCount == 1) {
                    segs.unshift('id("' + elm.getAttribute('id') + '")');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else if (elm.hasAttribute('class')) {
                segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
            } else {
                for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName == elm.localName) i++;
                };
                segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
            };
        };
        return segs.length ? '/' + segs.join('/') : null;
    }
}

function lookupElementByXPath(path) {
    var evaluator = new XPathEvaluator();
    var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}

async function loadHighlights() {
    const pageUrl = window.location.href.split('#')[0];
    let highlights;
    const response = await new Promise((resolve) => {
        chrome.runtime.sendMessage({ action: 'loadHighlights'}, (response) => {
            resolve(response);
        });
    });
    const userId = response.data;
    console.log(userId);

    if (userId != '0') {
        // Load Highlights
        const startUrl = 'https://ajwj3vmsiusioj6ss2jhhdeol40ljebp.lambda-url.us-east-1.on.aws';
        // Method for passing over variables to the lambda function

        const newUrl = `${startUrl}/?userId=${encodeURIComponent(userId)}&url=${encodeURIComponent(pageUrl)}`;
        // call the function and get the response through the data output

        fetch(newUrl)
            .then(response => response.json())
            .then(highlights => {
                console.log(highlights);

                if (highlights.length === 0) {
                    return;
                }

                // Create dictionary to store highlights by xpath
                const highlightDict = {}

                highlights.forEach(highlight => {
                    if (highlightDict[highlight.xpath]) {
                        highlightDict[highlight.xpath].push(highlight)
                    } else {
                        highlightDict[highlight.xpath] = [highlight]
                    }
                })

                Object.keys(highlightDict).forEach(key => {
                    highlightDict[key].sort((a, b) => a.end_offset - b.end_offset)
                })

                console.log(highlightDict);

                Object.keys(highlightDict).forEach(function (key) {
                    var xpath = key;
                    var highlight_data = highlightDict[key];
                    var element = lookupElementByXPath(xpath);
                    console.log(element);
                    if (element) {
                        let paragraph = element.textContent;
                        let previousEndOffset = 0;
                        let highlightedText = '';
                        for (const h of highlight_data) {
                            const startOffset = h.start_offset;
                            const endOffset = h.end_offset;
                            const color = h.color;

                            // Add unhighlighted text between previousEndOffset and startOffset
                            highlightedText += paragraph.substring(previousEndOffset, startOffset);

                            // Add highlighted text between startOffset and endOffset
                            highlightedText += `<span style="background-color: ${color};">${paragraph.substring(startOffset, endOffset)}</span>`;

                            // Update previousEndOffset
                            previousEndOffset = endOffset;
                        }

                        // Add unhighlighted text after the last highlight
                        highlightedText += paragraph.substring(previousEndOffset);
                        element.innerHTML = highlightedText;

                    } else {
                        console.log("Could not find element for xpath: " + xpath);
                    }
                });


            })
            .catch(error => console.log(error));
    }
}


window.customElements.define("stickit-highlighter", HighlighterClass);
loadHighlights();
