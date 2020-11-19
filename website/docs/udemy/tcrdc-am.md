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

In this video, we learned that JSX doesn't automatically bind data for us. For example, when we say count++ in a function call, it won't render the new number because when we initially rendered the function the value was 0. To solve this, we wrapped our template and our call to ReactDOM.render into its own function call. Then when we need to update the state (number) of the application we can re-render our template to the screen with the new data.

You might be thinking that that's inefficient, and it is but not as bad as you think. When ReactDOM re-renders something, it looks at what it needs to actually change. In our case we don't need to change the div, or the h1, or the button, but only the number inside the button text. So that's all that gets changed.

```js
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
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
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

renderCounterApp();
```

---

### Forms and Inputs

In this video, we learned about forms in JSX and how to get the value from the form as well as how to clear the form and add data from the form.

```js
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  render();
};

const onReset = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onReset}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
```

We can access the value in the form with `e.target.elements.option.value`. From there we add it into an array. To actually call the function we use an `onClick` or an `onSubmit` event listener inline in our JSX markup.

---

### Arrays in JSX

In this video, we learned about how arrays work in JSX.

By default, JSX can work with arrays and if we simply try to render an array it will display all the items in one straight line next to each other. But we can do something more useful with arrays. Say we have an array containing options and we want to loop over each of them and render out a `<p>` tag, we can do that with our JSX inline function expressions.

We also learned about keys and how every element that we're generating from an array must have a unique key because React needs to be able to identify the elements from the array so that it can change them in an optimized fashion.

```js
<ol>
  {app.options.map((option) => {
    <li key={option}>{option}</li>;
  })}
</ol>
```

---

### Picking an Option

In this video, we learned about how we can make a function that will pick a random element from an array and display it in JSX, as well as how to disable the button if a certain condition is not met.

In order to get a random index from the array, we just use Math.floor and Math.random to pick a random number and we times that times the length of the array we're picking from.

In order to make a button disabled, we can use an inline event handler, called disabled. We can pass a value to disabled and if the value evaluates to true then the button is disabled, otherwise, the button is enabled.

```js
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

<button disabled={app.options.length === 0} onClick={onMakeDecision}>
  What should I do?
</button>;
```

---

### Build It: Visibility Toggle

In this video, our task was to build out our own project. The project was a visibility toggle, there's a button and it says show details and when you click it it shows a p tag with some text and the button text says hide details. Click it again and the button text changes and the details disappear.

Here's my implementation before watching the solution.

```js
let details = "Shown Details";
let text = "Show Details";

const onButtonClick = () => {
  if (text === "Show Details") text = "Hide Details";
  else text = "Show Details";
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onButtonClick}>{text}</button>
      {text === "Hide Details" && <p>{details}</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
```

Here is the final solution by Andrew Mead. I had similar ideas for the execution, I just didn't use a global variable to store the state and instead used the strings as identifiers.

```js
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility === true && <p>Hello I am details</p>}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
```

---

## React Components

### Section Intro: React Components

Components allow us to take our complex applications and make them simple. Each component is responsible for defining the JSX that should be rendered when that component is used and components can also handle user interaction on anything that is rendered.

We'll refactor our current application to use components.

---

### Thinking in React

If we take a website like Twitter, we can look at how they might use components in their architecture.
They use these components so that they can easily be reused and simply dropped in on any page that is needed.
For example, some components might be the header, current trends, who to follow, each tweet is a tweet component, etc...

Component tags look like custom HTML code, a header might be `<Header />` and a tweet might be `<Tweet />`.

We also can have containing components, like `<DashboardPage />` and inside of that we can render our header, trends, etc. So we can just drop in components wherever we need to.

In our Indecision app we're going to have some of the following components: `<Header />`, `<Action />`, `<Options />`, and `<AddOption />`.
We're then going to have a wrapper/parent rendering component called `<IndecisionApp />` which will be in charge of rendering all of the child components.

---

### ES6 Classes: Part 1

In this video, we learned that we can create classes which are like blueprints and then create instances of our class and customize the data to our individual needs. We can also add methods to our class for custom functionality.

When we create a new Class, we have access to a constructor function. This is called every time we create a new class and is useful for assigning variables using `this`.

Here's a basic class where we create a person with a name and age. We use default values in our parameters so that if there is no data entered they will automatically be assigned some value instead of being undefined.

