- [ ] Why would you use class component over function components (removing hooks from the question)?
When working with legacy code bases
When it is necessary/helpful to have internal state (built in to classbased components)
When it is necessary to have more control over when/whether a component updates

- [ ] Name three lifecycle methods and their purposes.
1. componentDidMount - called as soon as the render method is called the first time. Holds code/functions it contains until mounting is complete.
2. componentDidUpdate - Called when changes are made to the component - ex. when state changes
3. componentWillUnmount - Called when the component no longer needs to be rendered and removed from the DOM. Can perform 'clean-up'.

- [ ] What is the purpose of a custom hook?
To create reusable logic to use throghout a single app or across several. Helps follow the rule of D.R.Y.

- [ ] Why is it important to test our apps?
So we can know where and why the application fails and to make it easier/safer to maintain the code over time.-