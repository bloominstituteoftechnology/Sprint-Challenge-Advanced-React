- [X] Why would you use class component over function components (removing hooks from the question)?
    
    `I would personally choose to use class components over funtion components because all of your state is in one file. I think it is easier to read, and easier to know where everything is being passed around.`

- [X] Name three lifecycle methods and their purposes.

    `componentDidMount: called at the very beggining of a components life. It signals that the component have rendered properly. This makes it available in the DOM and is the best place to make API calls. Really bring the component to life.`

    `render: is what makes everything display properly on a users screen. You can impliment JSX in a render and also call any components and props in the order you would like them to appear on a users screen.`

    `componentWillUnmount: this is the last function that will be called in a components lifecycle :( It is used to perform clean up for any DOM elements or timers created during the componentWillMount.`

- [X] What is the purpose of a custom hook?

    `so that you can reuse stateful logic/ everything that is contained in that custom hook`

- [X] Why is it important to test our apps?

    `There are a few reasons. One of them is so that if someone comes into you app and makes changes, you can just run your tests and see if they are successful rather than going through manually. Also testing helps with knowing whether the app can be successfully downloaded, executed and interacted with the back-end. Helps to know that you app is functional.`