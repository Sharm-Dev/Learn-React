// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

console.log(page);

ReactDOM.render(page, document.getElementById("root"));

//Below is the result from the console.log

{type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}
