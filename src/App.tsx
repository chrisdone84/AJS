import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MeetTheTeam from './pages/MeetTheTeam';
import AboutUs from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Heritage from './pages/services/heritage';
import SocialHousing from './pages/services/social';
import Industrial from './pages/services/industrial';
import NewBuild from './pages/services/newbuild';
import Growing from './pages/newsarticles/growing';
import LadyLocks from './pages/newsarticles/ladylocks';
import Sustainability from './pages/newsarticles/sustainability';
import EmployeeDevelopment from './pages/newsarticles/employeedevelopment';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/heritage" element={<Heritage />} />
          <Route path="/services/social-housing" element={<SocialHousing />} />
          <Route path="/services/industrial" element={<Industrial />} />
          <Route path="/services/new-build" element={<NewBuild />} />
          <Route path="/news/growing" element={<Growing />} />
          <Route path="/news/lady-locks" element={<LadyLocks />} />
          <Route path="/news/sustainability" element={<Sustainability />} />
          <Route path="/news/employee-development" element={<EmployeeDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
