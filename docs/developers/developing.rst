How to install StickIT
=====================

This section documents how to setup a development environment for StickIT.

Installing StickIT on a local machine
-------------------------------------

Prerequisites
#############

You will need:

* `git <https://git-scm.com/>`_
* `Node.js <https://nodejs.org/en/>`_ v6.3+
* `Amazon Web Service Account <https://aws.amazon.com>`_ 

Building
########

To build StickIT for development:

.. code-block:: sh

   git clone 'https://github.com/shlee87/public-sticky-notes-for-open-source-textbooks.git'
   cd public-sticky-notes-for-open-source-textbooks
   npm run build

You now have a development built. 





.. you'll need a local copy of either the Hypothesis Chrome extension or
.. h. Follow either :ref:`running-from-browser-ext` or
.. :ref:`running-from-h` below.
.. If you're only interested in making changes to the client (and not to h)
.. then running the client from the browser extension is easiest.


.. .. _running-from-browser-ext:

Running the Chrome extension
---------------------------------------------


To run your development client in
a browser follow these steps.

#. open a chrome browser.
#. go to chrome://extensions
#. click on "Load unpacked"
#. select the build folder in the public-sticky-notes-for-open-source-textbooks folder
#. click on the extension icon on the top right of the browser



StickIT Architecture
====================

Browser extension (Chrome extension): The front-end of the application, which allows users to annotate web content while browsing. It should be able to capture user annotations, such as highlights, comments, or tags, and send them to the back-end for storage and processing.

API Gateway: Acts as a "front door" for the back-end services, allowing the browser extension to communicate with the back-end securely and efficiently. API Gateway can be used to define RESTful APIs, manage access control, and handle request/response processing.

AWS Lambda functions: Serverless functions that handle various tasks, such as processing user annotations, managing user accounts, and retrieving annotations from the database. Lambda functions can be written in multiple languages (e.g., Python, Node.js) and are triggered by events, such as API Gateway requests.

AWS RDS: A managed relational database service that stores user data, including account information and annotations. RDS provides automatic backups, scaling, and maintenance, making it a suitable choice for this architecture. You could use a database engine like PostgreSQL or MySQL, depending on your preference and requirements.

AWS S3 (Optional): A storage service that can be used to store static assets like images or documents, if needed. For example, if the extension allows users to upload images as part of their annotations, those images could be stored in an S3 bucket.

AWS Cognito: A fully managed user authentication and authorization service that integrates seamlessly with other AWS services. Cognito handles user registration, login, and access control, allowing you to create secure and scalable applications. The Chrome extension communicates with Cognito for user authentication, and the authenticated user tokens are used to authorize requests to the back-end services.

Here's a summary of the components and their interactions:

The user interacts with the Chrome extension to create annotations.
The extension communicates with AWS Cognito for user authentication and registration.
The authenticated user tokens are used to authorize requests to the API Gateway.
The extension sends annotation data to the API Gateway.
API Gateway triggers the appropriate AWS Lambda function(s) to process the data.
Lambda functions interact with the RDS database to store or retrieve annotation data.
(Optional) Lambda functions store or retrieve static assets from S3, if needed.


Folders & files
====================
.. This sections explain how the folders and files are organized in StickIT.


.. Folders
.. ---------------------------------------------

.. public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension
.. #####################################################################
.. this is a folder that has all files for the chrome extension.

.. public-sticky-notes-for-open-source-textbooks/docs
.. ##################################################
.. This folder houses all the files related to code documentation.

.. public-sticky-notes-for-open-source-textbooks/lambda
.. #####################################################
.. This folder contains function files for AWS lambda.



.. feature-related files
.. ---------------------------------------------

public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/manifest.json
-----------------------------------------------------------------------------------
The manifest.json file is a configuration file for a Chrome extension. It provides important information about the extension, such as its name, version, and permissions. It also specifies how the extension should behave and interact with web pages. The manifest.json file you provided can be broken down into the following sections:


Basic Information
#################

This section contains basic metadata about the extension, such as its name, description, version, and manifest version:

