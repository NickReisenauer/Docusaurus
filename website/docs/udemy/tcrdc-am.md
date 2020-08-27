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

In this video, we explored JSX and how we can write our HTML inside. An important thing to remember for JSX is that we must have a root element. This means that if we're going to be writing multiple element we need to wrap them in a div tag or something similar. If we want Emmet autocompletion in our editor for writing HTML templates we can go into settings > extensions > emmet > add language support > javascript: javascriptreact.

Here's a basic template that is wrapped in a root div and then rendered using ReactDOM.

```js
let template2 = (
  <div>
    <h1>Nick Reisenauer</h1>
    <p>Age: 18</p>
    <p>Location: Phoenix</p>
  </div>
);

ReactDOM.render(template2, document.getElementById("app"));
```

---

### JSX Expressions

In this video, we looked at how we can dynamically pass data into our JSX expressions. We can pass in variables as long as the variables are references to strings or numbers. We can also store our data on an object and then call the properties on that object. We cannot directly render the object however. To actually include the variables in our JSX we use two curly braces between the tag. `<p>{variable}</p>`.

Here's an example of some data that is stored on an object and how we pass it in to our JSX.

```js
let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
};
let variable = 42;
let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>{variable}</li>
      <li>Item two</li>
    </ol>
  </div>
);
```

---

### Conditional Rendering in JSX
