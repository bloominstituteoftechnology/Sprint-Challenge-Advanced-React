- [X] Why would you use class component over function components (removing hooks from the question)

The component lifecycle and access to the cycle methods gives you control over how the components work. Every company doesn't use create so you could use a
class component over a functional component since the companies not using React has upgrade from using functional components.

- [X] Name three lifecycle methods and their purposes.

componentWillUnmount: used for any clean up such as localStorage
componentDidMount: Best for fetching data
shouldComponentUpdate: Can stop a component from calling a render

- [X] What is the purpose of a custom hook?

Apply non-visual behavior and stateful logic to the application. Example: when controlling inputs, you can build something that is reusable. 

- [X] Why is it important to test our apps?

To minimize the risk of bugs in our coding. 