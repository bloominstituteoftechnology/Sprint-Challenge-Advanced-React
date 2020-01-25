- [ X] Why would you use class component over function components (removing hooks from the question)?
There are some reasons for using class component over functional components:
Class components have life cycle events that is not present in functional components
Functional components are stateless, class components use this.state and state can be passed from one component to another.
Some companies use class components instead of functional components, so it is better to learn class component so that code can be read easily and modified if desired.

- [ X] Name three lifecycle methods and their purposes.
Three lifecycle methods are 1) ComponentDidMount 2) ComponentDidUpdate and 3) ComponentWillUnmount
1)	Component Did Mount:
This is the phase where the component takes birth, render method is invoked.
2)	ComponentDid Update:
This is the growth phase of the component set state can be used at this stage and API calls can be made, shouldComponentUpdate method can be used at this stage to stop the component from rendering.
3)	ComponentWillUnmount: This is the death phase of the component, component is removed from the screen and its life cycle is ended.

- [ X] What is the purpose of a custom hook?
Custom hooks are used to apply stateful logic to code and can be customized according to need. The code using custom hook is reusable and can manage event listeners.

- [ ] Why is it important to test our apps?
Testing is important because of the following reason:
Bugs can be handled effectively, Reduces the risk of regression, allow us to trust code, acts as a safety net, makes us write better code that is testable, acts as documentation for the code.