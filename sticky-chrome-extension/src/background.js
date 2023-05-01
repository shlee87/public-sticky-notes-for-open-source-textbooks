var userId = '0';
var username = '';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'saveHighlight') {
        const { url, text, start, end, color, xpath } = request.data;
        const message = saveHighlight(url, text, start, end, color, xpath);
        sendResponse({ message: message });
    }
    else if (request.action === 'loadHighlights') {
        sendResponse({ data: userId });
    }
    else if (request.action === 'saveId') {
        const { id, name } = request.data;
        userId = id;
        username = name;
        var mes = "Success"
        sendResponse({ message: mes });
    }
});


function saveHighlight(pageUrl, text, start, end, color, xpath) {
    var result = false;
    if (userId != '0') {
        result = true;
        const lambdaUrl = 'https://db5iuvf24m5unqb7k5daoi6f5q0nefxf.lambda-url.us-east-1.on.aws';
        // Method for passing over variables to the lambda function

        const url = `${lambdaUrl}/?userId=${encodeURIComponent(userId)}&username=${encodeURIComponent(username)}&url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}&start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}&color=${encodeURIComponent(color)}&xpath=${encodeURIComponent(xpath)}`;
        // call the function and get the response through the data output

        fetch(url)
            .catch((e) => {
                result = false;
            });
    }
    return result;
}


function loadHighlights(pageUrl) {
    var array = ["Nothing"];
    if (userId != '0') {
        // Load Highlights
        const startUrl = 'https://ajwj3vmsiusioj6ss2jhhdeol40ljebp.lambda-url.us-east-1.on.aws';
        // Method for passing over variables to the lambda function

        const newUrl = `${startUrl}/?userId=${encodeURIComponent(userId)}&url=${encodeURIComponent(pageUrl)}`;
        // call the function and get the response through the data output

        array = ["Before"]
        fetch(newUrl)
            .then(response => response.json())
            .then(highlights => {
                array = ["Success"]
            })
            .catch((error) => { array = ["Error"]; });
        array = ["Skipped"]
    }
    return array;
}

