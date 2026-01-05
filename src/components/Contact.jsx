import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          Want to chat? Just shoot me an email at{' '}
          <a href="mailto:timiajeojo@gmail.com" className="about-link">timiajeojo@gmail.com</a>
          {' '}and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </section>
  );
}