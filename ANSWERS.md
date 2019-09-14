- [ ] Why would you use class component over function components (removing hooks from the question)?

        *Gives additional functionality
        * Can hold state
-----------------------------------------------------------------------------------------------

- [ ] Name three lifecycle methods and their purposes.

Mounting (Birth Phase) :
    + Component is being built out.
    + Constructor function called.
    + State data initialized
    + Props can be received and placed on the component as state
    + Render is invoked and transforms JSX elements into DOM elements.
    + componentDidMount called.

Updating (Growth Phase):
    + Props received from parent will update child component
    + this.setState influences any changes to state, calling a render method by default
    + componentDidUpdate method called

Unmounting(Death Phase):
    + componentWillUnmount method called
---------------------------------------------------------------------------------------------

- [ ] What is the purpose of a custom hook?

    Custom hooks allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again.  You can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.

---------------------------------------------------------------------------------------------

- [ ] Why is it important to test our apps?

It is important to test our apps because:
    + You can find bugs in the code faster.
    + You can make changes to account for any edge cases.
    + It provides documentation for the code.
    + Enables us to write more testable and better code
    + Makes the code much easier to understand