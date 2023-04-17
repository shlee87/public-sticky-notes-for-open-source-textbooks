import { Auth } from 'aws-amplify';

const urlParams = new URLSearchParams(window.location.search);
const pageUrl = urlParams.get('url');
const paragraph = urlParams.get('par');
const startOffset = urlParams.get('start');
const endOffset = urlParams.get('end');
const color = urlParams.get('color');
const xpath = urlParams.get('xpath');

console.log(xpath);

const WebText = document.getElementById("WebText");
WebText.innerHTML = paragraph;

Auth.currentAuthenticatedUser()
    .then((user) => {
        const userId = user.attributes.sub;
        // Method for calling the lambda fuction through the url
        const lambdaUrl = 'https://5a6dwifl33kakbasgv6izm3sda0gpygw.lambda-url.us-east-1.on.aws/';
        // Method for passing over variables to the lambda function
        const url = `${ lambdaUrl }/?userId=${encodeURIComponent(userId)}`;
        // call the function and get the response through the data output
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data[0].username));
    })
    // Catch any errors
    .catch((error) => console.log(error)); 