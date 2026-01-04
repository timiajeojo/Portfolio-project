import React from 'react';

export default function Skills() {
 const skills = [
  "Machine Learning", "Deep Learning", "PyTorch", "Agentic AI", "Multi-agent Workflows",
  "Langchain", "LangGraph", "Pydantic AI", "LangSmith", "Giskard", "RAGs",
  "Memory Systems", "FastAPI", "SQLAlchemy", "Pydantic", "Streamlit"
 ];
 
 return (
  <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm hover:border-blue-500 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
 );
}