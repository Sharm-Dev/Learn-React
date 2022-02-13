# Quiz!

# 1. What is a React component?

Its independent and reusable bits of code, Components come in two types, Class compoents and Function components 

# 2. What's wrong with this code?

The function name needs to begin with a capital letter 
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

# 3. What's wrong with this code?

In the ReactDOM.render the calling of the function need to be in brackets like <header /> and not Header()
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```