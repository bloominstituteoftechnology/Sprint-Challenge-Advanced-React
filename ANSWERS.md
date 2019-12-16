- [ ] Why would you use class component over function components (removing hooks from the question)?
class components have more control over state and what happens in the lifecycle of your app. you have more control what happens when the component mounts, what happens when it updates, and what happens when it unmounts.

- [ ] Name three lifecycle methods and their purposes.
componentDidMount: Part of the mounting phase, the method gets called as soon as the render() method is called initially. Creates our app/loads components.

componentDidUpdate: This method is not called for the first render() like componentDidMount. Instead, it is invoked immediately after an update occurs to state.

componentWillUnmount: Invoked immediately before a component unmounts/dies. It is in this method that you will cleanup any ongoing tasks.

- [ ] What is the purpose of a custom hook?
Custom hooks are reusable! and they keep your code dry

- [ ] Why is it important to test our apps?
testing is a good way at finding errors before you get to detailed in code, or to help find issues faster so you spend less time debuggng or with broken components.