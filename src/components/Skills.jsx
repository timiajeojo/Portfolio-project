import React from 'react';

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS",
    "NextJS", "Git", "Github", "ExpressJS", "NodeJS", "Figma",
    "TypeScript", "SQL Databases", ""
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