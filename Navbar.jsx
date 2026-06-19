import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Serenova Spa
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/therapists">
            Therapists
          </Link>
        </li>

        <li>
          <Link to="/bookings">
            My Bookings
          </Link>
        </li>
      </ul>

      <Link to="/login">
        <button className="nav-btn">
          Create Account
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;