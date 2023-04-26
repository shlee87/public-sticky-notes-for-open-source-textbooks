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





you'll need a local copy of either the Hypothesis Chrome extension or
h. Follow either :ref:`running-from-browser-ext` or
:ref:`running-from-h` below.
If you're only interested in making changes to the client (and not to h)
then running the client from the browser extension is easiest.


.. _running-from-browser-ext:

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

This section explains the architecture of StickIT.



Folders & files
====================
This sections explain how the folders and files are organized in StickIT.


Folders
---------------------------------------------

public-sticky-notes-for-open-source-textbooks/sticky-chrome-extension
#####################################################################
this is a folder that has all files for the chrome extension.

public-sticky-notes-for-open-source-textbooks/docs
##################################################
This folder houses all the files related to code documentation.

public-sticky-notes-for-open-source-textbooks/lambda
#####################################################
This folder contains function files for AWS lambda.



feature-related files
---------------------------------------------
