import React from 'react';

const Industrial = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-secondary">Industrial Work</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Our industrial scaffolding services are designed to meet the robust needs of small and large-scale operations.
          The complexity of industrial works, by installing steel tube that is compliant and have as- built designs
          approved afterwards is certainly one of our skill-sets, utilising experienced Advanced CISRS Scaffolders only
          for the delivery of these works. Due to our extensive knowledge and business model, we can react in a timely
          manner and offer a 24-hour callout service for industrial sites.{' '}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/refurbishment1.jpg"
            alt="Description of photo 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/refurbishment2.jpg"
            alt="Description of photo 2"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Industrial;
