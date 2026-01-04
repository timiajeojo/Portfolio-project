import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          AI/ML Engineer passionate about building intelligent systems. Currently working on multi-agent workflows and building{' '}
          <a href="https://github.com/samiksha0shukla/context-memory" className="about-link">ContextMemory</a>, 
          a memory system for AI applications. I specialise in Machine Learning, Deep Learning, NLP, and backend development with Python and FastAPI.
        </p>
      </div>
    </section>
  );
}