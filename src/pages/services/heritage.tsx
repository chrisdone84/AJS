import React from 'react';

const Heritage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-secondary">Heritage Work</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Our expert team provides safe and compliant scaffolding solutions to preserve historical structures, ensuring
          the integrity of these landmarks during complex refurbishment projects. We have completed complex works for
          both Grade I and Grade II heritage buildings, some of which include the famous Liverpool Walker Art Gallery,
          Cannington Shaw, and Leeds Private Spire Clinic. Our specialist team of experts understand the regulations
          associated to heritage operational delivery and compliance.{' '}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/heritage1.jpg"
            alt="Description of photo 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/heritage2.jpg"
            alt="Description of photo 2"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/heritage3.jpg"
            alt="Description of photo 3"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/heritage4.jpg"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/heritage5.jpg"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/heritage6.jpg"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Heritage;
