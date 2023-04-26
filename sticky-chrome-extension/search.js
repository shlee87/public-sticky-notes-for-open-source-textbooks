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
  