import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header
        className="bg-cover bg-center h-64 text-white flex items-center justify-center"
        style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
      </header>
      <main className="container mx-auto p-8">
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="p-4 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email" className="p-4 rounded border border-gray-300" />
            <textarea placeholder="Your Message" className="p-4 rounded border border-gray-300"></textarea>
            <button
              type="submit"
              className="bg-primary text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary">
              Send
            </button>
          </form>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Office 1</h3>
              <p>Cheapside, Liverpool, England, L2 2DY</p>
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Cheapside,Liverpool,England,L2+2DY&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7CCheapside,Liverpool,England,L2+2DY&key=YOUR_API_KEY"
                alt="Map of Office 1"
                className="w-full h-48 object-cover mt-2 rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Office 2</h3>
              <p>Charnock Road, Liverpool, L9 6AW</p>
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Charnock+Road,Liverpool,L9+6AW&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:B%7CCharnock+Road,Liverpool,L9+6AW&key=YOUR_API_KEY"
                alt="Map of Office 2"
                className="w-full h-48 object-cover mt-2 rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>Phone: 07490378526</p>
            <p>Email: info@ajsscaffoldnw.co.uk</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
