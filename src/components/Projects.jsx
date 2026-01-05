import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Segment",
      description: "Segment is a platform I designed to connect people through books. The concept was born from recognizing the need for accessible literature in communities and creating a system where book owners could easily share their collections with eager readers.",
      tags: ["React", "Tanstack Start", "superbase", "uploadthing"],
      website: "https://segment-book.vercel.app/",
      source: "https://github.com/timiajeojo/"
    },
    {
      title: "Wecare Health Management System",
      description: "Wecare is a healthcare management system built to simplify appointment scheduling and patient record tracking. It provides a user-friendly interface for both patients and healthcare providers, ensuring seamless communication and efficient care delivery.",
      tags: ["NextJS", "SQlite", "Drizzle ORM",],
      website: "https://wecare-med.vercel.app/sign-in",
      source: "https://github.com/timiajeojo/"
    },
    {
      title: "QR Tool",
      description: "A simple yet powerful tool for generating custom QR codes instantly. You can add links or text, choose colors, and download your QR in high quality. It’s fast, lightweight, and perfect for personal or business use. Built with a clean design optimized for mobile and desktop users.",
      tags: ["NextJS", "Tailwind CSS", "Radix UI", "Redux",],
      website: "https://tool.qr.gauravsingh.co.in/",
      source: "https://github.com/timiajeojo/"
    },
    {
      title: "Chat with PDF",
      description: "A web app that lets you upload any PDF and chat directly with its contents. It uses AI to read and understand the document, giving accurate, context-based answers. Perfect for summarizing long files or finding key details quickly.",
      tags: ["React", "NextJS", "Postgres", "Typescript",],
      website: "https://chat-with-pdf-zeta-six.vercel.app/",
      source: "https://github.com/timiajeojo/"
    },
    {
      title: "Aiba Personal Finance & Expense Tracking App",
      description: "A modern fintech mobile application designed to help users track income, monitor expenses, and visualize spending patterns in real time. The app provides a clean, intuitive interface that makes financial management simple, transparent, and actionable",
      tags: ["React", "Typescript", "Tailwind CSS", "Recharts", "Framer Motion"],
      paper: "www"
    }
  ];

  return (
  <section id="projects" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out my latest work</p>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tidx) => (
                  <span key={tidx} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.website && (
                  <a href={project.website} className="project-link-button" title="Visit Website">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Website
                  </a>
                )}
                {project.source && (
                  <a href={project.source} className="project-link-button" title="View Source">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                )}
                {project.paper && (
                  <a href={project.paper} className="project-link-button" title="Read Paper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
}