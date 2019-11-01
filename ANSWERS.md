# Answers

- [x] Why would you use class component over function components (removing hooks from the question)?

   Removing hooks from our possible tools we would need to use Class Components to create and manage state inside the component. We also would not have access to the lifecycle methods.

- [x] Name three lifecycle methods and their purposes.

  Three Lifecycle methods:

  1.) componentWillMount : This 1lifecycle methods's purpose is to execute some logic after the component is rendered the first time. This useful for fetching intial data via an api call or to set up event listeners.

  2.)componentDidUpdate: This lifecycle methods's purpose is to execute logic after props change, state changes, or if you're dangerous forceUpdate() call. This is useful for fetching additional data based on the state or prop changes.

        3.)componentWillUnmount: This lifecycle methods's purpose is to execute logic after the component is done rendering. This is useful for clenaup up event listeners or anything you would use return effect for.

- [x] What is the purpose of a custom hook?

  The purpose of a custom hook is to make it easier to reuse stateful logic between components. React doesn't have a way to attach resuable behavior to a component. Render Props and HOC's were the way that React was trying to solve this. With the implementation of Hooks this allows you to reuse stateful logic without changing the component hieracrchy.

- [x] Why is it important to test our apps?

  It is important to test our apps because testing surfaces bugs faster, reduces the risk of regressions, give's us more confidence in our code and acts as a safety net when making changes and also is documentation for the code.
  e.
  
