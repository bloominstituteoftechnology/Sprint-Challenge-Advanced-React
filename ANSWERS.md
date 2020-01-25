- [1] Why would you use class component over function components (removing hooks from the question)?

 I would use classes because of the ability to handle state.

- [2] Name three lifecycle methods and their purposes.

1. Mounting - Mounts the component to the virtual DOM
2. Updating - When getting new props or setting state (also when force updating, though I, for one, would never) this phase will trigger a re-render.
3. Unmounting - the death cycle of a component, when it is removed from the virtual DOM and clean up is performed

- [3] What is the purpose of a custom hook?

To allow you to utilize stateful logic again and again without having to rewrite the code. (Reusability and scalability)

- [4] Why is it important to test our apps?

Because you don't want your end user figuring out that it's broken before you do! Testing can avoid costly problems and prevent future issues.