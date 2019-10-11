- [ ] Why would you use class component over function components (removing hooks from the question)?

        Class Components would be used over function components because:
            + you get the properties 'this.state' to read state and "this.setState' to update state.
            + it extends the base React class from the React library.

-----------------------------------------------------------------------------------------------

- [ ] Name three lifecycle methods and their purposes.
        Mounting(Birth Phase)
            + Constructor function called and state data initialized.
            + Can receive props and place them on the component as state.
            + Render is invoked.
            + JSX elements tanformed into DOM elements.
            + componentDidMount is invoked.

        Updating(Growth Phase)
            + New props from parent will update the child.
            + Changes in state need to go through 'setState', whick called a render by default.
            + componentDidUpdate invoked.

        Unmounting( Death Phase)
            + componentWillUnmount invoked.

------------------------------------------------------------------------------------------------

- [ ] What is the purpose of a custom hook?
    
        A custom hook is used to extend multiple pieces of stateful logic.

------------------------------------------------------------------------------------------------

- [ ] Why is it important to test our apps?

        It is important to test apps because:
            + you can find bugs faster.
            + it makes you consider edge cases.
            + it acts as documentation for the code.