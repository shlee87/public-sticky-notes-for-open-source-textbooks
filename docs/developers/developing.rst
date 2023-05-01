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




public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension/login.js
------------------------------------------------------------------------------


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





Search
######

Highlight
#########

Note
####