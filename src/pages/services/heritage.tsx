import React from 'react';

const Heritage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-secondary">Heritage Work</h1>
        <p className="text-lg mb-6 leading-relaxed">
          
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/heritage1.jpg" alt="Description of photo 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/images/heritage2.jpg" alt="Description of photo 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/images/heritage3.jpg" alt="Description of photo 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/images/heritage4.jpg" alt="Description of photo 1" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
}

export default Heritage;