.. code-block:: sh

   {
  "name": "StickIT",
  "description": "Sticky Notes On Open Source Textbooks",
  "version": "0.0.1",
  "manifest_version": 3
  }



Web Accessible Resources
########################

This section lists the resources that can be accessed by content scripts or web pages. It specifies the content security policy, resources, and URL patterns that the extension can access:

.. code-block:: sh

   "web_accessible_resources": [
    {
      "content_security_policy": {
        "extension_pages": "script-src 'self' 'unsafe-inline' 'chrome-extension://%chrome_extension_id%/*'; object-src 'self'"
      },
      "resources": [
        "dist/note.js",
        "AddNote.html",
        "aws-amplify/**",
        "@aws-amplify/auth/**",
        "*.html",
        "dist/highlight.js"
      ],
      "matches": [
        "<all_urls>"
      ]
    }
   ]

Permissions
###########

This section lists the permissions the extension requires, such as the ability to access the active tab, tabs, and scripting:

.. code-block:: sh

   "permissions": [
    "activeTab",
    "tabs",
    "scripting"
   ]

Action
######

This section defines the default properties for the extension's action, such as the icon, title, and popup HTML file:

.. code-block:: sh

   "action": {
    "default_title": "execute.js",
    "default_icon": "icons/Picture2.png",
    "default_popup": "Main-Page.html"
   }


Content Scripts
###############

This section lists the content scripts that the extension injects into web pages. It specifies when the scripts should run and the URL patterns they should match.

.. code-block:: sh

   "content_scripts": [
    {
      "run_at": "document_start",
      "js": [
        "before.js"
      ],
      "matches": [
        "https://*/*",
        "http://*/*"
      ]
    },
    {
      "run_at": "document_idle",
      "js": [
        "after.js",
        "node_modules/@webcomponents/custom-elements/custom-elements.min.js",
        "stickit-highlighter.js",
        "stickit-commenter.js",
        "content.js"
      ],
      "matches": [
        "https://openstax.org/*"
      ]
    }
   ]


Background
##########

This section specifies the background service worker and its type.

.. code-block:: sh

   "background": {
    "service_worker": "dist/background.js",
    "type": "module"
   }




.. public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/login.js
.. ------------------------------------------------------------------------------
Sign-in
-------

Sign-in feature has been implemented on login.js.
public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/src/login.js

Sign-in form event listener
###########################

The code first checks if the sign-in form exists on the page. If it does, it adds a submit event listener to the form. This event listener will be triggered when the user clicks the submit button or presses enter while the form is in focus.

.. code-block:: sh

   if (signInForm) {
    signInForm.addEventListener('submit', function (event) {
        // ...
    });
   }


Prevent default form submission
###############################

Inside the event listener, the event.preventDefault() function is called to prevent the default form submission behavior, which would cause the page to reload.

.. code-block:: sh

   event.preventDefault();


Get user input
##############

The code retrieves the input values provided by the user for their username and password.

.. code-block:: sh

   const username = document.getElementById('username-input').value;
   const password = document.getElementById('password-input').value;



Call Auth.signIn
################

The Auth.signIn function from AWS Amplify is called with the user's inputted username and password. This function will attempt to authenticate the user against the Amazon Cognito User Pool.

.. code-block:: sh

   Auth.signIn(username, password)
    .then(user => {
        // ...
    })
    .catch(error => {
        // ...
    });





Handle successful sign-in
#########################

If the user is successfully signed in, the then block is executed. In this case, it logs the user object to the console and redirects the user to the URL specified in signInConfig.signInSuccessUrl.

.. code-block:: sh

   .then(user => {
    console.log('Successfully signed in:', user);
    window.location.href = signInConfig.signInSuccessUrl;
   })


Handle sign-in errors
#####################

If there is an error during the sign-in process, the catch block is executed. The code checks the error code, and if it is a UserNotConfirmedException, it redirects the user to the confirm email page. For any other error, it displays an error message on the page.

