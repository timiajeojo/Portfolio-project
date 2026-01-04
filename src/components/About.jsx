import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          AI/ML Engineer passionate about building intelligent systems. Currently working on multi-agent workflows and building{' '}
          <a href="https://github.com/samiksha0shukla/context-memory" className="text-blue-400 hover:underline">ContextMemory</a>, 
          a memory system for AI applications. I specialise in Machine Learning, Deep Learning, NLP, and backend development with Python and FastAPI.
        </p>
      </div>
    </section>
  );
};

export default About;