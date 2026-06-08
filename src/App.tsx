import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Helper component to force viewports to top on route shifts (premium UX constraint)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Outer wrapper to bind aesthetic architectural theme */}
      <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-500 selection:text-stone-50">
        
        {/* Sticky Premium Header / Navigation layout */}
        <Navbar />
        
        {/* Main Routed Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback pattern to gracefully redirect undefined routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Sticky B2B Compliant Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
