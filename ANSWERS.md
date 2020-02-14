- [ ] Why would you use class component over function components (removing hooks from the question)?

  A: For two reasons: i) to get access to state and setState methods. ii) to get access to lifecycle methods like 

- [ ] Name three lifecycle methods and their purposes.

  A: i) **render()** is used to render the component to the UI. It returns the JSX that we want attached          to the DOM.
     ii) **constructor()** method is used to set up the data a component will utilize on state. Any props          passed to a class component must also be passed in through the constructor.
     iii) **componentDidMount()** is used to update the UI after a component has been mounted. We can use the setState function inside of this method.

- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?