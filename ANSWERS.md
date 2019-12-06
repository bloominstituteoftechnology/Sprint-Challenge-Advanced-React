 Why would you use class component over function components (removing hooks from the question)? A: For practice in case I need to refactor legacy code or if the company I work for in the future works only in class components. It also allows some methods the React Dev team developed for the react life cycle.

 Name three lifecycle methods and their purposes. 
 A:componentDidMount(){ fetching data, and setting to state with setState() }

render(){ renders what's inside the function to the browser }

constructor(){ sets the initial state values, and allows to pass on that to child components with super(); }

 What is the purpose of a custom hook? 
 A: To make logic very reusable (defining stateful logic), it's like how we make components to resue and fill with same shaped data so we don't have to rewrite it everytime ourselves.

 Why is it important to test our apps? 
 A: Surfaces bugs faster. Reduces the risk of regressions. Allows us to trust the code. Makes us think about the edge cases. Acts as a safety net when making changes or refactoring. Acts as documentation for the code. Encourages us to write more testable (better!) code.
