import { Auth } from 'aws-amplify';


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

Auth.currentAuthenticatedUser()
    .then((user) => {
        console.log(user);
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