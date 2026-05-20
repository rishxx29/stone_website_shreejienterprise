import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavLink {
  label: string;
  path: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-50/95 backdrop-blur-md shadow-sm py-3.5 border-b border-stone-200"
            : "bg-stone-50/80 backdrop-blur-sm py-5 border-b border-stone-200/40"
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Immersive UI Monogram Box & Two-Line Title */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-stone-900 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <span className="text-white font-serif text-xl font-bold tracking-tight">SJ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.3em] uppercase leading-none text-stone-900 group-hover:text-stone-500 transition-colors">
                Shree Jyoti
              </span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-stone-500 mt-1 leading-none">
                Enterprises
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative text-[11px] font-semibold tracking-widest uppercase py-2 transition-colors duration-200 ${
                        isActive 
                          ? "text-stone-900" 
                          : "text-stone-900/60 hover:text-stone-900"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-stone-900"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* B2B Export Qualifier Indicator */}
            <div className="h-4 w-[1px] bg-stone-300"></div>
            
            <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 font-medium">
              <Globe className="w-3.5 h-3.5 text-stone-600 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="tracking-widest">EXPORT DIV</span>
            </div>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-stone-900 text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-stone-500 inline-flex items-center gap-2"
            >
              Inquire Now <ArrowRight className="w-3" />
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-stone-600 bg-stone-200/50 px-2.5 py-1 select-none border border-stone-300/60">
              <Globe className="w-2.5 h-2.5 text-stone-500" />
              <span>B2B PORTAL</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-900 hover:text-stone-600 focus:outline-none p-1.5 border border-stone-300 bg-stone-100"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-50 z-30 flex flex-col justify-between pt-24 px-8 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase text-stone-400 tracking-[0.3em] block mb-2 border-b border-stone-200 pb-2">
                Navigation Directory
              </span>
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`text-xl font-serif font-medium tracking-wide flex items-center justify-between py-1 group ${
                          isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 opacity-0 transition-opacity duration-300 ${isActive ? "opacity-100 text-stone-950" : "group-hover:opacity-100 text-stone-400"}`} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-stone-200 pt-6">
              <div className="flex flex-col gap-4 text-xs font-mono text-stone-500 mb-6">
                <div>
                  <span className="text-[9px] text-stone-400 uppercase block tracking-wider">Direct Hotline (Mo-Sa 10am-7pm IST)</span>
                  <a href="tel:9252032292" className="text-stone-950 hover:text-stone-500 transition-colors text-sm font-semibold mt-0.5 block">
                    +91 92520 32292
                  </a>
                </div>
                <div>
                  <span className="text-[9px] text-stone-400 uppercase block tracking-wider">Official Email Contacts</span>
                  <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-stone-950 hover:text-stone-500 transition-colors text-sm break-all mt-0.5 block">
                    shreejyotienterpriseskota@gmail.com
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-center"
              >
                Request Instant Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
