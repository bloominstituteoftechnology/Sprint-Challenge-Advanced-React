-   [ ] Why would you use class component over function components (removing hooks from the question)?
        I wouldn't use a class component over a functional component. The only reason we are really learning class components is so that we recognize them in legacy code. The useState hook allows us the use of State in a functional component, and the useEffect hook allows us the use of lifecycle events in functional components (both of which were missing before the latest update.) Before the most recent update, you would only use a functional component if you were writing a presentational component that didn't need access to state or lifecyle. Otherwise, you would have wanted to us a class component. Now, there really isn't a reason to use class component.s

-   [ ] Name three lifecycle methods and their purposes.

    1. Mounting: when the component is being built. Defining the intitial data that you'll have access to. Render method is invoked, as well as componentDidMount.
    2. Updating: setState can be used to change the component's state data, forcing a new render call. shouldComponentUpdate is a method one could use her to stop a component from rendering if necessary.
       3)UnMounting: Component is removed from screen. componentWillUnmount is called and can be used for any cleanup.

-   [ ] What is the purpose of a custom hook?
        Custom hooks reuse stateful logic and help us keep our code DRY.

-   [ ] Why is it important to test our apps?
        It is important to test our apps to reduce bugs, reduce risk of regression, to test our code, and to encourage us to document and write better code.
