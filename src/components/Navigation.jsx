import React from 'react';

const Navigation = () => {
 return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Samiksha Shukla</div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
 );
}

export default Navigation;