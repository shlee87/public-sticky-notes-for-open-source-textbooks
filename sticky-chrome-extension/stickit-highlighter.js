import { Auth } from 'aws-amplify';
const highlightColor = "rgb(213, 234, 255)";

// url params
const urlParams = new URLSearchParams(window.location.search);
const pageUrl = urlParams.get('url');
const paragraph = urlParams.get('par');
const startOffset = urlParams.get('start');
const endOffset = urlParams.get('end');
const color = urlParams.get('color');
const xpath = urlParams.get('xpath');

Auth.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:71482aac-b3f0-462e-b87e-3050b8fa6743',

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_msJcUyPZi',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '6ej3v8r198u7q1nr5l6usg1fqa',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
    }
});
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

    highlightRange(range) {
        const pageUrl = window.location.href.split('#')[0];
        const xpath = this.getXPath(range.commonAncestorContainer.parentNode.closest('p'));
        console.log(range);
    const clone =
      this.highlightTemplate.cloneNode(true).content.firstElementChild;
    clone.appendChild(range.extractContents());
        range.insertNode(clone);
        Auth.currentAuthenticatedUser()
            .then((user) => {
                const selectedText = paragraph.substring(startOffset, endOffset);
                const userId = user.attributes.sub;
                // Method for calling the lambda fuction through the url
                const lambdaUrl = 'https://5fsc2d65foupbkif3bwmu2ukhe0rftfq.lambda-url.us-east-1.on.aws';
                // Method for passing over variables to the lambda function
                const url = `${lambdaUrl}/?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(selectedText)}&start=${encodeURIComponent(startOffset)}&end=${encodeURIComponent(endOffset)}&userId=${encodeURIComponent(userId)}&color=${encodeURIComponent(color)}&xpath=${encodeURIComponent(xpath)}`;
                // call the function and get the response through the data output
                fetch(url)
                    .then(response)
                    .then(data => console.log(data));
                noteText = "";
            })
            // Catch any errors
            .catch((error) => console.log(error));
    }
     

    getXPath(element) {
        var xpath = [];
        while (element && element.nodeType === Node.ELEMENT_NODE) {
            let index = 0;
            var sibling = element.previousSibling;
            while (sibling) {
                if (sibling.nodeType === Node.ELEMENT_NODE && sibling.nodeName === element.nodeName) {
                    index++;
                }
                sibling = sibling.previousSibling;
            }
            xpath.unshift(element.nodeName.toLowerCase() + '[' + (index + 1) + ']');
            element = element.parentNode;
        }
        return xpath.join('/');
    }
}

window.customElements.define("stickit-highlighter", HighlighterClass);
