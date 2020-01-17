- [ ] Why would you use class component over function components (removing hooks from the question)?

Use class components if you're using state or you need access to lifecycle hooks. Also, for legacy code, some companies may have code still containing class components and you will have to be able to read, use and work with them if the need arises.

- [ ] Name three lifecycle methods and their purposes.

Mounting-birth of the component, this is where component did mount can be called. Your render method is invoked.
Updating-growth of the component, this is where use state can be used and should component update, a call to render is forced.
Un-Mounting-death of the component, , it is when the component is taken of the screen, component will unmount is called and clean up is done.

- [ ] What is the purpose of a custom hook?

They make it easy to reuse stateful logic throughout a project.

- [ ] Why is it important to test our apps?

So we know the render is successful and minimizes risk of errors when code is being pushed into production.
