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
    <section id="projects" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 mb-12">Check out my latest work</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tidx) => (
                  <span key={tidx} className="px-3 py-1 bg-gray-900 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.website && (
                  <a href={project.website} className="text-blue-400 hover:underline text-sm">Website</a>
                )}
                {project.source && (
                  <a href={project.source} className="text-blue-400 hover:underline text-sm">Source</a>
                )}
                {project.paper && (
                  <a href={project.paper} className="text-blue-400 hover:underline text-sm">Paper</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}