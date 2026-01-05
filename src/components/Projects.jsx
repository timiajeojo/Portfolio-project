import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Segment",
      description: "Segment is a platform I designed to connect people through books. The concept was born from recognizing the need for accessible literature in communities and creating a system where book owners could easily share their collections with eager readers.",
      tags: ["Python", "OpenAI", "PostgreSQL", "Semantic Search", "Vector Database", "RAG", "Graph DB", "PyPI"],
      website: "https://pypi.org/project/contextmemory/",
      source: "https://github.com/samiksha0shukla/context-memory"
    },
    {
      title: "Wecare Health Management System",
      description: "Wecare is a healthcare management system built to simplify appointment scheduling and patient record tracking. It provides a user-friendly interface for both patients and healthcare providers, ensuring seamless communication and efficient care delivery.",
      tags: ["Agentic AI", "MultiAgent Workflow", "Pydantic AI", "LangGraph", "Supabase", "Agentic RAG", "MCP", "Python"],
      website: "https://aixai-mkfm.onrender.com/",
      source: "https://github.com/samiksha0shukla/AIxAI"
    },
    {
      title: "QR Tool",
      description: "A simple yet powerful tool for generating custom QR codes instantly. You can add links or text, choose colors, and download your QR in high quality. It’s fast, lightweight, and perfect for personal or business use. Built with a clean design optimized for mobile and desktop users.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Data Visualization", "Data Engineering", "Feature Engineering", "EDA", "Prediction Models"],
      source: "https://github.com/samiksha0shukla/HomeSage"
    },
    {
      title: "Chat with PDF",
      description: "A web app that lets you upload any PDF and chat directly with its contents. It uses AI to read and understand the document, giving accurate, context-based answers. Perfect for summarizing long files or finding key details quickly.",
      tags: ["React", "FastAPI", "Pydantic", "SQLAlchemy", "Python", "Workflow Automation", "Real-time"],
      source: "https://github.com/samiksha0shukla/n8n"
    },
    {
      title: "Transformers Research",
      description: "Deep dive into 'Attention Is All You Need' paper. Implementing transformer architecture from scratch, studying self-attention mechanisms and positional encodings.",
      tags: ["PyTorch", "Transformers", "Self-Attention", "NLP", "Deep Learning", "Research"],
      paper: "https://arxiv.org/pdf/1706.03762"
    },
    {
      title: "Tiny Recursive Model",
      description: "Researching efficient recursive model architectures and parameter-efficient approaches for LLMs. Exploring recursive computation and memory optimization.",
      tags: ["PyTorch", "LLMs", "Model Optimization", "Recursive Networks", "Deep Learning", "Research"],
      paper: "https://arxiv.org/pdf/2510.04871"
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
                  <a href={project.website} className="project-link">Website</a>
                )}
                {project.source && (
                  <a href={project.source} className="project-link">Source</a>
                )}
                {project.paper && (
                  <a href={project.paper} className="project-link">Paper</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
