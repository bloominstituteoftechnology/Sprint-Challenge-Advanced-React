- [ ] Why would you use class component over function components (removing hooks from the question)?

If I use any life cycle methods, it would be best to go with a class component instead of a function component.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() runs after the first-render of the component, componentDidUpdate() runs everytime the component's props or state changes and componentWillUnmount() runs before the component is removed from the DOM.

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

- [ ] Why is it important to test our apps?

Component tests validate your contract between the component and anything that will ever be integrated with it.
You can deploy with confidence, knowing that your component really does do what you’ve said that it does. You’ve got repeatable evidence that your component holds up its end of any deal.