.. code-block:: sh

   .catch(error => {
    switch (error.code) {
        case 'UserNotConfirmedException':
            window.location.href = "/Confirm-Email.html?username=" + username;
        default:
            errorMessage.style.display = 'block';
    }
   });

Sign-up
-------

Sign-up feature has been implemented on login.js.
public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/login.js


Accessing the sign-up form
###########################

The code first checks if the current page contains a sign-up form by looking for an element with the ID sign-up-form. If the form is found, an event listener is attached to it.

.. code-block:: sh

   else if (signUpForm) {
    signUpForm.addEventListener('submit', function (event) {
        // ...
    });
   }


Preventing form submission
###########################

Inside the event listener, the event.preventDefault() method is called to prevent the form from submitting and refreshing the page, allowing the JavaScript code to handle the sign-up process.

.. code-block:: sh

   event.preventDefault();


Retrieving user input
#####################

The values entered by the user in the form fields are retrieved by accessing the value property of the input elements. The username, email, password, and confirm password fields are read and stored in variables.

.. code-block:: sh

   const username = document.getElementById('username-input').value;
   const email = document.getElementById('email-input').value;
   const password = document.getElementById('password-input').value;
   const con_password = document.getElementById('con-password-input').value;


Checking password match
#######################

A conditional statement checks if the password and confirm password fields match. If they don't, an error message is displayed to the user.

.. code-block:: sh

   if (password !== con_password) {
    errorMessage.style.display = 'block';
   }


Signing up the user
###################

If the passwords match, the Auth.signUp() method from the Amplify library is called to create a new user account. The provided username, password, and email are passed as arguments. The autoSignIn option is enabled to automatically sign the user in after a successful sign-up.

.. code-block:: sh

   else {
    Auth.signUp({ username, password, attributes: { email }, autoSignIn: { enabled: true } })
        .then(user => {
            // ...
        })
        .catch(error => {
            // ...
        });
   }


Handling successful sign-up
###########################

If the sign-up is successful, the user is redirected to the confirm email page. The username is passed as a query parameter in the URL.

.. code-block:: sh

   .then(user => {
    console.log('Successfully signed up:', user);
    window.location.href = "/Confirm-Email.html?username=" + username;
   })

Handling sign-up errors
#######################

If there's an error during sign-up, the error message is displayed to the user.

.. code-block:: sh

   .catch(error => {
    errorMessage.style.display = 'block';
   });




Search
------
Search feature has been implemented on login.js.
public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/src/login.js.


Accessing the search form
#########################
The code checks if the current page contains a search form by looking for an element with the class u-search. If the form is found, an event listener is attached to it.

.. code-block:: sh

   if (searchForm) {
    searchForm.addEventListener('submit', async (event) => {
        // ...
    });
}


Preventing form submission:
##########################
Inside the event listener, the event.preventDefault() method is called to prevent the form from submitting and refreshing the page, allowing the JavaScript code to handle the search process.


.. code-block:: sh

   event.preventDefault();


Retrieving search term
######################
The value entered by the user in the search input field is retrieved by accessing the value property of the input element and trimming any leading or trailing whitespace.

.. code-block:: sh

   const searchTerm = searchInput.value.trim();



Checking if the search term is empty
####################################
A conditional statement checks if the search term is empty. If it is, the results container is reset to display the default content.

.. code-block:: sh

   if (searchTerm == "") {
    // Reset results container to display default content
   }



Determining the privacy setting
###############################
The code checks the state of the PrivateToggle checkbox. If it's checked, the search will be performed only for private comments. Otherwise, the search will include public comments.

.. code-block:: sh

   if (PrivateToggle.checked == true) {
    Private = "true";
   } else {
    Private = "false";
   }



Making a POST request to the API Gateway
########################################
A POST request is made to the API Gateway endpoint with the necessary headers and request body. The request body includes the search term, privacy setting, and user ID.

.. code-block:: sh

   const response = await fetch(apiGatewayUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: token,
    },
    body: JSON.stringify({ keyword: searchTerm, isPrivate: Private, user_id: userId }),
   });





