import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function Sidebar() {
  /**
   * Minimal sidebar placeholder component for user info/profile area.
   * Visually themed for ColorCraft and ready for future user info implementation.
   */
  return (
    <aside className="sidebar sidebar--right" aria-label="User info sidebar">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          marginTop: "12px",
          color: "var(--text-secondary)",
          fontWeight: 500,
        }}
      >
        {/* User avatar or icon placeholder */}
        <div
          style={{
            width: "53px",
            height: "53px",
            background: "var(--accent-gradient)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.1rem",
            color: "var(--primary-color)",
            boxShadow: "0 2px 8px 0 var(--shadow-color)",
            border: "2.5px solid var(--base-light)",
          }}
          title="User area"
        >
          <span role="img" aria-label="profile">🎨</span>
        </div>
        {/* Placeholder text */}
        <span style={{ color: "var(--text-secondary)", fontSize: "1.03rem" }}>
          User sidebar
        </span>
        <span
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.88rem",
            opacity: 0.47,
            textAlign: "center",
            maxWidth: 116,
          }}
        >
          Profile & info coming soon!
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
