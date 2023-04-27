// add event listener to search form when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the search form and input field
    const searchForm = document.querySelector(".u-search");
    const searchInput = document.querySelector(".u-search-input");
  
    // Add event listener to search form
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Trim the search input value and store it in searchTerm.
      const searchTerm = searchInput.value.trim();
      if (searchTerm.length === 0) {
        return;
      }
  
      try {
        // Get the current authenticated user
        const user = await Auth.currentAuthenticatedUser();
        // Extract the JWT token from the Cognito user object.
        const token = user.signInUserSession.idToken.jwtToken;
        
        // Define the AWS Lambda function URL
        const lambdaUrl = "https://uwumu5g5672s7kfcmspjpwukki0nnxez.lambda-url.us-east-1.on.aws/";
        // Send a POST request to the Lambda function
        const response = await fetch(lambdaUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ searchTerm }),
        });
        
        // Parse the JSON response form the Lambda function
        const data = await response.json();
        // Log the Lambda function response to the console
        console.log("Lambda response:", data);
      } catch (error) {
        // Log errors to the console when they occur.
        console.error("Error calling Lambda function:", error);
      }
    });
  });
  