import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <Link to="/">Dashboard</Link>
            <a className="button" href="#">
              My Cars
            </a>
            <Link to="/add-car" className="button">
              Add Car
            </Link>
          </div>
          <div className="second-bar">
            <ul>
              <li>Welcome, Pesho!</li>
              <li>
                <a href="#">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="navbar-anonymous">
          <ul>
            <li>
              <Link to="/register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
