// import logo from './logo.svg';
import './App.css';
import reactLogo from './download.png'

function App() {
  return (
    <div className="App">
      <header>
        <img src={reactLogo} alt="react logo"/>
      </header>
      <section>
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was orginally created by Jordon Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </section>
    </div>
  );
}

export default App;


 /* Challenge: Starting from scratch, build and render the HTML for our
      section project. Check the Google slide for what you're trying to build.
      We'll be adding styling to it later. Hints: * The React logo is a file in
      the project tree, so you can access it by using `src="./react-logo.png" in
      your image element * You can also set the `width` attribute of the image
      element just like in HTML. In the slide, I have it set to 40px */