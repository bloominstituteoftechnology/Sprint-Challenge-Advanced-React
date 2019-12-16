- [ ] Why would you use class component over function components (removing hooks from the question)?

    State can be declared in one placed and referenced throughout the app

- [ ] Name three lifecycle methods and their purposes.

componentDidMount- only called once so it’s a good place or API calls, and it signals that the component and all its sub-components have rendered properly. 

componentDidUpdate- when state changes it re-renders DOM elements 

componentWillUnMount- used to add any clean-ups before component destroys

- [ ] What is the purpose of a custom hook?

To make dry state manipulators that can be used through-out the app

- [ ] Why is it important to test our apps?

When an app is released without all minor bugs being addressed it can cause serious issues when trying to update the code base and it will make it difficult to find and correct the issues.
