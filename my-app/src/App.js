/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import "./App.css";
import reactLogo from "./download.png";

export default function App() {
  return (
    <>
      <header>
        <img src={reactLogo} alt="React Logo" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
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
