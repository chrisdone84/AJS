import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background text-textSecondary">
      <header className="bg-cover bg-center h-64 text-textPrimary flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <main className="container mx-auto p-8">
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="p-4 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email" className="p-4 rounded border border-gray-300" />
            <textarea placeholder="Your Message" className="p-4 rounded border border-gray-300"></textarea>
            <button type="submit" className="bg-primary text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary">Send</button>
          </form>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p>Beatty Road, Liverpool, L13 2BX</p>
          <p>Phone: 07490378526</p>
          <p>Phone: 07366306395</p>
          <p>Email: info@ajsscaffoldnw.co.uk</p>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
