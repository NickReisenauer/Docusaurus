---
id: tcndc-am
title: The Complete Node.js Developer Course - Andrew Mead
sidebar_label: TCNDC-AM
---

## Welcome

### Welcome to the Class

1. Exploring the Course Curriculum
   This course is split into 4 main sections.
   In part 1, we're going to build a note taking app.
   In part 2, we're going to build a weather app.
   In part 3, we're going to build a task-manager app.
   In part 4, we're going to build a real-time chat app.

2. Learn by Writing Code
   In the beginning, we're going to learn by coping what we see. This is essential in exploring new features for the first time, but not good for building up your problem solving capabilities, which is why there are many personal challenges involved.

3. Tips for Asking Questions
   The course Q&A is where you can go to get help if your app randomly crashes, or something's not compiling correctly.

---

### Grab the PDF Guide

This is a great guide that contains code examples, documentation, notes, etc...

[PDF Guide](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13815720#overview)

---

## Installing and Exploring Node.js

### Section Intro: Installing and Exploring Node.js

We'll be setting up Node.js and a text editor that works very well with Node.js.

---

### Installing Node.js and Visual Studio Code

To install Node.js, just download the most current version on nodejs.org and follow the install prompt. To make sure the latest version is installed, open the command prompt, and type `node -v`.

To install Visual Studio Code, just go to the website and follow the install instructions.

---

<!-- markdownlint-disable MD026 -->

### What is Node.js?

Previously, JavaScript was limited to running on the browser. Node.js allows JavaScript to run outside of the browser on servers and machines. Node.js runs on the V8 JavaScript Engine from Chrome. This engine is written in C++ and helps the browser compile and read JavaScript code.

Node.js is a JavaScript runtime. This means that we write our code in regular JS and it will give us access to special tools and libraries.

![The V8 JavaScript Engine](./tcndc-am/static/tcndc-am1.png)

Node and JavaScript both rely heavily on the V8 engine. When we want to interact with some files, or something on the DOM, we are actually using C++ to do that, and when we write something in our code, we're just telling the V8 engine what it should do because it uses C++.

When we open the Command Prompt and type `node` in, we're put into what's called a REPL. Which stands for Read Evaluate Print Loop, and it lets us run some simple node commands.

What are some of the differences? With regular JS, we can call the `window` or `document` property and it will give us lots of options to do with the browser window,but this isn't available in Node.js because we don't interact with the browser window.

Some node functions include `process`, and `process.exit()`

---

### Why Should I Use Node.js

"Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient." I/O stands for Input Output, and Node uses I/O anytime it communicates with the outside world. Non-blocking means that while Node is waiting for something to happen, it can continue processing other things.

![Blocking vs Non-Blocking](./tcndc-am/static/tcndc-am2.png)

NPM came preinstalled with Node. NPM contains packages for almost everything and is a very useful tool.

---

### Your First Node.js Script

We're going to set up a folder on the desktop, someplace to keep all of our scripts, and then open that in VSCode.

The first Node script is a simple `console.log()`, but it's important to note that console.log is not exclusive to JavaScript and isn't even part of the language itself, it's part of the runtime.

The Node documentation is available on the website, just select the version that is installed.

To run a simple Node script using the integrated terminal in VSCode, simply type `node` and add the file name that you want to run, `node hello.js`.

---

## Node.js Module System (Notes App)

### Section Intro: Node.js Module System

In this section, the focus will be on the Node module system in three different ways. Importing core Node modules, 3rd party modules by other developers, and our own modules.

---

### Importing Node.js Core Modules

Node.js comes with dozens of built-in modules. These built-in modules, sometimes
referred to as core modules, give you access to tools for working with the file system,
making http requests, creating web servers, and more! In this lesson, you’ll learn how to load in those core modules and use them in your code.

Importing Node.js Core Modules
To get started, let’s work with some built-in Node.js modules. These are modules that
come with Node, so there’s no need to install them.

The module system is built around the require function. This function is used to load in a module and get access to its contents. require is a global variable provided to all your Node.js scripts, so you can use it anywhere you like!
Let’s look at an example.

```js
const fs = require("fs");
fs.writeFileSync("notes.txt", "I live in Philadelphia");
```

The script above uses require to load in the fs module. This is a built-in Node.js module
that provides functions you can use to manipulate the file system. The script uses
writeFileSync to write a message to notes.txt.

After you run the script, you’ll notice a new notes.txt file in your directory. Open it up and you’ll see, “I live in Philadelphia!”.

---

### Importing Your Own Files

Putting all your code in a single file makes it easy to get started with Node.js. As you add more code, you’ll want to stay organized and break your Node.js app into multiple scripts that all work together. In this lesson, you’ll learn how to create a Node.js application that’s spread out across multiple files.

Importing Your Own Files
You know how to use `require` to load in built-in modules. `require` can also be used to
load in JavaScript files you’ve created. All you need to do is provide `require` with a
relative path to the script you want to load. This path should start with ./ and then link to the file that needs to be loaded in.

```js
const checkUtils = require("./src/utils.js");
checkUtils();
```

The code above uses `require` to load in a file called `utils.js` in the src directory. It stores the module contents in a variable, and then uses the contents in the script.

Exporting from Files
Node.js runs the scripts that you require. That means the require call above will cause
`utils.js` to run. Node.js provides the required script with a place to store values that should be exported as part of the library. This is on `module.exports`.

You can see `utils.js` below. A function is defined and then assigned to `module.exports`. The value stored on `module.exports` will be the return value for `require` when the script is imported. That means other scripts could load in the utilities to access the `check` function.

```js
const check = function() {
  console.log("Doing some work...");
};
module.exports = check;
```

If you run the original script, you’ll see the message that logged from the `check` function in `utils.js`.

```js
Version 1.0 12
\$ node app.js
Doing some work...
```

Your Node.js scripts don’t share a global score. This means variables created in one
scripts are not accessible in a different script. The only way to share values between
scripts is by using `require` with `module.exports`.

---

### Importing npm Modules

When you install Node.js, you also get npm. npm is a package manager that allows you to
install and use third-party npm libraries in your code. This opens up a world of possibilities, as there are npm packages for everything from email sending to file uploading. In this lesson, you’ll learn how to integrate npm into your Node.js app.

Initializing npm

Your Node.js application needs to initialize npm before npm can be used. You can run `npm init` from the root of your project to get that done. That command will ask you a series of questions about the project and it’ll use the information to generate a `package.json` file in the root of your project.

Here’s an example.

```js
{
"name": "notes-app",
"version": "1.0.0",
"description": "",
"main": "app.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
}
```

Installing an npm Module

You’re now ready to install an npm module. This is done using the `npm` command which
was set up when Node.js was installed. You can use `npm install` to install a new module
in your project.

`npm install validator@10.8.0`

The command above installs version 10.8.0 of validator. If you want to install the latest
version of a module, you can leave off the version number as shown below.

`npm install validator`

This command does three important things:
First, it creates a `node_modules` directory. npm uses this directory to store all the code for the npm modules you have installed.

Second, npm adds the module as a dependency by listing it in the `dependencies` property
in `package.json`. This allows you to track and manage the module you have installed.

Third, npm creates a `package-lock.json` file. This includes detailed information about the modules you’ve installed which helps keep things fast and secure.

You should never make changes to `node_modules` or `package-lock.json`. Both are
managed by npm and will get changed as you run npm commands from the terminal.

Importing an npm Module

npm modules can be imported into your script using `require`. To load in an npm module,
pass the npm module name to `require`.

```js
const validator = require("validator");
console.log(validator.isURL("https/mead.io")); // Print: true
```

The script above uses `require` to load in validator. The script then uses the `isURL` function provided by validator to check if a given string contains a valid URL.

Links

- [npm](https://www.npmjs.com/)
- [npm: validator](https://www.npmjs.com/package/validator)

---

### Printing in Color

In this lesson, we were tasked with installing and using an npm package that we have no experience with. The package was called `chalk` and was a library that allows us to style our console.log messages with colors and background colors and cool text decorations.
To start, visit the [NPM chalk page](https://www.npmjs.com/package/chalk) and follow the download instructions. `npm install chalk`. From there we need to require the package inside of our file using the `require` keyword. `const chalk = require("chalk")`
Then, we can write a console.log and pass in the arguments we want. The API docs are very beneficial in explaining what each property available is. To console.log a green background with bold white text, I used this code.

```js
// npm install chalk
const chalk = require("chalk");
console.log(chalk.whiteBright.bold.bgGreen("Success!"));
```

---

### Global npm Modules and nodemon

You can use npm modules from outside of your scripts by installing them globally. Globally installed modules are designed to be used from the terminal and provide you with new commands you can run. In this lesson, you’ll learn how to install and work with global modules.

Installing an npm Module Globally
npm modules can be installed globally by adding a `-g` flag to the installation command.
Not all modules are designed to be installed globally, so be sure to refer to the module
documentation to learn how it’s supposed to be used.

The command below installs version 1.18.5 of nodemon as a global module.

`npm install -g nodemon@1.18.5`

A globally installed module is not added as a dependency to your project. That means you
won’t see it listed in `package.json` or `package-lock.json`. You also won’t find its code in `node_modules`. Globally installed modules are located in a special directory in your machine which is created and managed by npm.

When you install nodemon globally, you get access a new `nodemon` command from the
terminal. This can be used to start and Node.js application and then restart the application any of the app scripts change. This means you won’t need to switch between the terminal and text editor to restart your application every time you make a change.

The command below runs `app.js` through nodemon.

`nodemon app.js`

P.S. You can stop nodemon by using `ctrl + c` from the terminal!

---

## File System and Command Line Args (Notes App)

### Section Intro: File System and Command Line Args

This section focuses on 2 main topics. The first is using the file system, and the second is command line arguments. The file system allows us to store the users note data and command line arguments are going to allow us to get data from the user.

---

### Getting Input from Users

I can’t think of a single useful application that doesn’t get input from the users. Whether it’s their email, location, or age, getting input is essential for creating real-world apps. In this lesson, you’ll learn how to set up command line arguments that allow users to pass data into your application.

Accessing Command Line Arguments

Command line arguments are values passed into your application from the terminal. Your
Node.js application can access the command line arguments that were provided using
`process.argv`. This array contains at least two items. The first is the path to the Node.js executable. The second is the path to the JavaScript file that was executed. Everything after that is a command line argument.

Take a look at the example below.

```js
const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
```

That script grabs the third item in `process.argv`. Since the first two are always provided, the third item is the first command line argument that was passed in. The script uses the value of that argument to figure out what it should do. A user could provide add to add a note or remove to remove a note.

The command below runs the script and provides add as the command line argument.

```node
node app.js add
Adding note!
```

Links:
[process.argv](https://nodejs.org/api/process.html#process_process_argv)

---

### Argument Parsing with Yargs: Part 1

Node.js provides a bare-bones way to access command line arguments. While it’s a good
start, it doesn’t provide any way to parse more complex command line arguments. In this
lesson, you’ll learn how to use Yargs to easily set up a more complex set of arguments for your application.

Setting Up Yargs
First, install Yargs in your project.

`npm install yargs@12.0.2`

Now, yargs can be used to make it easier to work with command line arguments. The
example below shows how this can be done. First, `yargs.version` is used to set up a
version for the command line tool. Next, `yargs.command` is used to add support for a new command.

```js
const yargs = require("yargs");
yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!");
  }
});
console.log(yargs.argv);
```

Now, this command can be triggered by providing its name as a command line argument.

```terminal
node app.js add
Adding a new note!
```

Yargs provides a couple useful commands by default. The first, shown below, lets a user
get the version of the command line tool they’re running.

```terminal
node app.js --version
1.1.0
```

The second, shown below, shows the user autogenerated documentation that covers how
the tool can be used. This would list out all available commands as well as the available options for each command.

```terminal
node app.js --help
```

---

### Argument Parsing with Yargs: Part 2

In this lesson, you’ll continue to explore Yargs. The goal is to allow users to pass in the title and body of their notes using command line options. This same technique could be used to allow users to pass in data such as their name, email, or address.

Adding Command Options
Options are additional pieces of information passed along with the command. You can set
up options for a command using the `builder` property as shown below.

Now, the add command can be used with two options. The first is `title` which is used for the title of the note being added. The second is `body` which is used for the body of the note being added. Both options are required because `demandOption` is set to `true`. Both are also set up to accept string input because `type` is set to `'string'`.

```js
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  }
});
```

The add command can now be used with `--title` and `--body`.

```js
node app.js add --title="Buy" --body="Note body here"

Title: Buy
Body: Note body here
```

---

### Storing Data with JSON

In this lesson, you’ll learn how to work with JSON. JSON, which stands for JavaScript
Object Notation, is a lightweight data format. JSON makes it easy to store or transfer data.
You’ll be using it in this application to store users notes in the file system.

Working with JSON

Since JSON is nothing more than a string, it can be used to store data in a text file or
transfer data via an HTTP requests between two machines.

JavaScript provides two methods for working with JSON. The first is `JSON.stringify` and
the second is `JSON.parse`. `JSON.stringify` converts a JavaScript object into a JSON
string, while `JSON.parse` converts a JSON string into a JavaScript object.

```js
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday"
};
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: Ego is the Enemy
```

JSON looks similar to a JavaScript object, but there are some differences. The most
obvious is that all properties are wrapped in double-quotes. Single-quotes can’t be used
here, as JSON only supports double-quotes. You can see this in the example JSON
below.

```js
{"name":"Gunther","planet":"Earth","age":54}
```

---

### Adding a Note

In this lesson we set up a function to add a new note, and we also set up a process to check if the note is a duplicate note. If the note is a duplicate, then it doesn't add the new note to the json file.

---

### Removing a Note

Our challenge was to wire up a function that removed a note. To do this, we first set up a handler to make a title string a required functionality. Then we made a function that checks if the note title matches a note that's already in our object. Then we remove it.

---

### ES6 Aside: Arrow Functions

In this lesson, you’ll learn how to use ES6 arrow functions. Arrow functions come with a
few great features, making them a nice alternative to the standard ES5 function. You’ll
explore the new syntax and learn when to use them!

Arrow Functions

Arrow functions offer up an alternative syntax from the standard ES5 function. The snippet
below shows an example of a standard function and then an arrow function. While the
syntax is obviously different, you still have the two important pieces, an arguments list and
a function body.

```js
// const square = function (x) {
// return x * x
// }
const square = x => {
  return x * x;
};
console.log(square(2)); // Will print: 4
```

Shorthand Syntax

Arrow functions have an optional shorthand syntax. This is useful when you have a
function that immediately returns a value. The example below shows how this can be
used.

```js
const squareAlt = x => x * x;
console.log(squareAlt(2)); // Will print: 4
```

Notice that two important things are missing from the function definition. First, the curly
braces wrapping the function body have been removed as well as the `return` statement.
In place of both is the value to be returned. There’s no need for an explicit return
statement, as the value provide is implicitly returned.

This Binding

Arrow functions don’t bind their own `this` value. Instead, the `this` value of the scope in
which it was defined is accessible. This makes arrow functions bad candidates for
methods, as `this` won’t be a reference to the object the method is defined on.

For methods, ES6 provides a new method definition syntax. You can see this in the
definition of the `printGuestList` method below. That function is a standard function, just
with a shorthand syntax which allows for the removal of the colon and the function
keyword.

Because arrow functions don’t bind this, they work well for everything except methods. As
shown below, the arrow function passed to `forEach` is able to access `this.name` correctly,
as it’s defined as an arrow function and doesn’t have a this binding of its own. That code
wouldn’t work if you swapped out the arrow function for a standard function.

```js
const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};
event.printGuestList();
```

[MDN Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### Refactoring to Use Arrow Functions

In this module we learned about refactoring and arrow functions. We changed all of our regular function expressions to arrows.

Regular vs Arrow

```js
function hello(name) {
  console.log(name);
}

param => {
  console.log(param);
};

// Or, if all we're doing is returning one value we can use an even shorter syntax
param => param + "Hi";
// This just returns param + the string hi
```

---

### Listing Notes

We were required to write a function that will list out all of the notes when we run the list command.

```js
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes"));
  notes.forEach(element => {
    console.log(element.title);
  });
};
```

After exporting it and adding it as an event handler, this will return all of the note titles.

---

### Reading a Note

In this lesson, you’ll add a new app feature that allows users to read a note.

Array Find method

The find method allows you to find a single item in an array. It’s similar to `filter`, though `find` returns a single element as opposed to an array of elements. `find` will stop its search `through` the array after finding the first match.

The example below shows how find can be used to locate the user whose name is
George Hudson.

```js
const users = [
  {
    name: "Andrew Mead",
    age: 27
  },
  {
    name: "George Hudson",
    age: 72
  },
  {
    name: "Clay Klay",
    age: 45
  }
];
const user = users.find(user => user.name === "George Hudson");
console.log(user); // Will print the second object in the array
```

[MDN Array Find Method](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

---

## Debugging Node.js (Notes App)

### Section Intro

What’s worse than getting an error when you run your application? Not knowing how to fix
it. In this section, you’ll learn how to effectively debug your Node.js apps. You’ll learn how to track down and fix issues so you can get back to the important work.

---

### Debugging Node.js
