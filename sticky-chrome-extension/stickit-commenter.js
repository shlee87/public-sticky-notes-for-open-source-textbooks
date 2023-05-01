const commentColor = "rgb(255, 204, 128)";
//const commentColor = "rgb(255, 204, 0)";

var url;

const commentTemplate = `
  <template id="commentTemplate">
    <span class="comment" style="background-color: ${commentColor}; display: inline"></span>
  </template>

  <button id="commentingButton">
  <svg class="text-marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M443.26 0H68.74C30.86 0 0 30.86 0 68.74v374.52C0 481.14 30.86 512 68.74 512h374.52c37.88 0 68.74-30.86 68.74-68.74V68.74C512 30.86 481.14 0 443.26 0zM256 464.74c-15.05 0-29.09-3.3-41.65-8.8L103.48 386.52c-22.69-11.71-27.32-38.53-10.07-55.78l65.49-65.49c9.95-9.95 26.11-9.95 36.06 0l57.69 57.69c9.95 9.95 26.11 9.95 36.06 0l80.1-80.1c9.95-9.95 26.11-9.95 36.06 0l57.69 57.69c9.95 9.95 9.95 26.11 0 36.06l-80.1 80.1c-13.61 13.61-35.69 13.61-49.3 0l-51.77-51.77-28.4 28.4 64.8 64.8c12.56 5.5 26.6 8.8 41.65 8.8 33.28 0 60.26-26.98 60.26-60.26S289.28 464.74 256 464.74z"/>
</svg>
  </button>
`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #commentingButton {
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
    fill: ${commentColor};
  }
`;

class CommenterClass extends HTMLElement {
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

    get commentTemplate() {
        return this.shadowRoot.getElementById("commentTemplate");
    }

    static get observedAttributes() {
        return ["markerPosition"];
    }

    render() {
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = styled({});
        this.shadowRoot.appendChild(style);
        this.shadowRoot.innerHTML += commentTemplate;
        this.shadowRoot
            .getElementById("commentingButton")
            .addEventListener("click", () => {
                this.commentSelection();
            }
            );
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "markerPosition") {
            this.styleElement.textContent = styled(this.markerPosition);
        }
    }

    commentSelection() {
        var userSelection = window.getSelection();
        for (let i = 0; i < userSelection.rangeCount; i++) {
            this.commentRange(userSelection.getRangeAt(i));
        }
        window.getSelection().empty();
    }

    commentRange(range) {
        const pageUrl = window.location.href.split('#')[0];
        try {
            const paragraph = range.commonAncestorContainer.parentNode.closest('p');
            const paragraphText = paragraph.textContent;
            const selectedText = range.toString();
            const startOffset = paragraphText.indexOf(selectedText);
            const endOffset = startOffset + selectedText.length;
            const xpath = this.getXPath(paragraph);
            const noteUrl = `${chrome.runtime.getURL('AddNote.html')}?url=${encodeURIComponent(pageUrl)}&par=${encodeURIComponent(paragraphText)}&start=${encodeURIComponent(startOffset)}&end=${encodeURIComponent(endOffset)}&color=${encodeURIComponent(commentColor)}&xpath=${encodeURIComponent(xpath)}`;
            window.open(noteUrl, '_blank');
            const clone = this.commentTemplate.cloneNode(true).content.firstElementChild;
            clone.appendChild(range.extractContents());
            range.insertNode(clone);
        } catch (e) { }
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

window.customElements.define("stickit-commenter", CommenterClass);

