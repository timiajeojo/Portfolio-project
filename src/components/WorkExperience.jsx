import React, { useState } from 'react';

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      company: "Thrif Africa",
      initial: "TA",
      iconClass: "work-icon-green",
      period: "February 2023 -July 2023",
      role: "Frontend Developer Intern",
      responsibilities: [
        `Contributed to the development of responsive web pages utilizing Nextjs, TailwindCSS, and wordpress, resulting in a measured 30 % reduction in page load time.
         Implemented over 20 reusable React components, significantly decreasing development time by an estimated 20 % .
         Shipped 3 + new features, enhancing platform experience.
         Enhanced collaboration with structured pull requests and clear documentation.`
      ]
    },
    {
      company: "Crikle Labs",
      initial: "C",
      iconClass: "work-icon-orange",
      period: "July 2023 - January 2024",
      role: "Frontend Developer Intern",
      responsibilities: [
        `Delivered pixel - perfect implementations using Nextjs and Tailwind, collaborating with designers to ensure visual consistency..
         Optimized application performance using memoization, lazy loading, and asset optimization techniques that improved load times by 35 % .
         Contributed to team projects using Git / GitHub, participated in PR reviews, resolved Jira tickets efficiently, and managed site deployments.`
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