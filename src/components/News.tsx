import React from 'react';

const News = () => {
  return (
    <section id="news" className="p-8 bg-background text-textSecondary">
      <h2 className="text-3xl font-bold mb-8">Latest Updates from AJS Scaffolding</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/news/lady-locks" className="block bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/fund2.jpg" alt="News 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Little Lady Locks Fundraiser</h3>
            <p className="text-gray-500">Oct 01, 2024</p>
          </div>
        </a>
        <a href="/news/growing" className="block bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/hiring.webp" alt="News 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">🚀 We're Growing Fast and Looking for Top Talent! 🚀</h3>
            <p className="text-gray-500">Feb 01, 2024</p>
          </div>
        </a>
        <a href="/news/sustainability" className="block bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/sustain.jpeg" alt="News 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              ♻️ We're expanding our fleet in line with our sustainability policy and strategic growth objectives.
            </h3>
            <p className="text-gray-500">Mar 01, 2024</p>
          </div>
        </a>
        <a href="/news/employee-development" className="block bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/employee.png" alt="News 4" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Employee Development Programs</h3>
            <p className="text-gray-500">Apr 01, 2024</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default News;
