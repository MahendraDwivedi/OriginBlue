
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactPage from './ContactPage'; // Your ContactPage component
import Home from './Home'; // Renamed HomePage to Home

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-blue-500 p-4 fixed w-full z-10 top-0 left-0 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold">
              OriginBleu
            </Link>
            <div className="space-x-6">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-10"> {/* Padding to avoid navbar overlap */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Updated Home */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
