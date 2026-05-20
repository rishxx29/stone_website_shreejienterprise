import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Layers, Award, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800" id="app-footer">
      {/* Upper Footer - Columns Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center border-2 border-stone-400 rotate-45">
              <span className="font-serif font-black text-xs text-stone-200 absolute -rotate-45 tracking-tighter">
                SJ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-wider text-white uppercase leading-none">
                Shree Jyoti
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-stone-500 mt-1 leading-none">
                Enterprises
              </span>
            </div>
          </Link>

          <p className="text-sm text-stone-400 font-sans leading-relaxed">
            Premium manufacturer, consolidator, and direct exporter of architectural Indian Sandstone, dense Granites, and Limestone. Serving landscape designers, large builders, and global sourcing partners since 2010.
          </p>

          <div className="border border-stone-800 bg-stone-950/40 p-3.5 space-y-2 rounded-sm">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
              <div className="text-[10px] font-mono">
                <span className="text-stone-500 block">GSTIN REGISTRATION</span>
                <span className="font-bold text-stone-300">08AJKPJ0167G1Z9</span>
              </div>
            </div>
            <div className="h-[1px] bg-stone-800"></div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-stone-400 shrink-0" />
              <div className="text-[10px] font-mono">
                <span className="text-stone-500 block">IMPORT EXPORT CODE (IEC)</span>
                <span className="font-bold text-stone-300">AJKPJ0167G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stone Categories Links */}
        <div>
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-2 border-b border-stone-800">
            Stone Products
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/products" className="hover:text-stone-100 transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-stone-600 group-hover:bg-stone-300 rounded-full transition-all"></span>
                Kandla Grey Sandstone
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-stone-100 transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-stone-600 group-hover:bg-stone-300 rounded-full transition-all"></span>
                Autumn Brown Granite
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-stone-100 transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-stone-600 group-hover:bg-stone-300 rounded-full transition-all"></span>
                Indian Sandstone Series & Slabs
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-stone-100 transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-stone-600 group-hover:bg-stone-300 rounded-full transition-all"></span>
                Limestones & Outdoor Setts
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-stone-100 transition-colors flex items-center gap-1.5 group font-mono text-xs text-stone-400 uppercase tracking-widest mt-4">
                View Stone Gallery <ArrowRight className="w-3.5 h-3.5 text-stone-500 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Directory Links */}
        <div>
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-2 border-b border-stone-800">
            Corporate Info
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/" className="hover:text-stone-100 transition-colors">
                Corporate Profile
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-stone-100 transition-colors">
                Our Story & Timeline
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-stone-100 transition-colors">
                Manufacturing & Crating Process
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-stone-100 transition-colors">
                Client & Project Installations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-stone-100 transition-colors">
                Get B2B Pricing Structure
              </Link>
            </li>
          </ul>
        </div>

        {/* Office Contact Info */}
        <div className="space-y-6">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-stone-800">
            Sourcing Hub
          </h4>
          
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-stone-500 block font-mono">HEAD OFFICE & SHARDS DEPOT</span>
                <p className="text-stone-300 font-sans mt-0.5 leading-snug">
                  Kota, Rajasthan, India. <br />
                  <span className="text-stone-500 text-xs">Primary Sandstone Belt Area</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-stone-500 block font-mono">B2B INQUIRY LINE</span>
                <a href="tel:9252032292" className="text-stone-200 hover:text-white transition-colors font-semibold block mt-0.5">
                  +91 92520 32292
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-stone-500 block font-mono">COMMERCIAL INBOX</span>
                <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-stone-200 hover:text-white transition-colors text-xs break-all block mt-0.5">
                  shreejyotienterpriseskota@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Footer - Copyright & Small Print */}
      <div className="bg-stone-950/80 border-t border-stone-900 py-8 text-xs text-stone-500 font-mono">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {currentYear} Shree Jyoti Enterprises. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px]">
            <span>100% EXPORT-COMPLIANT MATERIAL SOURCING</span>
            <span>&bull;</span>
            <span>ORIGIN: KOTA, RAJASTHAN, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
