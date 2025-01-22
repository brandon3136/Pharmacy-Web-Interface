import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import axios from "axios";
import aspirin from '../src/assets/aspirin.jpg';
import ibuprofen from '../src/assets/ibuprofen.jpg';
import paracetamol from '../src/assets/paracetamol.png';
import Amoxicillin from '../src/assets/Amoxicillin.avif';
import azuma from '../src/assets/azuma.webp';
import cetirizine from '../src/assets/cetirizine.webp';
import likeIcon from './assets/like-Icon.png'

const App = () => {
  const [heroData, setHeroData] = useState([]);
  const [heroCount, setHeroCount] = useState(0);
  const medicines = [
    { name: "Aspirin", image: aspirin, price: 2000, likes : 0 },
    { name: "Ibuprofen", image: ibuprofen, price: 1500, likes : 0 },
    { name: "Paracetamol", image: paracetamol, price: 3000, likes : 0 },
    { name: "Azuma", image: azuma, price: 1000, likes : 0 },
   
    { name: "Azuma", image: azuma, price: 1000, likes : 0 },
    { name: "Amoxicillin", image: Amoxicillin, price: 4000, likes : 0 },
    { name: "Cetirizine", image: cetirizine, price: 1500, likes : 0 },
    { name: "Amoxicillin", image: Amoxicillin, price: 4000, likes : 0 },
    { name: "Cetirizine", image: cetirizine, price: 0 },
    { name: "Aspirin", image: aspirin, price: 2000, likes : 0 },
    { name: "Ibuprofen", image: ibuprofen, price: 1500, likes : 0 },
    { name: "Paracetamol", image: paracetamol, price: 3000, likes : 0 },
  ];
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/heroData");
        setHeroData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (heroData.length > 0 ? (count + 1) % heroData.length : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData]);

  return (
    <Router>
      <div>
        <div className="headContainer">
          <div className="headerContainer">
            <Header />
          </div>
          <div className="navigationContainer">
            <Navigation />
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              heroData.length > 0 ? (
                <MainContent
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                  heroData={heroData[heroCount]}
                />
              ) : (
                <div>Loading homepage content...</div>
              )
            }
          />
          <Route path="/products" element={<Products medicines={medicines} likeIcon = {likeIcon}/>} />
         
         <Route path="/about-us" element={<AboutUs/>} />

         <Route path="/contact" element={<div className="pageContent">Contact Page Content</div>} />
       </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
