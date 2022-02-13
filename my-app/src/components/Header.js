import "../App.css";
import reactLogo from "../download.png" 

export default function Header() {
    return (
      <header className="header">
        <img src={reactLogo} alt="React Logo" />
        <nav>
          <ul className="nav-items">
            <li className="list-items">
              <a href="#">Pricing</a>
            </li>
            <li className="list-items">
              <a href="about">About</a>
            </li>
            <li className="list-items">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}