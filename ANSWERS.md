- [x] Why would you use class component over function components (removing hooks from the question)?


If you were assigned or hired to maintain an application that is written in class based components, that would be a big reason to understand class components and an instance where you would use them over functional components. Also, you can use class components over function components if you prefer it. Functional components are newer and could become superior in performance to class components in future versions of React as well.

- [x] Name three lifecycle methods and their purposes.

componentDidMount()
- componentDidMount is a lifecycle methods that runs after a component is mounted in the DOM. Useful for API calls
componentDidUpdate()
- This lifecycle method will run after updating occurs. We can use it to update the DOM when a component or state updates.
componentWillUnmount()
- This lifecycle method runs after a component is unmounted from the DOM. This method is useful for any clean up that needs to be done after the component is unmounted. Removing API calls, event listeners etc.

- [x] What is the purpose of a custom hook?

Custom hook allows us to build our own state management logic in a function. We can give hooks much more power and functionality by adding our own logic instead of using only pre-designed hooks.


- [x] Why is it important to test our apps?

It is important to test our apps to check from expected behavior and unexpected behavior. We can build tests around specific components when we are designing them to ensure we are getting the return we desire from them. This helps immensely when it comes to debugging complex applications. We can write these tests to check complex systems allowing developers to catch the bugs much easier.

