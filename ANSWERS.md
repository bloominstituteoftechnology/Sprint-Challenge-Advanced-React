- [ ] Why would you use class component over function components (removing hooks from the question)?

Because it provides a lot of functionality that you wouldn't normally get by using function components (using hooks is what provides functionatlity when using function components).


- [ ] Name three lifecycle methods and their purposes.

There are three phases to the React component lifecycle: Mounting, Updating, and Unmounting

Mounting Phase: When the component is being built completely from scratch: Any initial data that needs to be accessed will be defined on the constructor in this phase, render() method is invoked and componentDidMount is also called

Updating Phase: A call to render() is forced when the component's data is changed. This is when you use setState to update the component's data, if you need to stop a component from calling render()  shouldComponentUpdata() method can be used

Unmounting Phase: This is when the component is removed from the screen. componentDidMount() is used


- [ ] What is the purpose of a custom hook?

A custom hook is a hook that you are building yourself, doing so allows you to apply stateful logic and non-visual behavior throughout the components by reusing the same custom hook you built.


- [ ] Why is it important to test our apps?

It helps us to be more efficient at catching bugs, reducing regression, while acting as a safety net and documentation as we make changes and help us to trust the code and write better/testable code.
