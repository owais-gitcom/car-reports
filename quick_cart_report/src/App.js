import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Support from './Pages/Support';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <Router>  
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
