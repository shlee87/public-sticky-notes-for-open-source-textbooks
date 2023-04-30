import { Auth } from 'aws-amplify';
var previousHighlightEndOffset;


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
webText.innerText = paragraph;

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
    // Checks if there is a user logged in
    var user_id = "0";
    try {
        const u = Auth.currentAuthenticatedUser();
        user_id = u.attributes.sub;
    } catch (e) { };

    // Load Highlights
    const startUrl = 'https://img5s4tmbdkhrsa76t6kjj3bfa0uwyzo.lambda-url.us-east-1.on.aws';
    // Method for passing over variables to the lambda function

    const newUrl = `${startUrl}/?userId=${encodeURIComponent(user_id)}&url=${encodeURIComponent(pageUrl)}&xpath=${encodeURIComponent(xpath)}`;
    // call the function and get the response through the data output

    fetch(newUrl)
        .then(response => response.json())
        .then(highlights => {
            console.log(highlights);

            let previousEndOffset = 0;
            let highlightedText = '';
            for (const h of highlights) {
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

            webText.innerHTML = highlightedText;
        })
        .catch(error => console.error(error));


    // Load Notes
    const lambdaUrl = 'https://dzp2sptvjmcbp3hkjmi34dyhnu0hhwhn.lambda-url.us-east-1.on.aws';
    // Method for passing over variables to the lambda function

    const url = `${lambdaUrl}/?userId=${encodeURIComponent(user_id)}&url=${encodeURIComponent(pageUrl)}&xpath=${encodeURIComponent(xpath)}`;
    // call the function and get the response through the data output
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Inject notes into html page
            if (html) {
                noteArea.innerHTML = html;
            }
        })
        .catch(error => {
            console.error(error);
        });

    // Save notes on submit button click
    try {
        noteSubmit.addEventListener('click', function (event) {
            console.log("Submit Button Recognized");
            var noteText = document.getElementById("note-text");

            if (noteText) {
                Auth.currentAuthenticatedUser()
                    .then((user) => {
                        const selectedText = paragraph.substring(startOffset, endOffset);
                        const userId = user.attributes.sub;
                        const username = user.username;
                        // Method for calling the lambda fuction through the url
                        const lambdaUrl = 'https://5fsc2d65foupbkif3bwmu2ukhe0rftfq.lambda-url.us-east-1.on.aws';
                        // Method for passing over variables to the lambda function
                        const url = `${lambdaUrl}/?userId=${encodeURIComponent(userId)}&username=${encodeURIComponent(username)}&note=${encodeURIComponent(noteText.value)}&url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(selectedText)}&start=${encodeURIComponent(startOffset)}&end=${encodeURIComponent(endOffset)}&color=${encodeURIComponent(color)}&xpath=${encodeURIComponent(xpath)}`;
                        // call the function and get the response through the data output
                        fetch(url)
                            .catch(e => console.error(e));
                        noteText.value = noteText.defaultValue;
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

