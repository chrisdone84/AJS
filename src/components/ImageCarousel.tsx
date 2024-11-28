import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div className="relative w-full h-80">
      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} className="carousel-container">
        <div className="h-80">
          <img
            src="/images/refurbishment1.jpg"
            alt="Carousel Image 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="h-80">
          <img
            src="/images/social2.jpg"
            alt="Carousel Image 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="h-80">
          <img
            src="/images/refurbishment4.jpg"
            alt="Carousel Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="h-80">
          <img
            src="/images/refurbishment10.jpg"
            alt="Carousel Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="h-80">
          <img
            src="/images/social4.jpg"
            alt="Carousel Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
        <img
          src="/images/ajslogo.jpg"
          alt="AJS Scaffolding"
          className="h-20 w-auto bg-black bg-opacity-50 px-4 py-2 rounded"
        />{' '}
        <Link
          to="/contact-us"
          className="mt-4 bg-primary text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
