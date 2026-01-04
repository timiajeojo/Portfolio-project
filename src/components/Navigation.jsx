import React from 'react';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">Samiksha Shukla</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}