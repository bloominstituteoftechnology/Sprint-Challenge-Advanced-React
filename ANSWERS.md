- [ ] Why would you use class component over function components (removing hooks from the question)?
you have methods that give you greater control over your programs lifecyle
- [ ] Name three lifecycle methods and their purposes.
componentDidMount() runs immediatly after a component is put on the tree. -good time to make any get requests and setState

componentDidUpdate() happens after an update is made to the dom also a good time to make a network request and anything else you might want to do after an update like making a copy of current state

componentWillUnmount() happens right before a component is being removed from the tree, this is the perfect time to cancel network requests and do other cleaning up
- [ ] What is the purpose of a custom hook?
D.R.Y. coding
- [ ] Why is it important to test our apps?
well for one thing you want to make sure it works in any usecase the user might throw at it
thourough automatic testing can help ensure this