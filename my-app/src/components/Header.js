import "../App.css";
import reactLogo from "../download.png" 

export default function Header() {
    return (
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
    );
}