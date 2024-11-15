import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-8 bg-background text-textSecondary">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <a href="/services/heritage" className="block relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/heritage4.jpg" alt="Heritage & Refurbishment" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Heritage</h3>
            <p>For all your Heritage needs.</p>
          </div>
        </a>
        <a href="/services/social-housing" className="block relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/social2.jpg" alt="Social Housing" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Social Housing</h3>
            <p>For all your Social Housing needs.</p>
          </div>
        </a>
        <a href="/services/new-build" className="block relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/refurbishment3.jpg" alt="New Build" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">New Build</h3>
            <p>For all your New Build needs.</p>
          </div>
        </a>
        <a href="/services/industrial" className="block relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/industrial.jpg" alt="Industrial" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Industrial</h3>
            <p>For all your Industrial needs.</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;
