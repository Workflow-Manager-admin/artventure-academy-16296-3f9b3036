import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

// PUBLIC_INTERFACE
function Navigation() {
  /** Renders the top navigation bar for the ArtVenture Academy. */
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link className="logo" to="/" tabIndex={0}>
          <span className="logo-symbol">&#9737;</span>
          <span>ArtVenture Academy</span>
        </Link>
        <div className="nav-links" role="navigation" aria-label="Main navigation">
          <Link className="nav-link" to="/lessons">Lessons</Link>
          <Link className="nav-link" to="/gallery">Gallery</Link>
          <Link className="nav-link" to="/challenges">Challenges</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
        </div>
        {/* Placeholder for user avatar/profile */}
        <div className="navbar-user">
          <div className="avatar-placeholder" title="User Profile">
            <span role="img" aria-label="user">🎨</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
