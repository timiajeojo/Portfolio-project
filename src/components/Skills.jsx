import React from 'react';

export default function Skills() {
  const skills = [
    "Machine Learning", "Deep Learning", "PyTorch", "Agentic AI", "Multi-agent Workflows",
    "Langchain", "LangGraph", "Pydantic AI", "LangSmith", "Giskard", "RAGs",
    "Memory Systems", "FastAPI", "SQLAlchemy", "Pydantic", "Streamlit"
  ];
  
  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}