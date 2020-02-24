- [ ] Why would you use class component over function components (removing hooks from the question)?

A lot of projects/code bases still use class components so it's very important that as coders we understand how to use them. Also class components introduced additional functionality when compared to standard React function components.

- [ ] Name three lifecycle methods and their purposes.

render() - The render method is one of the lifecycle methods that tells React to return some piece of DOM.

componentDidMount is a part of the mounting phase in the React lifecyle. It's called as soon as the render method is called. By calling setState inside the componentDidMount function we can force a re-render of our component, which allows us to perform asynchronous actions inside of this function (ie. HTTP calls)

constructor - the constructor function is most often used to setup state and bind different methods.

- [ ] What is the purpose of a custom hook?

create a reusable bit of code that can be used over and over again. This way we can apply non-visual behavior and stateful logic across all your components.

- [ ] Why is it important to test our apps?

It's important to test our apps to ensure we're accounting for all different types of use cases. Many times as developers we may not think about how others will be using our app and with rigorous testing we can make sure our app accomodates for all these different use cases.
