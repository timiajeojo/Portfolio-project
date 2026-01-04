import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "ContextMemory",
      description: "A memory system for AI apps that remembers context across conversations. Extracts and stores facts, uses semantic search for retrieval, handles deduplication intelligently.",
      tags: ["Python", "OpenAI", "PostgreSQL", "Semantic Search", "Vector Database", "RAG", "Graph DB", "PyPI"],
      website: "https://pypi.org/project/contextmemory/",
      source: "https://github.com/samiksha0shukla/context-memory"
    },
    {
      title: "AIxAI",
      description: "MCP-powered system that generates Pydantic AI agents using multi-agent LangGraph workflows. Crawls and chunks docs, stores in Supabase with OpenAI embeddings.",
      tags: ["Agentic AI", "MultiAgent Workflow", "Pydantic AI", "LangGraph", "Supabase", "Agentic RAG", "MCP", "Python"],
      website: "https://aixai-mkfm.onrender.com/",
      source: "https://github.com/samiksha0shukla/AIxAI"
    },
    {
      title: "HomeSage",
      description: "Smart companion for real estate price prediction and analytics. Leverages ML for accurate predictions and personalized property recommendations.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Data Visualization", "Data Engineering", "Feature Engineering", "EDA", "Prediction Models"],
      source: "https://github.com/samiksha0shukla/HomeSage"
    },
    {
      title: "n8n",
      description: "Visual workflow automation platform built with React and FastAPI. Design, connect, and automate workflows in real time with a drag-and-drop interface.",
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
