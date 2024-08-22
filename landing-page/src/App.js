import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Header from './components/Header';
import MainSection from './components/MainSection';
import WeFocusOn from './components/WeFocusOn';
import HowWeDoIt from './components/HowWeDoIt';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials'; // Changed to Testimonials
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define routes if you have separate pages */}
          <Route path="/" element={
            <div>
              <MainSection />
              <Element name="WeFocusOn">
                <WeFocusOn />
              </Element>
              <Element name="HowWeDoIt">
                <HowWeDoIt />
              </Element>
              <Element name="pricing">
                <Pricing />
              </Element>
              <Element name="testimonials">
                <Testimonials />
              </Element>
              <Footer />
            </div>
          } />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
