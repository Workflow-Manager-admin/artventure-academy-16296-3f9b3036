import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Lessons from "./pages/Lessons";
import Gallery from "./pages/Gallery";
import Challenges from "./pages/Challenges";
import Profile from "./pages/Profile";
import Sidebar from "./Sidebar";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for ArtVenture Academy.
   * Sets up layout and React Router navigation.
   */
  return (
    <Router>
      <div className="app">
        {/* Top Navbar with Navigation Links */}
        <Navigation />

        {/* Main Layout */}
        <div className="main-layout">
          {/* Optional Left Sidebar Placeholder */}
          <aside className="sidebar sidebar--left">
            {/* Reserved for navigation, future expansions, e.g. filters, lesson menu */}
          </aside>

          {/* Main Content Area with Routing */}
          <main className="main-content" tabIndex={-1}>
            <Routes>
              <Route
                path="/"
                element={
                  <section className="welcome-banner">
                    <div className="subtitle">Ignite your creativity</div>
                    <h1 className="title">Welcome to ArtVenture Academy</h1>
                    <div className="description">
                      Explore step-by-step interactive lessons, share your masterpieces, and challenge yourself with the ColorCraft experience.
                    </div>
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
                  </section>
                }
              />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          {/* Right Sidebar: User info/profile placeholder for ColorCraft */}
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
