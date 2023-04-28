import { Auth } from 'aws-amplify';

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
    const userId = user.attributes.sub;
 });

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".u-search");
    const searchInput = document.querySelector(".u-search-input");
    var PrivateToggle = document.getElementById("privateToggle");
  
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (PrivateToggle.checked == true){
        //use private query
      } else {
        //use public query
      }
      if (searchTerm.length === 0) {
        return;
      }
  
      try {
        const user = await Auth.currentAuthenticatedUser();
        const token = user.signInUserSession.idToken.jwtToken;
  
        const lambdaUrl = "https://uwumu5g5672s7kfcmspjpwukki0nnxez.lambda-url.us-east-1.on.aws/";
        const response = await fetch(lambdaUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ searchTerm }),
        });
  
        const data = await response.json();
        console.log("Lambda response:", data);
      } catch (error) {
        console.error("Error calling Lambda function:", error);
      }
    });
  });
  