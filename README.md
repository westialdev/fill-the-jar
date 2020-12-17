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

Create the core logic from a test driven approach.

### Frontend implementation ###

Source code in [src/web/frontonly.html](src/web/frontonly.html).

* Turn on: Show the water falling when user clicks on the button.
* Turn off: Wait for 30 seconds and display the jar filled up to the MAX mark.

## Install ##

Install dependencies:

```
npm install
```

Execute the unit tests:

```
npm test
```