import { Amplify, Auth } from 'aws-amplify';

// Configure Amplify with your Auth settings
Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:71482aac-b3f0-462e-b87e-3050b8fa6743',

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_msJcUyPZi',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '5mm44lds4fsqcao4kdnp0k68ch',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
    }
});

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


// Define the sign-in configuration options
const signInConfig = {
    header: 'Sign In',
    signUpUrl: 'https://stickit.auth.us-east-2.amazoncognito.com/signup?client_id=5mm44lds4fsqcao4kdnp0k68ch&response_type=code&scope=email+profile+openid&redirect_uri=http://localhost/',
    forgotPasswordUrl: 'https://stickit.auth.us-east-2.amazoncognito.com/forgotPassword?client_id=5mm44lds4fsqcao4kdnp0k68ch&response_type=code&scope=email+profile+openid&redirect_uri=http://localhost/',
    signInSuccessUrl: '/Main-Page.html',
};


// Render the authentication UI
document.addEventListener('DOMContentLoaded', function () {
    Auth.configure({
        authenticationFlowType: 'USER_SRP_AUTH'
    });

    const errorMessage = document.getElementById('error-message');
    const logoutButton = document.getElementById('logout-button');
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    const confirmForm = document.getElementById('confirm-email-form');
    if (signInForm) {
        signInForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username-input').value;
            const password = document.getElementById('password-input').value;
            Auth.signIn(username, password)
                .then(user => {
                    console.log('Successfully signed in:', user);
                    window.location.href = signInConfig.signInSuccessUrl;
                })
                .catch(error => {
                    errorMessage.style.display = 'block';
                });
        });
    }
    else if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username-input').value;
            const email = document.getElementById('email-input').value;
            const password = document.getElementById('password-input').value;
            const con_password = document.getElementById('con-password-input').value;

            if (password !== con_password) {
                errorMessage.style.display = 'block';
            }
            else {
                Auth.signUp({ username, password, attributes: { email }, autoSignIn: { enabled: true } })
                    .then(user => {
                        console.log('Successfully signed up:', user);
                        window.location.href = '/Confirm-Email.html';
                    })
                    .catch(error => {
                        errorMessage.style.display = 'block';
                    });
            }
        });
    }
    // Confirm Form If statement (Will probably change to a function to call inside signup form statement)
    // Need to make Cleaner
    else if (confirmForm) {
        confirmForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const confirmCode = document.getElementById('confirm-code-input').value;

        });
    }
    else if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            Auth.signOut()
                .then(() => {
                    window.location.href = '/Login-Page.html';
                })
                .catch(error => {
                    console.error('Error signing out:', error);
                });
        });
    }
    else {
        Auth.currentAuthenticatedUser()
            .then(user => {})
            .catch(error => {
                window.location.href = '/Login-Page.html';
            });
    }
});
