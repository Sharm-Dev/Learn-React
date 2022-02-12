# Quiz 

# My answers 


# 1. Why do we need to `import React from "react"` in our files?

If you use React, import React from 'react' is the first thing that you write in your code but if you have created a new react app using creat-react-app recently, you might have noticed that there is no import React statement at the top and your code works just fine. So, How's that working?

Well, previously you had to import React because the JSX is converted into regular Javascript that use react's React.createElement method.
JSX conversion
But, React has introduced a new JSX transform with the release of React 17 which automatically transforms JSX without using React.createElement. This allows us to not import React, however, you'll need to import React to use Hooks and other exports that React provides. But if you have a simple component, you no longer need to import React. All the JSX conversion is handled by React without you having to import or add anything.

This new JSX transform is also supported in older versions of React so you can start using them even if you don't use React 17.


# 2. If I were to console.log(page) in index.js, what would show up?


The console would of shown an object of what react had access too.


const page = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

# 3. What's wrong with this code:

There is no parent element
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```


# 4. What does it mean for something to be "declarative" instead of "imperative"?

imperative is how to do things, example like in vanilla js, you say create an element, then say do this to it, and put it here. 

declarative is what to do, example like in react, you create what you need, and your react setup knows where you want to put what you have created. 

# 5. What does it mean for something to be "composable"?

A type of thing is composable when several instances can be combined in a certain way to produce the same type of thing.