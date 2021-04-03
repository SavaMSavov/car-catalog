import "./Header.css";

import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
  return (
    <header id="site-header">
      <nav className="navbar">
        {isAuthenticated ? (
          <section className="navbar-dashboard">
            <div className="first-bar">
              <Link to="/">BMW Catalog</Link>
              <Link to="/my-cars" className="button" href="#">
                My Cars
              </Link>
              <Link to="/add-car" className="button">
                Add Car
              </Link>
            </div>
            <div className="second-bar">
              <ul>
                <li>Welcome, {username}!</li>

                <li>
                  <Link to="/logout">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        ) : (
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
        )}
      </nav>
    </header>
  );
};

export default Header;
