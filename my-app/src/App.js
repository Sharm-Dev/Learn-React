/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Fun to learn</li>
        <li>Enjoy the way the code is more manageable</li>
        <li>What to understand how to use Props and Routers</li>
      </ol>
      <footer>
        <small>© 2022 Sharm-Dev development. All rights reserved.</small>
      </footer>
    </>
  );
}
