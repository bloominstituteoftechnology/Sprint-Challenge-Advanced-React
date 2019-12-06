- [ ] Why would you use class component over function components (removing hooks from the question)?

So you can set state. Function components prior to hooks were stateless components.

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount - called the first time the component is rendered and here is where any data should be loaded like from an api

2. componentDidUpdate - called when props or state has changed and we want those changes to be reflected on the DOM

3. componentWillUnmount - called when the component will be unmounted or 'deleted' and here is where you would do 'clean-up' such as removing event listeners.

- [ ] What is the purpose of a custom hook?

To abstract non-visual logic and also allow it to be modularized.

- [ ] Why is it important to test our apps?

To ensure our expectations and assumptions about our program are met. Testing also helps identify edge cases and potentially identify behaviors / functionality that we need but didn't presuppose.
