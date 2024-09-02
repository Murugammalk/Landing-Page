// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import WeFocusOn from './components/WeFocusOn';
import HowWeDoIt from './components/HowWeDoIt';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <MainSection />
              <div id="WeFocusOn">
                <WeFocusOn />
              </div>
              <div id="HowWeDoIt">
                <HowWeDoIt />
              </div>
              <div id="pricing">
                <Pricing />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
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
