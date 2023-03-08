const highlighterElement = document.createElement("stickit-highlighter");
document.body.appendChild(highlighterElement);
const commenterElement = document.createElement("stickit-commenter");
document.body.appendChild(commenterElement);

const setMarkerPositionForHighlighter = (markerPosition) =>
  highlighterElement.setAttribute(
    "markerPosition",
    JSON.stringify(markerPosition)
  );

const setMarkerPositionForCommenter = (markerPosition) =>
  commenterElement.setAttribute(
    "markerPosition",
    JSON.stringify(markerPosition)
  );


const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    setMarkerPositionForHighlighter(getMarkerPositionForHighlighter()),
    setMarkerPositionForCommenter(getMarkerPositionForCommenter())
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    setMarkerPositionForHighlighter({ display: "none" }),
    setMarkerPositionForCommenter({ display: "none" });
  }
});

function getMarkerPositionForHighlighter() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();
  return {
    // Substract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 50,
    top: rangeBounds.top - 30,
    display: "flex",
  };
}


function getMarkerPositionForCommenter() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();
  return {
    // Substract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 10,
    top: rangeBounds.top - 30,
    display: "flex",
  };
}

