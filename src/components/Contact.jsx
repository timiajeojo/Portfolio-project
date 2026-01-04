import React from 'react';

export default function Contact() {
 return (
  <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Want to chat? Just shoot me a dm{' '}
          <a href="https://x.com/Samiksha2908" className="text-blue-400 hover:underline">with a direct question on twitter</a>
          {' '}and I'll respond whenever I can. I will ignore all soliciting.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/samiksha-shukla-7b2207217/" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Samiksha2908" className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            X
          </a>
        </div>
      </div>
    </section>
 );
}