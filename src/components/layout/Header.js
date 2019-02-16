import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header(props) {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
