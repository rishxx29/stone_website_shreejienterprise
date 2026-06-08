import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

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

  const isHome = location.pathname === "/";
  const headerBgClass = isScrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200"
    : "bg-white/85 backdrop-blur-md py-5 border-b border-slate-200/60";

  const textColorClass = (isActive: boolean) => {
    if (isActive) return "text-indigo-c font-extrabold";
    return "text-slate-700 hover:text-slate-950 font-semibold";
  };

  const logoColor = "text-slate-900";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Custom luxury golden stone geometric shape */}
          <Link to="/" className="hover:opacity-95 transition-opacity flex items-center">
            <Logo variant="full" iconSize="h-10 w-auto" textColor={logoColor} />
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
                      className={`relative text-[11px] font-bold tracking-[0.18em] uppercase py-2 transition-colors duration-300 cursor-pointer ${textColorClass(isActive)}`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-c"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* B2B Export Qualifier Indicator */}
            <div className="h-4 w-[1px] bg-slate-200"></div>
            
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-500">
              <Globe className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: '12s' }} />
              <span>GLOBAL SUPPLY</span>
            </div>
          </nav>
 
          {/* Action CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-premium-indigo px-5 py-2.5 text-[9px] font-extrabold tracking-widest uppercase inline-flex items-center gap-2 rounded-lg"
            >
              Request Quote <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>
 
          {/* Mobile hamburger Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-1.5 text-[9px] font-mono px-2.5 py-1 select-none border rounded-md font-bold transition-all text-accent bg-amber-500/10 border-accent/20 shadow-[0_0_12px_rgba(217,119,6,0.05)]">
              <Globe className="w-2.5 h-2.5 text-accent" />
              <span>B2B LIVE</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none p-2 border rounded-lg cursor-pointer transition-all text-slate-850 border-slate-200 bg-slate-50 hover:border-accent"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 animate-pulse" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
 
        </div>
      </header>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-50 z-30 flex flex-col justify-between pt-24 px-8 pb-10 md:hidden saas-grid-pattern"
          >
            <nav className="flex flex-col gap-5 pt-4">
              <span className="text-[10px] font-mono uppercase text-accent tracking-[0.25em] block mb-2 border-b border-slate-200 pb-2 font-bold select-none">
                Navigation Directory
              </span>
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={`text-lg font-sans font-extrabold tracking-wider flex items-center justify-between py-1.5 group cursor-pointer ${
                          isActive ? "text-indigo-c" : "text-slate-700 hover:text-slate-950"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "opacity-100 text-indigo-c translate-x-1" : "opacity-0 group-hover:opacity-100 translate-x-0"}`} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-slate-200 pt-6">
              <div className="flex flex-col gap-4 text-[11px] font-mono text-slate-500 mb-6 font-medium">
                <div>
                  <span className="text-[9px] text-accent uppercase block tracking-wider font-extrabold select-none">Direct Sourcing Hotlines (Mo-Sa)</span>
                  <a href="tel:9252032292" className="text-slate-800 hover:text-accent transition-colors text-sm font-extrabold mt-1 block">
                    +91 92520 32292
                  </a>
                </div>
                <div>
                  <span className="text-[9px] text-accent uppercase block tracking-wider font-extrabold select-none">Official Email Contact</span>
                  <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-slate-800 hover:text-accent transition-colors text-xs break-all mt-1 block font-sans">
                    shreejyotienterpriseskota@gmail.com
                  </a>
                </div>
              </div>
 
              <Link
                to="/contact"
                className="btn-premium-indigo w-full inline-flex items-center justify-center gap-2 text-white px-5 py-3.5 text-xs font-mono uppercase tracking-widest text-center rounded-lg"
              >
                Inquire Instantly <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
