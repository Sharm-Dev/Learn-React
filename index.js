// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/


const page = (
    <nav>
        <h1>New Website</h1>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(
    page,document.getElementById("root")
)