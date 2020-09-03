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

We can render our JSX based on a condition. We can do this in 3 ways, either with a function return expression, a ternary operator, or a logical && statement.

Here are examples for each method.

The function return method will call a function inside of JSX and render the return value. So in our function we have an if statement that checks if the user is older than 18 and if so it returns a JSX expression with a p tag and the user's age inside. We then call that function in our template and if it's false it won't render anything, but if it's true then it will render the user's age.

```js
// Function return expression
const user = {
  name: "Nick",
  age: 18,
};
function getAge(age) {
  if (age >= 18) return <p>Age: {age}</p>;
}
let template = <body>{getAge(user.age)}</body>;
```

The Ternary operator is a great option for if you want to display 2 messages, either a success or a failure. The way it works is if the condition is true it will render the first thing and if not it will render the second. We can use it to see if the user's name is a valid string and if it is we can render the name, otherwise we can render a 'stranger' string. We can also write this inline/in-tag in our JSX.

```js
// Ternary Operator
const user = {
  name: "Nick",
  age: 18,
};
let template = (
  <body>
    <p>{user.name ? user.name : "Hello stranger"}</p>
  </body>
);
```

The Logical && operator will take an expression and if it evaluates to true it will render the truthy value and if it's false it will return the falsy value. But JSX doesn't render falsy values so it has to be true for JSX to render it. We pass in our tag on the truthy side instead of wrapping this whole expression inside a tag. This is because if it evaluates to false we don't render anything and we only render the tag if it's true.
This will check if the user provided both a name and an age and if so it will render a p tag saying the user's age and name.

```js
// Logical &&
const user = {
  name: "Nick",
  age: 18,
};
let template = (
  <body>
    {user.name && user.age && (
      <p>
        Age: {user.age} and Name: {user.name}
      </p>
    )}
  </body>
);
```

---

### ES6 Aside: const and let

In this video, we looked at how `var`, `let`, and `const` differ from each other. The block and function scoping for `var` is different than `let` and `const`. For example if we have a function with a var declared inside we can access it from outside the block which we don't want to happen. With both let and const our variables are available in whatever scope we defined them in.

We should always try to use const unless we're going to be reassigning our variables, in which case we can use let. This will help us manage our scopes and not have variables bleeding out into scopes unknown.

---

### ES6 Aside: Arrow Functions

One big advantage of using arrow functions is that they have implicit return if we're returning a single value.

```js
const square = (x) => x * x;
```

---

### ES6 Aside: Arrow Functions Part 2

In this video, we explored some of the difference between using arrow functions and regular functions.

One of the first differences is that we no longer have access to the arguments object.

Another difference is how `this` works inside of object methods. If we have an ES5 function method and we use an arrow function inside, say with a map or forEach function, `this` will be able to reference whatever we want, but if we used an arrow function on our object method it would return undefined.

```js
const user = {
  name: "Nick",
  cities: ["Phoenix", "Glenwood Springs", "Frisco"],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};
console.log(user.printPlacesLived());
// Nick has lived in Phoenix etc...
```

Another use case we talked about is `map`. `map` will return a new array with the values based on manipulating each element in an existing array.

```js
const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
// 5, 10, 15, 20, 25
```

---

### Events and Attributes

In this video, we learned about how we can add attributes to our JSX. In HTML we can add a class and id quite easily, the same is true for JSX except we have to use different names for some things. For example, `class` in HTML becomes `className` in JSX, id works the same.

We also learned about how we can set up inline event handlers using the `onClick` functionality to run a function every time a specified element is clicked.

```js
let count = 0;

const addOne = () => console.log("addOne");
const minusOne = () => console.log("minusOne");
const reset = () => console.log("reset");

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} id="addOne">
      +1
    </button>
    <button onClick={minusOne} id="minusOne">
      -1
    </button>
    <button onClick={reset} id="reset">
      Reset
    </button>
  </div>
);
```

---

### Manual Data Binding
