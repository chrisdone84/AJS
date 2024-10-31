import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="py-12 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
        <p className="text-lg mb-6 leading-relaxed">
        
AJS Scaffolding pride ourselves on delivering high-quality scaffolding solutions across various sectors.
Established in 2018, our business has thrived by staying committed to our core values—ethical
leadership, sustainability, and compliance. We have consistently increased our turnover year on year
while navigating the challenges posed by Covid and Brexit. Our client-centric approach and
dedication to excellence drive us to meet the evolving needs of the construction industry across the
North-West and beyond.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Values</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-prose space-y-2">
          <li><span className="font-bold">Ethical:</span> We conduct our business with honesty and integrity, ensuring that all our actions are morally sound.</li>
          <li><span className="font-bold">Sustainable:</span> We are committed to sustainable practices that minimize our environmental impact and promote long-term ecological balance.</li>
          <li><span className="font-bold">Compliant:</span> We adhere to all industry regulations and standards, ensuring that our operations are safe and compliant with legal requirements.</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;