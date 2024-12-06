import React from 'react';

const SocialHousing = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-secondary">Social Housing Work</h1>
        <p className="text-lg mb-6 leading-relaxed">
          With years of experience in the sector, we understand the importance of efficiency and safety in maintaining
          social housing properties. Our scaffolding services support both routine maintenance and extensive renovations
          while understanding the importance of environmental safety in challenging environments, when the property is
          usually occupied. We understand the customer focused on the end user and give access to our digital management
          system which provides a full audit trail with images of works, for every job, to our clients.{' '}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/social1.jpg"
            alt="Description of photo 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social2.jpg"
            alt="Description of photo 2"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social3.jpg"
            alt="Description of photo 3"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social4.jpg"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social5.jpeg"
            alt="Description of photo 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social6.jpeg"
            alt="Description of photo 2"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social7.jpeg"
            alt="Description of photo 3"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social8.png"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/social9.png"
            alt="Description of photo 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default SocialHousing;
