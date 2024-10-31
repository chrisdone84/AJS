import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MeetTheTeam from './pages/MeetTheTeam';
import AboutUs from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Heritage from './pages/services/heritage';

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

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