```js
class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const me = new Person("Nick Reisenauer", 18);
console.log(me.getDescription());
// Nick Reisenauer is 18 years old.

const other = new Person();
console.log(other.getDescription());
// Anonymous is 0 years old.
```

---

### ES6 Classes: Part 2

In this video, we learned that we can extend an existing class. That allows us to get all of the behavior of the parent class without needing to copy and paste the code. We can customize the behavior by adding new methods or overriding methods from the parent class.

If we want to create a class that is based on a parent class but with some customizations, we would use class extends. If we have a parent class that defines a car, we might wand an extended class that is a Toyota Camry. To do that it would be class Camry extends Car.

Once we extend our class we can pass in the constructor methods from our parent class using the `super` keyword and passing in the parent constructor function parameters.

We can then either use the functions provided to us from the parent function or we can add new ones.

Here's a class that extends a class.

```js
class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const joe = new Traveler("Joe", 42, "Phoenix");
console.log(joe.getGreeting());
// Hello Joe! I'm visiting from Phoenix
```

---

### Creating a React Component

React Components allow us to define some functionality in a little contained component with custom jsx and logic. React components are just ES6 Classes that extend something that React gives us. We learned that they have to start with an uppercase letter and they have to define a render method.

It looks like an HTML element but it's actually just rendering custom JSX.

```js
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
```

---

### Nesting Components

In this video, we learned that our components can render JSX and this means that we can render other components. That allows us to create the nested structure that we're going to need for our applications. In the rest of the section, we're going to learn how our components can communicate with one another.

First of all, we created a brand new parent component of sorts and inside of that we call all of our other components, so it's holding together everything, then we have an options component that renders an option component which contains JSX so we have a triple nested component right there.

```js
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
```

---

### Component Props

In this video, we learned that when we create instances of React Components, we can also choose to pass some data into it, that data looks very much like HTML attributes, but it's really just a set of key-value pairs. The key is always some sort of string and the value can be anything we like. When we pass data into a component, we can use that data in the component itself. All of our props are available on `this.props` inside of our component. This gives us a way to set up one-way communication. In the next video, we'll figure out how to reverse that one way communication so that we can communicate up and down from our components.

```js
class IndecisionApp extends React.Component {
  render() {
    const options = ["Thing one", "Thing two", "Thing four"];
    return (
      <div>
        <Options options={options} />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option: {this.props.optionText}</p>
      </div>
    );
  }
}
```

In the example above, we have our parent component that is rendering out the Options component, we are passing a prop of `options` with the value of the options array. Then inside of our Options component, we loop over each option in the array that was passed to us, and for each of them we render out a single Option component. When we render out the individual Option component we pass in some props containing information about the option, and inside of the Option component we render out some JSX and access the data from our props on `this.props.propName`. We have passed data down from our Parent, to our Options, to an individual option that renders the text to the screen.

---

### Events & Methods

In this video, we learned about how we can add inline component methods so that all of our logic is contained within our components. We set up some event listeners for button clicks and form submits and reviewed how we can get the value out of an input in a component. We worked mainly on our `AddOption` component.

```js
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) alert(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
```

---

### Method Binding

In this video, we learned that event handlers inside of our components lose access to `this`. That means that when we try to access our props inside of an event handler function we can't access them. There is a way to fix our problem, and that's with `bind()`. bind allows us to bind the `this` reference to whatever we call it on and we can pass in where we want it to get the `this` from. Instead of writing this for every event handler, we can customize our constructor function in our components so that this.eventHandler = this.eventHandler.bind(this).

In this example, we customize our component's constructor function so that it binds the `this` of the constructor which has access to the `this` as would would expect.

```js
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveALl = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    this.props.options;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
```

---

### What is Component State?

State keeps track of our logic behind the scenes and we need to base our UI off of our state. If we have a counter app and the count goes up by 1, we would need to re-render our component to be updated to the current state (which would be +1).

1. Setup default state object
2. Component rendered with default state values
3. Change state based on event
4. Component re-rendered using new state values
5. Start at 3 again

---

### Adding State to Counter App: Part 1

