import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-textPrimary py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Cheapside, Liverpool, England, L2 2DY</p>
          <p>Charnock Road, Liverpool, L9 6AW</p>
          <p>Phone: 0330 133 1506</p>
          <p>Email: info@ajsscaffoldnw.com</p>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-primary">
                News
              </a>
            </li>
            <li>
              <a href="/meet-the-team" className="hover:text-primary">
                Meet the Team
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold mb-4">Certifications & Awards</h3>
          <div className="flex flex-wrap gap-4">
            <img src="/chaslogo.webp" alt="Certification 1" className="h-16" />
            <img src="/Constructionline-Gold-Logo.png" alt="Certification 2" className="h-16" />
            <img src="/citb.png" alt="Certification 3" className="h-16" />
          </div>
        </div>
      </div>
      <div className="bg-primary text-center text-sm py-4 mt-8">
        <p className="text-secondary">&copy; 2024 AJS Scaffolding NW Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
