Fill the jar Dojo
=================

This repository is a consecutive git commits based on a step-by-step dojo to
practice test driven development. 

It provides a closure multiple, quite diverse and unusual implementation of the
same use case.

This project has been created for a special Leadtech's middle end team speech 
although it is thought as dojo-like session as well.

## Fill the Jar exercise ##

There is a webpage interface with a tap, a button and a jar with a maximum level
mark. The practice consists on to give two features to the interface:

* Turn on the water when I click the button.
* Turn off the water when the level reaches the maximum mark.

![Fill the jar](doc/cover.png)

The point in this exercise is to program a decoupled logic to be used in
different implementation.

Development steps as follows.

### Core logic ###

* Create the core logic from a test driven approach.
* Encapsulate the logic into reusable use cases able to be implemented in 
  multiple contexts.

### Frontend context implementation ###

First implementation, we need visual, we want to see the water falling, and 
finally the jar filled up.

Source code in [src/web/index.html](src/web/index.html).

* Turn on: Show the water falling when user clicks on the button.
* Turn off: Wait for a few seconds and display the jar filled up to the MAX mark.

Usage: open the html file in your browser and use it as is.

#### Browserify the modules ####

After creating the [src/web/js/fillthejar.js](src/web/js/fillthejar.js) file in 
the nodejs way you have to browserify it. I fastly got done by adding the 
variables into the global window object and bundling it with browserify package.

Run the following command every time you edit an involved file.

```
browserify src/web/js/fillthejar.js -o src/web/js/fillthejar-browser.js
```

### Backend integration ###

Publish the interface to the world, so you can access it remotely. All clients 
remotely share the water state, if it is turned on, off, or the jar reached the 
maximum level.

#### Express API ####

Start the backend server as follows.

```
node src/api/app.js
```

## Install ##

Install dependencies.

```
npm install
```

Execute the unit tests.

```
npm test
```