- [ ] Why would you use class component over function components (removing hooks from the question)?

Class Components have been a big part of the React ecosystem and they brought a lot of functionality that we normally didn’t get with the React API when using function components. Plus, a lot of projects are still written in Class Components.

- [ ] Name three lifecycle methods and their purposes.

Constructor(): sets the component up with the initial state data that it needs to have during initial render. Any props that the component receives that also need to be set up on state, can be done through the constructor function as well.

render(): tells react, when this method gets called it should return some piece of DOM. The React virtual DOM then knows what to do to handle the steps to mount those DOM pieces.

componentDidMount() is a part of the mounting phase in the React Lifecycle. This method gets called as soon as the render method is called the first time. Asynchronous actions should be performed inside of our componentDidMount function, especially when it comes to fetching data via HTTP

- [ ] What is the purpose of a custom hook?

A custom hook allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again

- [ ] Why is it important to test our apps?

Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.