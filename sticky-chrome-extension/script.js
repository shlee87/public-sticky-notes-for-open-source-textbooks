import Amplify from './aws-amplify';
import Auth from './@aws-amplify/auth';
import awsconfig from './aws-exports';

// Configure Amplify
Amplify.configure({
    Auth: {
        region: 'us-west-2',
        userPoolId: 'us-west-2_ABC123',
        userPoolWebClientId: '12345abcdef',
    }
});

// Render login component
const loginComponent = Amplify.UI.signIn({});
document.getElementById('login').appendChild(loginComponent);

// Handle login submission
const loginForm = document.getElementById('signInForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;
    try {
        await Auth.signIn(username, password);
        console.log('Logged in successfully');
    } catch (error) {
        console.error('Login error:', error);
    }
});
