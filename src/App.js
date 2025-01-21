import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Navigation from './Components/Navigation';
import Products from './Components/Products';

import aspirin from '../src/assets/aspirin.jpg';
import ibuprofen from '../src/assets/ibuprofen.jpg';
import paracetamol from '../src/assets/paracetamol.png';
import Amoxicillin from '../src/assets/Amoxicillin.avif';
import azuma from '../src/assets/azuma.webp';
import cetirizine from '../src/assets/cetirizine.webp';
import AboutUs from './Components/AboutUs';

const App = () => {
  let heroData = [
    { text1: "Your Trusted Online Pharmacy", text2: "Quality Medicines Delivered to Your Doorstep" },
    { text1: "Expert Care, Exceptional Service", text2: "Your Health is Our Priority" },
    { text1: "Caring for You and Your Family", text2: "Shop Medicines, Vitamins, and More Anytime, Anywhere!" },
    { text1: "Health Made Simple", text2: "Explore Our Wide Range of Affordable Medicines" },
  ];

  const medicines = [
    { name: "Aspirin", image: aspirin, price: 2000 },
    { name: "Ibuprofen", image: ibuprofen, price: 1500 },
    { name: "Paracetamol", image: paracetamol, price: 3000 },
    { name: "Azuma", image: azuma, price: 1000 },
   
    { name: "Azuma", image: azuma, price: 1000 },
    { name: "Amoxicillin", image: Amoxicillin, price: 4000 },
    { name: "Cetirizine", image: cetirizine, price: 1500 },
    { name: "Amoxicillin", image: Amoxicillin, price: 4000 },
    { name: "Cetirizine", image: cetirizine, price: 1500 },{ name: "Aspirin", image: aspirin, price: 2000 },
    { name: "Ibuprofen", image: ibuprofen, price: 1500 },
    { name: "Paracetamol", image: paracetamol, price: 3000 },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === heroData.length - 1 ? 0 : count + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <Router>
      <div>
        <div className="headContainer">
          <div className="headerContainer"><Header /></div>
          <div className="navigationContainer"><Navigation /></div>
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <MainContent heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]} />
              
            </>
          } />
          <Route path="/products" element={<Products medicines={medicines} />} />
         
          <Route path="/about-us" element={<AboutUs/>} />

          <Route path="/contact" element={<div className="pageContent">Contact Page Content</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
