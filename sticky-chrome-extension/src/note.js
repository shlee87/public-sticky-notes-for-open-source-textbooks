const urlParams = new URLSearchParams(window.location.search);
const pageUrl = urlParams.get('url');
console.log(pageUrl);

const iframe = document.getElementById("website");
iframe.src = pageUrl;
