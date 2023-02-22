try {
    // This is all needed to reconstruct the session
    import("./CognitoIdToken.js");
    import("./CognitoAccessToken.js");
    import("./CognitoRefreshToken.js");
    import("./CognitoUserSession.js");
    import("./CognitoUser.js");
    import("./CognitoUserPool.js");
    import { Auth } from "./aws-amplify";

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
        let userSession = new CognitoUserSession(sessionData);
        const userData = {
            Username: userSession.getIdToken().payload['cognito:username'],
            Pool: new CognitoUserPool({ UserPoolId: "us-east-2_msJcUyPZi", ClientId: "5mm44lds4fsqcao4kdnp0k68ch" })
        }

        // Make a new cognito user
        const cognitoUser = new CognitoUser(userData);
        // Attach the session to the user
        cognitoUser.setSignInUserSession(userSession);
        // Check to make sure it works
        cognitoUser.getSession(function (err, session) {
            if (session) {
                //Do whatever you want here
            } else {
                console.error("Error", err);
            }

        })
        // The session is now stored and the amplify library can access it to do
        // whatever it needs to.
    }
}
catch (e) {
    console.error(e);
}