In this video, we set up our counter app to use component architecture and state. We set up our methods and event handlers for button presses and also bound this to all our our methods through the constructor function binding.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log(`handleAddOne`);
  }
  handleMinusOne() {
    console.log(`handleMinusOne`);
  }
  handleReset() {
    console.log(`handleReset`);
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
```

---

### Adding State to Counter App: Part 2

In this video, we set up state on our counter app. To do this, we defined a state object in our component constructor. Inside there we defined our count and set it to 0.
To update that state number, we used a method called setState and that gave us access to the prevState in a variable. We can then take the previous state and add one to it and re-render that new state number.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
```

---

### Alternative setState Syntax

In this video, we learned about an alternative syntax to the setState method. Instead of using a function with the parameter of `prevState`, we can just use an object. This is not a recommended way to do things and doesn't give us access to prevState if we need it so we should avoid using it but just know it exists.

---

### Build It: Adding State to Visibility Toggle

In this video, we refactored our visibility toggle app to use React State and Components.

```js
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>Hello I am details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
```

---

### Indecision State: Part 1

In this video, we added state to our indecision app. We set up a method in our parent component and added some logic to the pick a random option component. The random option will be taken from this.state. We passed down the method to our child component instead of defining the method in the component.

---

### Indecision State: Part 2

In this video, we used function props to communicate our state between both directions. We also set up function props to handle state in our component as well as our main application state. We also added error handling in our form to ensure that we cannot add duplicates or input an empty string.

---

### Summary: Props vs State

In this video we look at the difference between props and state.

Props:

- An Object
- Can be used when rendering
- Changes (from above) cause re-renders
- Come from above
- Can't be changed by component itself

State:

- An Object
- Can be used when rendering
- Changes cause re-renders
- Defined in component itself
- Can be changed by component itself

`<MyComponent />`:

- Access to props when rendering
- Access to state when rendering
- Can receive props from parent component and pass props to children components.

---

## Stateless Functional Components

### Section Intro: Stateless Functional Components

A functional component is simply a vanilla JavaScript function.

---

### The Stateless Functional Component

Stateless Functional Components are React Components, they are functions, and they are stateless.

Our first stateless function component looks like this...

```js
const User = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
};
```

We can render this component in the same way that we rendered our other components, by just calling it like an HTML tag `<User />`.

We can access the props through the props parameter and then we just use them with `props.name`.

Advantages over Class Based Components:

- Faster
- Easier to read/write
- Easier to test

---

### Default Prop Values

In this video, we learned about how we can set default prop values for our components. To set a default value, we can create a special component and set the value of the prop we need.

```js
Header.defaultProps = {
  title: "Indecision",
};

<Header title={"New title"} />;
```

We can then either let it be the default, or we can customize it when we pass in our prop value.

---

### React Dev Tools

The React Dev Tools allow us to view all of our components in our component tree and we can also view the state and props for each component.

---

### Removing Individual Options

In this video, we set up an event handler to remove individual options in our React code and state management. To accomplish this we set up an event handler that will filter through the options state and it will remove the one that is equal to the button clicked on. We pass this function down to Options and then into Option. Instead of calling the function directly `onClick` in our Option component we set up an inline arrow function to first get the event value and then we passed that into our function which was called inside the inline arrow function.

---

### Lifecycle Methods

In this video, we learned that there is something called lifecycle methods. Lifecycle methods, like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` fire at various times in the components lifecycle, and these are really handy for a lot of situations. We also learned that they're only available in class based components. Stateless Functions only have access to `render`.

```js
  componentDidMount() {
    console.log("Fetching data");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Saving data");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
```

---

### Saving and Loading Options Data

In this video we added support for the localStorage API so that we can save our data into key value pairs in the browser and it will still be there when we reload the page.

To accomplish this, we used JSON.parse and JSON.stringify to save our values as a string into localStorage and then we updated our state to be whatever our localStorage would be.

---

### Saving and Loading the Count

In this video, we finished adding support for localStorage in our counter app. To do this we used parseInt to make sure our number coming back from localStorage was a number instead of a string.

---

## Webpack

### Section Intro: Webpack

Webpack is an asset bundler. It's going to combine all of the assets that make up our application with all of the assets needed from third party libraries.

This allows us to take advantage of third party libraries in our projects. Now we can access the vast ecosystem of React plugins and components.

The second thing we're going to use Webpack for is to take our code and break it up into multiple files. Each component will live in it's own file and this helps us to manage our application.

---

### What is Webpack?

Webpack can take all of our components and bundle them up into a single JavaScript file.

Webpack can also handle 3rd party dependencies from npm or yarn in our application.

Before Webpack: We would have all of our components in different files and then we add script tags into our HTML file in a public folder, and we have to make sure that we add them in the right order etc.

After Webpack: We can have all of our files and dependencies bundled up into a single file which we can link to in our public HTML file.

---

### Avoid Global Modules

In this video, we learned about how to avoid global NPM modules by installing packages into our package.json file and then we can set up custom scripts to run those files.

There are a few advantages to this, all of our dependencies are all defined in one place, we have all of our versions defined in one place, and we have the ability to define custom scripts.

---

### Installing and Configuring Webpack

In this video, we installed webpack locally and we set up a command that lets us run webpack. We tried to do this without a config file and it failed, so we learned that we need to set up a config file.

There are three core things that we have to provide, the input, the entry, and the output. The entry allowed us to provide a relative path to our file but our output required us to use the `path` module to access our directory path.

---

### ES6 import/export

In this video, we learned about how we can modularize our application with export and import statements that webpack helps us with.

```js
export { functionName };
//
import { functionName } from "./fileName.js";
```

---

### Default Exports

In this video, we learned about default exports. We can then name the function whatever we want in our importing file and name them whatever we want.

Any given file can choose to export as many named exports as they want, and if they desire, they can set up a single default. In order to grab that default, you provide a name in the import statement before any braces for any named functions.

---

### Importing npm Modules

In this video, we learned how to import modules from npm and how we can import them into our application using Webpack.

```js
npm i react
import React from "react";
```

---

### Setting up Babel with Webpack

In this video, we learned that we can't use JSX inside of webpack without first teaching webpack how to run babel. We can teach webpack by using the babel loader. We then set up our loader to look for files ending in .js that can be compiled.

---

### One Component per File

In this video, we learned how to break up our application into individual components. This allows us to have our components in their own files and that makes it much easier to work with. Then we have to form a dependency tree of sorts. If a component needs access to another component, we import that one, and we export every component so that we can import them where needed. Then we have one parent component that imports the child components which each import their own children and so on.

---

### Source Maps with Webpack

In this video, we learned about Webpack source maps. This property tells webpack to tell us what file an error came from instead of saying `bundle.js`. This makes it much easier to track down errors in our application.

---

### Webpack Dev Server

In this video, we set up our Webpack Dev Server. This allows us to remove the need for live-server and let webpack handle our dependencies.

---

### ES6 Class Properties

In this video, we installed and set up a brand new babel plugin which allows us to access a cutting edge feature. In this case it was the transform-class-properties syntax that allowed us to customize how we use classes in our application. Here, we are now able to set up the state outside of the constructor function and we were also able to set the class properties to arrow functions. This is great for things like event handlers who have a hard time maintaining the `this` binding. The `this` binding in our new class syntax always point to the class instance which is perfect to access properties on the class.

---

## Using a Third-Party Component

### Section Intro: Using a Third-Party Component

In this section, we are going to use a third-party React Component in our app.

---

### Passing Children to Component

In this video, we learned about passing children to our components. Instead of passing them props and accessing the props inside the component, we can type JSX inside the tags as if it were HTML and access the data from props.children.

```js
const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <h1>Hi</h1>
    <h2>Hello</h2>
  </Layout>,
  document.getElementById("app")
);
```

---

### Setting up React-Modal

In this video, we set up a third party component, react-modal. We made a new file and set up the modal component inside the file and then imported / exported that from IndecisionApp. Then we used state in IndecisionApp to keep track of whether the modal was opened or closed.

---

### Bonus: Refactoring Other Stateless Functional Components

In this video, we refactored our components to implicitly return JSX.

---

## Styling React

### Section Intro: Styling React

In this video, we're going to use SCSS to style our React app.

### Setting up Webpack with SCSS

In this video, we added support for SCSS. We added webpack loaders as well as new rules with tests for SCSS files. We then told webpack where to look for our style tags with an import statement into our `app.js`.

---

### Architecture and Header Styles

In this video, we learned how to break up our styles into multiple files and we started by creating a base partial. We also created a header partial that we then loaded into our main file. We named our CSS using the BEM naming convention.

---

### Reset That Stuff

In this video, we used `normalize.css` to reset our browsers default styling.

---

### Theming with Variables

In this video, we introduced a new way to structure our styles by defining a settings file. We can then import these settings and variables into other files where we can reference them and if we want to change something we only have to change it in one place.

---

### Big Button & Options List

In this video, we set up our button file with our big button and our regular / link button.

---

### Styling the Options List

In this video, we worked on adding more styling to our application.

---

### Styling Option Item

In this video, we styled our Option Item with SCSS.

---

### Styling React-Modal
