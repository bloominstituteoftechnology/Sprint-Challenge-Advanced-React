 Why would you use class component over function components (removing hooks from the question)?
Class components have more control over state and what happens in the app's lifecycle. You have control over what happens when the component mounts, updates and unmounts.

 Name three lifecycle methods and their purposes.
componentDidMount: Part of the mounting phase, the method gets called as soon as the render() method is called initially. Creates the app/loads components. componentDidUpdate: This method is not called for the first render() like componentDidMount. Instead, it is invoked immediately after an update to the state occurs. componentWillUnmount: Invoked immediately before a component unmounts/dies. It is in this mehtod that you will cleanup any ongoing tasks.

 What is the purpose of a custom hook?
Custom hooks are reusable and they keep our code dry.

 Why is it important to test our apps?
Testing is a good way at finding errors before you get too detaied in code or to help find issues faster so you spend less time debugging or with broken components.