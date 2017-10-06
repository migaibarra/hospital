# Rock, Paper, Scissors

## Introduction
With this challenge, we are going to learn the basics of using classes with JavaScript, via a game of [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors)
Using test-driven development, we'll model our data, build up our interactions, and hook them up to the browser.

### Setup
1. Clone down the repository
1. cd into the repository and run `npm install`

### What is this npm install anyways?
We'll be using a test framework called [Jasmine](https://jasmine.github.io/2.0/introduction.html) to run our tests. In order to use jasmine, we need to install the framework. We can do that easily by making sure we're in the top level directory of the project and running `npm install`. This downloads all of the packages that are defined in the `package.json` file. We'll get more into `package.json` later in the course, but for now, think of it like a `Gemfile`.

### Testing
 Afterwards, we need to run the tests using a tool called karma. Karma does the work of getting your jasmine tests to run in your browser, so you can debug any failures.

Run the existing tests by typing `npm test`. This is a little different than tests previously, because it opens up a server that automatically reloads your tests
A chrome window should pop up. Click the debug button on the top right.
If a chrome window doesn't pop up, you can navigate to http://localhost:9876/debug.html

### Release 0: Implement the Player class
In this release, we will implement the Player using tests, and then hook it up to the application.
To get started, orient yourself with the codebase. Note that there is an `app/` folder and a `spec/` folder, similar to ruby. Our tests go in `spec`, and our code goes in `app`. Pay closer attention to `index.html`, `application.js`, and `stylesheet.css`. This is where our code lives when we actually run the website.

Important: To run the tests, you are looking at http://localhost:9876/debug.html but to see the website, you just need to open app/index.html in your browser.

Our workflow for developing should look like this:
1. Write a new `it` spec. There is a skeleton for the player already set up, and you can refer to timerSpec for more.
1. Refresh your chrome debugger window to make sure the test is failing.
1. Edit the Player class to make the test pass
1. (optional) If you want to, modify `application.js` so you can see the output on your webpage as well.
1. Rinse & repeat.

The goal for this release is to have a player class that
- Stores the command the user presses
- Has the current command of the user
- Displays the current command in the correct `.player-command` DOM element

### Release 1: Implement the Game class
Developing a game should be similar. A game has a couple of players, and it has a way of knowing who won.
- Modify the player class to keep track of the number of wins a player can have
- Add a function to the Game class that determines who the winner is
- Add a button on `index.html` that calculates the winner when pressed

### Release 2: Automatically calculate winners
Using the provided `timer` class, refactor the code such that you don't need a button to calculate winners. Instead, show a countdown on the website and when it expires, automatically calculate the winner. Also, display the number of wins the player has.

### Release 3: No cheaters!
We want both players to vote at the same time and not change their command afterwards.For this release, the player's vote should not show up until after the timer expires. Also, voting after the timer expires should not be allowed.

## Conclusion
Using Rock, paper, scissors, we were able to explore how classes work. Using jasmine as a test environment, we saw how to write tests for our classes to develop more effectively.

## Additional resources
[Jasmine](https://jasmine.github.io/2.0/introduction.html)

[ES2015 classes](https://www.fourkitchens.com/blog/article/practical-introduction-es2015-classes/)

[Object shorthand methods](http://www.benmvp.com/learning-es6-enhanced-object-literals/)

[Composition in javascript](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
