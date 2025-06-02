import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      {/* Fixed Top Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo" tabIndex={0}>
            <span className="logo-symbol">&#9737;</span>
            <span>ArtVenture Academy</span>
          </div>
          <div className="nav-links" role="navigation" aria-label="Main navigation">
            <a className="nav-link" href="#lessons">Lessons</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="nav-link" href="#challenges">Challenges</a>
            {/* <a className="nav-link" href="#profile">Profile</a>  // For future expansion */}
          </div>
          {/* Placeholder for user avatar/profile */}
          <div className="navbar-user">
            <div className="avatar-placeholder" title="User Profile">
              <span role="img" aria-label="user">🎨</span>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Layout */}
      <div className="main-layout">
        {/* Optional Left Sidebar Placeholder */}
        <aside className="sidebar sidebar--left">
          {/* Reserved for navigation, future expansions, e.g. filters, lesson menu */}
        </aside>

        {/* Main Content Area */}
        <main className="main-content" tabIndex={-1}>
          <section className="welcome-banner">
            <div className="subtitle">Ignite your creativity</div>
            <h1 className="title">Welcome to ArtVenture Academy</h1>
            <div className="description">
              Explore step-by-step interactive lessons, share your masterpieces, and challenge yourself with the ColorCraft experience.
            </div>
          </section>
          {/* Routes or feature sections will be rendered here in the future */}
          <div className="feature-section">
            <div className="feature-card">
              <h2>Lessons</h2>
              <p>Discover a wide variety of art lessons built to help you grow from a beginner to a master artist.</p>
            </div>
            <div className="feature-card">
              <h2>Gallery</h2>
              <p>Browse, admire, and share artwork from the community, or upload your own for others to enjoy.</p>
            </div>
            <div className="feature-card">
              <h2>Challenges</h2>
              <p>Participate in creative art challenges and push your skills with fun prompts every week.</p>
            </div>
          </div>
        </main>

        {/* Optional Right Sidebar Placeholder */}
        <aside className="sidebar sidebar--right">
          {/* Reserved for user info, notifications, or extra resources */}
        </aside>
      </div>
    </div>
  );
}

export default App;