Processing the search results
#############################
The search results returned from the API Gateway are processed using the displayResults function. This function updates the results container with the relevant search results.

.. code-block:: sh

   response.json().then((data) => {
    displayResults(data.body);
   });



Handling errors during the search process:
##############################################
If any errors occur during the search process, they are caught and logged to the console.

.. code-block:: sh

   catch (error) {
    console.error("Error calling API Gateway:", error);
   }


Logout
------

Accessing the logout button
#############################
The code checks if the current page contains a logout button by looking for an element with the ID logout-button. If the button is found, an event listener is attached to it.

.. code-block:: sh

   if (logoutButton) {
    logoutButton.addEventListener('click', function (event) {
        // ...
    });
   }


Preventing default button behavior
##################################
Inside the event listener, the event.preventDefault() method is called to prevent the button's default behavior, allowing the JavaScript code to handle the logout process.

.. code-block:: sh

   event.preventDefault();

Signing out the user:
#####################
The Auth.signOut() method is called to sign out the current user from the authentication system.

.. code-block:: sh

   Auth.signOut()
    .then(() => {
        // ...
    })
    .catch(error => {
        // ...
    });


Clearing the user ID
####################
After successfully signing out, a message is sent to the background script to clear the user ID by setting it to '0'. This ensures that the user is fully logged out and their information is no longer accessible.

.. code-block:: sh

   chrome.runtime.sendMessage({
    action: 'saveId',
    data: {
        id: '0'
    }
   }, function (response) {
    console.log(response);
   });


Redirecting to the login page
#############################
Once the user is successfully logged out and their ID is cleared, the window location is changed to the login page, effectively redirecting the user to the login page.

.. code-block:: sh

   window.location.href = '/Login-Page.html';


Handling logout errors
######################
If any errors occur during the logout process, they are caught and logged to the console.

.. code-block:: sh

   catch(error => {
    console.error('Error signing out:', error);
   });


Highlight
---------

Defining the Highlight Template and Styles
##########################################
The highlightTemplate is defined as an HTML string containing a button with an SVG icon for text highlighting. The highlightStyled function takes a configuration object as input and generates a string containing the styling rules for the highlighting button.

.. code-block:: sh

   const highlightColor = "rgb(255, 242, 153)";
   const highlightTemplate = `
     ...
     `;

   const highlightStyled = ({ display = "none", left = 0, top = 0 }) => `
   ...
   `;

Creating the HighlighterClass Custom Element
############################################
The HighlighterClass is a custom HTMLElement class that extends the HTMLElement class. The constructor of this class calls the render() function, which sets up the shadow DOM, attaches event listeners, and sets the initial styles.

.. code-block:: sh

   class HighlighterClass extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    ...
   }



Handling Attribute Changes
##########################
When the markerPosition attribute is changed, the attributeChangedCallback method is triggered. This method updates the styles by setting the styleElement's text content with the updated marker position.

.. code-block:: sh

   attributeChangedCallback(name, oldValue, newValue) {
    if (name === "markerPosition") {
        this.styleElement.textContent = highlightStyled(this.markerPosition);
    }
   }




Highlighting the Selected Text
##############################
When the user clicks the highlighting button, the highlightSelection() function is called. This function retrieves the user's selection and, for each range in the selection, calls the highlightRange() function.


.. code-block:: sh

   highlightSelection() {
    var userSelection = window.getSelection();
    for (let i = 0; i < userSelection.rangeCount; i++) {
        this.highlightRange(userSelection.getRangeAt(i));
    }
    window.getSelection().empty();
   }



Highlighting a Range
####################
The highlightRange() function handles the process of highlighting the selected text within the range. It extracts information such as the paragraph, selected text, offsets, and XPath, then saves the highlight information using the chrome.runtime.sendMessage method.

