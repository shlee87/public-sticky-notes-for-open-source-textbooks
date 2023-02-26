import { Amplify, Auth } from 'aws-amplify';

// Configure Amplify with your Auth settings
Amplify.configure({
    Auth: {
        region: 'us-east-2',
        userPoolId: 'us-east-2_msJcUyPZi',
        userPoolWebClientId: '5mm44lds4fsqcao4kdnp0k68ch',
    },
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

    const signInForm = document.getElementById('sign-in-form');
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
                    console.error('Error signing in:', error);
                });
        });
    } else {
        console.error("Element not found: sign-in-form");
    }
});
