 Generally speaking, class style is better for components that will be managing their own state (‘stateful components’) and functional style is better for components that will merely be receiving props from another component (‘functional components’). However, even functional components can now manage state with hooks. So it may be that the main remaining reason for using class components is lifecycle control (e.g., make sure that a function only runs when the page finishes loading, etc.). 

- [ ] Name three lifecycle methods and their purposes.

	componentDidMount - only gets called once--when the component is mounted...good for async so you can trigger a re-render via setState when you get data back from an ajax call…
	constructor--sets initial state & configures component


- [ ] What is the purpose of a custom hook?

DRYing out your code by creating repeatable hook logic 

- [ ] Why is it important to test our apps?

because they might not work and testing will enable you to discover that they do not work =  ) 