.. code-block:: sh

   async highlightRange(range) {
    ...
    if (paragraph) {
        const result = await new Promise((resolve) => {
            chrome.runtime.sendMessage({
                action: 'saveHighlight',
                data: {
                    url: pageUrl,
                    text: selectedText,
                    start: startOffset,
                    end: endOffset,
                    color: highlightColor,
                    xpath: xpath
                }
            }, function (response) {
                resolve(response.message);
            });
        });

        if (result) {
            const clone = this.highlightTemplate.cloneNode(true).content.firstElementChild;
            clone.appendChild(range.extractContents());
            range.insertNode(clone);
        }
    }
   }




Generating XPath
################
The getXPath() function generates an XPath string for the element passed as an argument. This helps in identifying the specific element that contains the selected text.

.. code-block:: sh

   getXPath(elm) {
    ...
   }


Loading Highlights
##################
The loadHighlights() function is called after defining the custom element. It retrieves the highlights for the current URL and inserts the highlighted text into the corresponding elements on the page.

.. code-block:: sh

   async function loadHighlights() {
    ...
   }



Registering the Custom Element and Loading Highlights
#####################################################
The custom element is registered using the window.customElements.define() method. The loadHighlights() function is called to retrieve and display the highlights for the current URL.

.. code-block:: sh

   window.customElements.define("stickit-highlighter", HighlighterClass);
   loadHighlights();






Note
----

Defining the CommenterClass
###########################
The stickit-commenter.js file starts by defining a custom HTMLElement called CommenterClass, which extends the HTMLElement class. The constructor of this class calls the render() function, which sets up the shadow DOM, attaches event listeners, and sets the initial styles.


Marker Position Attribute
#########################
The markerPosition attribute in 'stickit-commenter.js' is a getter that retrieves the markerPosition attribute value from the custom element and parses it as a JSON object. The styleElement getter retrieves the style element from the shadow DOM.

Handling Attribute Changes
##########################
When the markerPosition attribute in 'stickit-commenter.js' is changed, the attributeChangedCallback method is triggered. This method updates the styles by setting the styleElement's text content with the updated marker position.


Commenting Selection
####################
When the user clicks the commenting button, the commentSelection() function in 'stickit-commenter.js' is called. This function retrieves the user's selection and, for each range in the selection, calls the commentRange() function.

Commenting Range
################
The commentRange() function in 'stickit-commenter.js' handles the process of highlighting the selected text and opening a new window to add a note. It extracts information such as the paragraph text, selected text, offsets, and XPath, then creates a URL to open the AddNote.html page with the extracted information.

Inserting the Comment Template
##############################
After extracting the necessary information, the function creates a clone of the comment template, appends the selected content, and inserts the clone into the range. This highlights the selected text with the comment color.


Generating XPath
################
The getXPath() function in 'stickit-commenter.js' generates an XPath string for the element passed as an argument. This helps in identifying the specific element that contains the selected text.

Saving Notes
############
The note.js file defines the logic to save notes to the browser's storage. It retrieves information from the URL, such as the selected text, color, and XPath. It then sets up a note object with this information and a unique ID, and saves it to the browser's storage.

Loading Notes
#############
The note.js file also defines the logic to load existing notes from the browser's storage when visiting a web page. It checks the storage for notes related to the current URL, and if it finds any, it uses the stored XPath to locate the corresponding elements on the page. It then highlights the text with the stored color and adds an event listener to show the note when the highlighted text is clicked.





Database
--------
The database consists of two tables: highlights and notes. The highlights table stores the highlighted text, color, and XPath for each highlight. The notes table stores the note text, color, and XPath for each note.

Here are some additional details on 'StickIT.Highlights' table:

id: This column is likely the primary key for the table and is set to auto-increment. This means that each row in the table will have a unique value for this column, and the database will automatically assign new values as new rows are inserted.
page_url: This column likely stores the URL of the web page where the text was found.
highlighted_text: This column likely stores the text that was highlighted on the web page.
userId: This column likely stores a unique identifier for the user who created the highlight. This could be used to associate the highlight with a particular user account.
color: This column likely stores the color of the highlight, which could be used to display highlights in different colors on a web page.
xpath: This column likely stores the XPath expression that was used to locate the highlighted text on the web page.



AWS Integration
---------------





