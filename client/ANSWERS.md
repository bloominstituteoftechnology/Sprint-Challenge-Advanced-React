- [ ] Why would you use class component over function components (removing hooks from the question)?
       
        Removing hooks from the equation, class components are best when you need to fetch and/or store data - basically any component that acts as a 'container' for your data and other components. Functional components are better for displaying the data you pulled in...things like card and list components. 

- [ ] Name three lifecycle methods and their purposes.

    1. componentDidMount - called in the birth/mounting phase; sets up state.
    2. componentDidUpdate - called in the growth/updating phase; manipulates state and calls for a rerender.
    3. componentWillUnmount - called in the death/unmounting phase; cleans up after the component is removed from the display. 

- [ ] What is the purpose of a custom hook?

    Custom hooks allow us to build a hook from scratch which can then be reused across our application. Custom hooks keep our code DRY and eliminate the need to write classes. 

- [ ] Why is it important to test our apps?

    Testing forces us to write neater, simpler code with clear functionality. It also serves as a secondary form of documentation and an insurance policy against bugs caused by later updates. 