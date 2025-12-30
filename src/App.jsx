import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import { CartProvider } from './context/CartContext';
import './App.css';

import { ClerkProvider } from '@clerk/clerk-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <CartProvider>
        <Router>
          <div className="app">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>

            <Footer />
            <Cart />
          </div>
        </Router>
      </CartProvider>
    </ClerkProvider>
  );
}

export default App;
