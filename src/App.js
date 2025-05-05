import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import CoffeeQuiz from './components/Quiz/Quiz';
import OurStory from './components/OurStory/OurStory';
import OurOrigins from './components/OurOrigins/OurOrigins';

import AllCoffees from './components/AllCoffees/AllCoffees';
import ContactForm from './components/ContactForm/ContactForm';
import CoffeeDetail from "./components/CoffeeDetails/CoffeeDetails";
import FavoritesPage from './components/Favorites/Favorites';
import Cart from "./components/CartPage/Cart";
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import NotFoundPage from './components/404Page/404';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to retrieve and set the cart count from localStorage
    const updateCartCount = () => {
      const storedCartCount = localStorage.getItem('cartCount');
      const count = storedCartCount ? parseInt(storedCartCount, 10) : 0;
      setCartCount(count);
    };

    // Initial update when the component mounts
    updateCartCount();

    // Event listener to update cart count whenever it's updated
    const handleCartUpdate = () => {
      updateCartCount(); // Update cart count when event fires
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);


  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<CoffeeQuiz />} />

        <Route path="/shop/all-coffees" element={<AllCoffees />} />
        <Route path="/shop/single-origin" element={<AllCoffees />} />
        <Route path="/shop/organic" element={<AllCoffees />} />
        <Route path="/shop/premium-blends" element={<AllCoffees />} />
        <Route path="/our-origins" element={<OurOrigins />} />
        <Route path="/shop/:id" element={<CoffeeDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/check-out" element={<CheckoutPage/>}/>
        {/* <Route path="/coffee-box" element={<CoffeeBox />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<OurStory />} />
         <Route path="/cart" element={<Cart />}/> 
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path = "*" element={<NotFoundPage/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
