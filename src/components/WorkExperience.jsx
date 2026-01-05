import React, { useState } from 'react';

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      company: "Munshot",
      initial: "M",
      iconClass: "work-icon-green",
      period: "August 2025 - September 2025",
      role: "Artificial Intelligence Intern",
      responsibilities: [
        "Developed an AI agent for Singapore-based financial services client",
        "Worked with multi-agent AI workflows for context-sharing and coordination",
        "Designed prompting logic including system prompts for task execution",
        "Tested, debugged, and refined agent performance"
      ]
    },
    {
      company: "Computer Market Hub",
      initial: "C",
      iconClass: "work-icon-orange",
      period: "August 2024 - December 2024",
      role: "Artificial Intelligence Intern",
      responsibilities: [
        "Spearheaded Jess chatbot for Jessup Cellars, achieving 78% user satisfaction",
        "Orchestrated data pipelines processing 2K+ daily data points, improving model performance by 40%",
        "Architected AI sentiment analysis system processing 5K+ Hebrew posts with 87% accuracy",
        "Delivered 3 specialized AI agents, reducing manual processing time by 35%"
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="work-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="work-card">
              <div 
                className="work-header work-header-clickable" 
                onClick={() => toggleExpand(idx)}
              >
                <div className={`work-icon ${exp.iconClass}`}>
                  {exp.initial}
                </div>
                <div className="work-content">
                  <h3 className="work-company">{exp.company}</h3>
                  <p className="work-period">{exp.period}</p>
                  <p className="work-role">{exp.role}</p>
                </div>
                <div className={`work-chevron ${expandedIndex === idx ? 'work-chevron-expanded' : ''}`}>
                  ▼
                </div>
              </div>
              {expandedIndex === idx && (
                <ul className="work-responsibilities">
                  {exp.responsibilities.map((resp, ridx) => (
                    <li key={ridx}>• {resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}