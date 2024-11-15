import React from 'react';

const NewBuild = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-secondary">New Build Work</h1>
        <p className="text-lg mb-6 leading-relaxed">
          From initial site setup to project completion, we provide reliable scaffolding solutions for new build
          projects, enabling smooth operations and compliance with safety regulations at every stage. Our expertise
          covers Steel Frame, Timber Frame, and Traditional Build. Our project delivery has covered schools, hospitals,
          residential, and commercial buildings.{' '}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/refurbishment7.jpg"
            alt="Description of photo 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default NewBuild;
