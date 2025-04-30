import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import CoffeeQuiz from './components/Quiz/Quiz';
import OurStory from "./components/OurStory/OurStory";
import OurOrigins from './components/OurOrigins/OurOrigins';

import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<CoffeeQuiz />} />
         {/* <Route path="/shop" element={<Shop />} /> */} 
         {/* <Route path="/all-coffees" element={<AllCoffees />} /> */}
      
        {/* <Route path="/shop/single-origin" element={<SingleOrgin />} /> */}
        {/* <Route path="/shop/organic" element={<Organic />} /> */}
        {/* <Route path="/shop/premium-blends" element={<PremiumBlends />} /> */}
        <Route path = "/our-origins" element={<OurOrigins/>}/>
        {/* <Route path="/coffee-box" element={<CoffeeBox />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/contact" element={<Testimonials />} /> */} 
        <Route path="/about" element={<OurStory/>} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
