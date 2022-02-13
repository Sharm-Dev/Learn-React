/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import "./App.css";
import reactLogo from "./download.png"

export default function App() {
  return (
    <>
      <img src={reactLogo} alt="React Logo" />
      <h2>Why I'm excited to be learning React :)</h2>
      <ol>
        <li>Fun to learn</li>
        <li>Enjoy the way the code is more manageable</li>
        <li>What to understand how to use Props and Routers</li>
      </ol>
    </>
  );
}

