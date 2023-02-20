chrome.action.onClicked.addListener(execScript);

async function execScript() {
  const tabId = await getTabId();
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    files: ['execute.js']
  })
}

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}


// This is all needed to reconstruct the session
import {
  CognitoIdToken, 
  CognitoAccessToken, 
  CognitoRefreshToken, 
  CognitoUserSession,
  CognitoUser,
  CognitoUserPool
} from "amazon-cognito-identity-js";
import {Auth} from "aws-amplify";

//Listen for incoming external messages.
chrome.runtime.onMessageExternal.addListener(
async function (request, sender, sendResponse) {
  if (request.session) {
    authenticateUser(request.session);;
  } else {
    console.log(request);
  }
  sendResponse("OK")
});

//Re-build the session and authenticate the user
export const authenticateUser = async (session) => {
  let idToken = new CognitoIdToken({
    IdToken: session.idToken.jwtToken
  });
  let accessToken = new CognitoAccessToken({
      AccessToken: session.accessToken.jwtToken
  });
  let refreshToken = new CognitoRefreshToken({
      RefreshToken: session.refreshToken.token
  });
  let clockDrift = session.clockDrift;
  const sessionData = {
    IdToken: idToken,
    AccessToken: accessToken,
    RefreshToken: refreshToken,
    ClockDrift: clockDrift
  }
  // Create the session
  let userSession  = new CognitoUserSession(sessionData);
  const userData = {
    Username: userSession.getIdToken().payload['cognito:username'],
    Pool: new CognitoUserPool({UserPoolId: "us-east-2_msJcUyPZi", ClientId: "5mm44lds4fsqcao4kdnp0k68ch"})
  }
  
  // Make a new cognito user
  const cognitoUser = new CognitoUser(userData);
  // Attach the session to the user
  cognitoUser.setSignInUserSession(userSession);
  // Check to make sure it works
  cognitoUser.getSession(function(err, session) {
    if(session){
      //Do whatever you want here
    } else {
      console.error("Error", err);
    }
    
  })
  // The session is now stored and the amplify library can access it to do
  // whatever it needs to.
}