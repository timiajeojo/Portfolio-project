import React from 'react';

export default function WorkExperience() {
  const experiences = [
    {
      company: "Munshot",
      initial: "M",
      gradient: "from-green-500 to-emerald-600",
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
      gradient: "from-orange-500 to-red-600",
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

  return (
    <section id="work" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                  {exp.initial}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-blue-400 mb-4">{exp.role}</p>
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, ridx) => (
                      <li key={ridx}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}