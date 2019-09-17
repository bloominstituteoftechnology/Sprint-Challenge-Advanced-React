- [ ] Why would you use class component over function components (removing hooks from the question)?

Because it provides a lot of functionality that you wouldn't normally get by using function component (using hooks 
Is what provides functionality when using function components).

- [ ] Name three lifecycle methods and their purposes.

1. componentWillMount() is used in the unmounting phase when the component is removed from the screen and is used to "clean things up".
2. render() is called during the mounting and  updating phase when a component's data is being being changed/updated
3. shouldComponentUpdate() is used when you want to stop a component from calling render() to update the date

- [ ] What is the purpose of a custom hook?

A custom hook is a hook that you are building yourself, doing so allows you to apply stateful logic and non-visual behavior throughout 
the components by reusing the same custom hook you built.

- [ ] Why is it important to test our apps?

It helps us to be more efficient at catching bugs, reducing regression, while acting as a safety net and documentation as we make changes 
and helps us to trust the code and write better/testable code.