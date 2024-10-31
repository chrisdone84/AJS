import React from 'react';
import Services from '../components/Services';
import Projects from '../components/Projects';
import News from '../components/News';
import ContactForm from '../components/ContactForm';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-16 text-textPrimary flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <h1 className="text-4xl font-bold">AJS Scaffolding NW</h1>
      </header>
      <main className="mt-0">
        <ImageCarousel />
        <Services />
        <News />
      </main>
    </div>
  );
};

export default Home;
