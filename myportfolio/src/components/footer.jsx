import Nav from "./nav";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <section className="footer">
      <h2>Footer</h2>
      <ul className="icons">
        <li>
          <Link to="/">Home</Link>
          <a href="http://github/lindsey">
            <img src="relative path to image in image folder" />
          </a>
        </li>
        <li>
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hM-Oqitw2GhTwPQpfxvG-F-0xSgMO_l2vg&s">
            <img src="relative path to image in image folder" />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Footer;
