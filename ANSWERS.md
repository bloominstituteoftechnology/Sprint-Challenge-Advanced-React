- [ ] Why would you use class component over function components (removing hooks from the question)?
    Class components have access to the react life cycle methods
    as well as having the ability to hold state (if ignoring useState).

- [ ] Name three lifecycle methods and their purposes.
    Constructor: Initializes component in memory.
    componentDidMount: Function that runs after a component mounts successfully, NOT when it his created in memory.
    componentWillUnmount: Last dying breath of a component, typically suited for cleaning up.

- [ ] What is the purpose of a custom hook?
    To add extra functionality on top of simply reading and writing to state. This is just javascript and can be used in countless powerful ways.

- [ ] Why is it important to test our apps?
    To ensure our users aren't doing the testing FOR us. Testing will always happen, it is best to do the testing in development rather than in deployment.