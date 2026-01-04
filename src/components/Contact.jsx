import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          Want to chat? Just shoot me a dm{' '}
          <a href="https://x.com/Samiksha2908" className="about-link">with a direct question on twitter</a>
          {' '}and I'll respond whenever I can. I will ignore all soliciting.
        </p>
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/samiksha-shukla-7b2207217/" className="contact-button contact-button-primary">
            LinkedIn
          </a>
          <a href="https://x.com/Samiksha2908" className="contact-button contact-button-secondary">
            X
          </a>
        </div>
      </div>
    </section>
  );
}