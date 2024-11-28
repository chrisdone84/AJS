import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="p-8 bg-teal-800 text-secondary">
      <h2 className="text-3xl font-bold mb-4 text-secondary">Contact Us</h2>
      <form className="grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your Name" className="p-2 rounded" />
        <input type="email" placeholder="Your Email" className="p-2 rounded" />
        <textarea placeholder="Your Message" className="p-2 rounded"></textarea>
        <button type="submit" className="bg-white text-teal-800 p-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
