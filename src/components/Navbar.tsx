import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-secondary text-textPrimary p-4 flex flex-col items-center shadow-lg">
      <div className="mb-4">
        <Link to="/" className="hover:text-primary transition duration-300">
          <img src="/images/ajslogo.jpg" alt="AJS Scaffolding" className="h-20 w-auto" />
        </Link>
      </div>
      <div className="space-x-6">
        <Link to="/#services" className="hover:text-primary hover:underline transition duration-300">Services</Link>
        <Link to="/#news" className="hover:text-primary hover:underline transition duration-300">News</Link>
        <Link to="/contact-us" className="hover:text-primary hover:underline transition duration-300">Contact Us</Link>
        <Link to="/meet-the-team" className="hover:text-primary hover:underline transition duration-300">Meet the Team</Link>
        <Link to="/about" className="hover:text-primary hover:underline transition duration-300">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;