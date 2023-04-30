import { Amplify, Auth, API } from 'aws-amplify';

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
    const forgotForm = document.getElementById('forgot-form');
    const searchForm = document.querySelector(".u-search");
    const searchInput = document.querySelector(".u-search-input");
    var PrivateToggle = document.getElementById("privateToggle");
    var Private;

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
                    switch (error.code) {
                        case 'UserNotConfirmedException':
                            window.location.href = "/Confirm-Email.html?username=" + username;
                        default:
                            errorMessage.style.display = 'block';
                    }
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
                        window.location.href = "/Confirm-Email.html?username=" + username;
                    })
                    .catch(error => {
                        errorMessage.style.display = 'block';
                    });
            }
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
    else if (confirmForm) {
        const resendCode = document.getElementById('resend-code-button');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('username');
        resendCode.addEventListener('click', function (event) {
            event.preventDefault();
            Auth.resendSignUp(username)
                .then(() => {
                    console.log('code sent successfully');
                })
                .catch(error => {
                    console.error('error resending code:', error);
                });
        });
        confirmForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const code = document.getElementById('confirm-code-input').value
            Auth.confirmSignUp(username, code)
                .then(() => {
                    window.location.href = 'Main-Page.html';
                })
                .catch(error => {
                    console.error('Error Confirming Email:', error);
                });
        });
    }
    else if (forgotForm) {
        const resetForm = document.getElementById('reset-form');
        forgotForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username-input').value;
            Auth.forgotPassword(username)
                .then(() => {
                    forgotForm.style.display = 'none';
                    resetForm.style.display = 'block';
                })
                .catch(error => {
                    console.error('Error Sending Forgot Password Code:', error);
                });
            resetForm.addEventListener('submit', function (event) {
                event.preventDefault();
                const code = document.getElementById('code-input').value;
                const password = document.getElementById('password-input').value;
                const conPassword = document.getElementById('con-password-input').value;
                if (password != conPassword) {
                    console.log('passwords dont match');
                    errorMessage.innerText = "Passwords Dont Match";
                    errorMessage.style.display = 'block';
                }
                else {
                    Auth.forgotPasswordSubmit(username, code, password)
                        .then(() => {
                            console.log('Password is reset');
                            window.location.href = 'Login-Page.html'
                        })
                        .catch(error => {
                            console.log('Invalid Confirmation Code:', error);
                            errorMessage.innerText = "Error Reseting Password";
                            errorMessage.style.display = 'block';
                        });
                }
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

    
    if (searchForm){
        function displayResults(results) {
            const resultsContainer = document.querySelector("#sec-ce6e");
          
            if (results == "") {
                resultsContainer.innerHTML = "<p>No results found.</p>";
                return;
            }
            else {
                resultsContainer.innerHTML = results;
            }
            // results.forEach((result) => {
            //   const resultDiv = document.createElement("div");
            //   resultDiv.classList.add("search-result");
          
            //   const commentedText = document.createElement("p");
            //   commentedText.textContent = result.highlighted_text;
            //   resultDiv.appendChild(commentedText);
              
            //   const comment = document.createElement("p");
            //   comment.textContent = result.text;
            //   resultDiv.appendChild(comment);
          
            //   const uri = document.createElement("p");
            //   uri.innerHTML = `<a href="${result.page_url}" target="_blank">${result.page_url}</a>`;
            //   resultDiv.appendChild(uri);
          
            //   resultsContainer.appendChild(resultDiv);
            // });
            resultsContainer.style.display = "block";
        }
          
        searchForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const searchTerm = searchInput.value.trim();
            console.log(searchTerm);
            if (searchTerm == "") {
                const resultsContainer = document.querySelector("#sec-ce6e");
                resultsContainer.innerHTML = `
                <div class="u-clearfix u-sheet u-sheet-1">
                <h1 class="u-text u-text-custom-color-5 u-text-default u-text-1" id="HomeText"></h1><span class="u-file-icon u-icon u-text-custom-color-5 u-icon-1"><img src="images/8140096-36568aa7.png" alt=""></span>
                </div>`;
                
            }
            else{ 
                if (PrivateToggle.checked == true){
                    Private = "true";
                  } else {
                    Private = "false";
                  }
              
                try {
                  const user = await Auth.currentAuthenticatedUser();
                  const token = user.signInUserSession.idToken.jwtToken;
                  const apiGatewayUrl = "https://ge98klsa8e.execute-api.us-east-1.amazonaws.com/stickit_stage/search";
                  const userId = user.attributes.sub;
            
            //      const lambdaUrl = "https://uwumu5g5672s7kfcmspjpwukki0nnxez.lambda-url.us-east-1.on.aws/";
                  const response = await fetch(apiGatewayUrl, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: token,
                    },
                    body: JSON.stringify({ keyword: searchTerm, isPrivate: Private, user_id: userId}),
                  });
                //   console.log("response",response)
            
            
                  response.json().then((data) => {
                 //   console.log("Parsed Lambda response:", data);
                   // console.log("Search term:", searchTerm);
                    console.log(data);
                    console.log("Parsed API Gateway response:", data.body);
                    console.log("Lambda response:", data);
                    console.log("token",token);
                    displayResults(data.body);
                  });
                } catch (error) {
                  console.error("Error calling API Gateway:", error);
                }
            };

            
          });
    }
});

