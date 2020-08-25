# The Complete React Developer Course - Andrew Mead

## Welcome

### Welcome & Asking Good Questions

This course will cover everything you need to know to create production grade React applications.

The course Q&A in Udemy is a great way to solve your problems and help others with their problems.

---

### Why Should I Learn React?

1. The React Library Itself

- React has a small learning curve
- Builds off of previous JavaScript knowledge and adds enhancements
- Quick and renders fast
- Can be used for websites, apps, desktop apps, etc...

2. The React Community

- Hugely active developer community with lots of help
- Tons of useful packages and resources / tutorials

---

## Setting up Your Environment

### Setting up Your Environment

In this section, we're going to get our machine set up for the rest of the class.

---

### Installing Visual Studio Code

Install Visual Studio Code as this will be the text editor we will be using for the course.

---

### Installing Node.js & Yarn

Install Node.js & Yarn.

---

## Hello React

### Section Intro: Hello React

[What we're going to be building](http://indecision.mead.io/)

[GitHub repo for what we're going to be building](https://github.com/andrewjmead/react-course-2-indecision-app)

---

### Setting up a Web Server

In this video, we started off by creating our file and folder structure. We added a public folder and inside the public folder we added our index.html file. We also added a live server utility to server our public folder. This live server will allow for hot reloading.

---

### Hello React

In this video, we loaded in React and its companion library ReactDOM via script tags. Later on, we'll be loading them in via a different technique using Webpack. We also loaded in a script that we made in the scripts/app.js file. This script is very simple, we log a little message, and then we defined some JSX (JavaScript XML) but the real code that is running is the compiled version using Babel. We then select the element that we're going to render our template and then we used ReactDOM.render() to render the template we made inside the element we selected.

```js
// JSX
var template = <p id="Hello">This is JSX from app.js</p>;
// Babel compiled JSX
var template = /*#__PURE__*/ React.createElement(
  "p",
  {
    id: "Hello",
  },
  "This is JSX from app.js"
);
// Selecting the element to render the template in
var appRoot = document.getElementById("app");
// ReactDOM to render the template in the selected element
ReactDOM.render(template, appRoot);
```

---

### Setting up Babel

In this video we installed Babel as well as 2 Babel presets to compile our code. The presets we installed were `env` and `react`. Then we created a `src` folder to store the React code we're going to be writing. We ran `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` which tells babel where our source code is going to live and where we want the compiled code to go. The --watch flag will keep it running in the background so that it will compile into the scripts/app.js file every time we make a change in src/app.js.

---

### Exploring JSX
