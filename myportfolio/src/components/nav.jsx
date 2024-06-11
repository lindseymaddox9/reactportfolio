import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
    
      <nav>
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
