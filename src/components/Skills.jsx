import React from 'react';
const Skills = () => {
 const skills  = [
  "Html", "CSS", "Tailwind CSS", "Javascript", "React", 
  "Next.js", "Git", "GitHub", "Node.js", "Express.js",
  "Figma", "Typescript", "sql Databases", "MongoDB"
 ];
 return (
  <section className="py-20 px-6">
   <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">
     Skills
    </h2>
    <div className="flex flex-wrap gap-3">
     {skills.map((skill, idx)=> (
      <span key={idx} className="px - 4 py - 2 bg - gray - 900 border border - gray - 800 rounded - full text - sm hover: border - blue - 500 transition - colors ">
       { skill }
       </span>
     ))}
    </div>
   </div>
  </section>
 )
} 

export default Skills;