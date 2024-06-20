import Nav from "./nav";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <section className="footer">
      <h2>My email and phone number </h2>
      <p>lindseymaddox9@gmail.com OR 806-663-1450</p>
      <ul className="icons">
        <li>
          <Link to="/">Home Page</Link>
          <a href="https://github.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Footer;
