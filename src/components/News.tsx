import React from 'react';

const News = () => {
  return (
    <section id="news" className="p-8 bg-background text-textSecondary">
      <h2 className="text-3xl font-bold mb-8">Latest Updates from AJS Scaffolding</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/fund2.jpg" alt="News 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Little Lady Locks Fundraiser</h3>
            <p className="text-gray-500">Oct 01, 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/news2.webp" alt="News 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Update 2</h3>
            <p className="text-gray-500">Feb 01, 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/news3.webp" alt="News 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Update 3</h3>
            <p className="text-gray-500">Mar 01, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
