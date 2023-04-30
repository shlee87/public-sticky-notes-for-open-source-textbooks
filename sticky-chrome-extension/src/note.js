import { Auth } from 'aws-amplify';

// url params
const urlParams = new URLSearchParams(window.location.search);
const pageUrl = urlParams.get('url');
const paragraph = urlParams.get('par');
const startOffset = urlParams.get('start');
const endOffset = urlParams.get('end');
const color = urlParams.get('color');
const xpath = urlParams.get('xpath');

// Note Page Containers
const webText = document.getElementById("WebText");
const noteArea = document.getElementById("note-area");
const noteSubmit = document.getElementById("noteSubmit");
const errorText = document.getElementById("error-text");
webText.innerHTML = paragraph;

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

function displayErrorText(message) {
    errorText.innerHTML = message;
    errorText.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    try {
        noteSubmit.addEventListener('click', function (event) {
            console.log("Submit Button Recognized");
            event.preventDefault();
            const noteText = document.getElementById("note-text").value;

            if (noteText) {
                Auth.currentAuthenticatedUser()
                    .then((user) => {
                        const selectedText = paragraph.substring(startOffset, endOffset);
                        const userId = user.attributes.sub;
                        const username = user.username;
                        // Method for calling the lambda fuction through the url
                        const lambdaUrl = 'https://5fsc2d65foupbkif3bwmu2ukhe0rftfq.lambda-url.us-east-1.on.aws';
                        // Method for passing over variables to the lambda function
                        const url = `${lambdaUrl}/?userId=${encodeURIComponent(userId)}&username=${encodeURIComponent(username)}&note=${encodeURIComponent(noteText)}&url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(selectedText)}&start=${encodeURIComponent(startOffset)}&end=${encodeURIComponent(endOffset)}&color=${encodeURIComponent(color)}&xpath=${encodeURIComponent(xpath)}`;
                        // call the function and get the response through the data output
                        fetch(url)
                            .then(response)
                            .then(data => console.log(data));
                        noteText = "";
                    })
                    // Catch any errors
                    .catch((error) => {
                        displayErrorText("Please ensure that you are logged in to use this feature.");
                        console.log(error);
                    });
            } else { displayErrorText("Please enter a note in the text box.") }
        });
    } catch (e) {
        console.log(e);
    };
});

