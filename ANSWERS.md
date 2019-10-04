* Why would you use class component over function components (removing hooks from the question)?
    * Use class components when you want to use state. Class components extend the react component and allows you to use setState as oppose to functional components remove state and must use react hooks to use state. Also if you want to use the React life cycle you will use class components which extend the react component which allows you to use cDM, cDU, cWU.
*  Name three lifecycle methods and their purposes.
    * ComponentDidMount
        * Is the birthing phase. This is where you build your state. All your data will also be defined on the super and constructor.
    * ComponentDidUpdate
        * Is the Growth phase. Your components setState will happen here. You will update and force a call to render.
    * ComponentWillUnMount
        * This is the death phase. You will remove state from the window - such as a widow resize. 
*  What is the purpose of a custom hook?
    * Custom hooks allows you to use stateful logic that is built into components in a reusable manner
*  Why is it important to test our apps?
    * Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional, it should be a part of every developer’s workflow. The feature is not done until it’s fully tested!