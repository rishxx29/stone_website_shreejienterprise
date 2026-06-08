import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Layers, Award, ShieldCheck, ArrowRight, Globe } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-slate-600 border-t border-slate-205 saas-grid-pattern" id="app-footer">
      {/* Upper Footer - Columns Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="hover:opacity-95 transition-opacity">
            <Logo variant="footer" iconSize="h-12 w-auto" />
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Premium manufacturer, consolidator, and direct exporter of architectural Indian Sandstone, dense Granites, and Limestone. Serving landscape designers, large builders, and global sourcing partners since 2010.
          </p>

          <div className="border border-slate-200 bg-white p-4 space-y-2.5 rounded-lg shadow-sm">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
              <div className="text-[10px] font-mono">
                <span className="text-slate-450 block font-bold">GSTIN REGISTRATION</span>
                <span className="font-extrabold text-slate-900">08AJKPJ0167G1Z9</span>
              </div>
            </div>
            <div className="h-[1px] bg-slate-100"></div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#B87333] shrink-0" />
              <div className="text-[10px] font-mono">
                <span className="text-slate-450 block font-bold">EXPORT COMPLIANCE (IEC)</span>
                <span className="font-extrabold text-slate-900">AJKPJ0167G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stone Categories Links */}
        <div>
          <h4 className="font-sans text-[11px] font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6 pb-2 border-b border-slate-205 select-none">
            Stone Products
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li>
              <Link to="/products" className="text-slate-550 hover:text-slate-900 transition-colors flex items-center gap-2 group font-medium">
                <span className="w-1.5 h-1.5 bg-accent opacity-60 rounded-full transition-all group-hover:scale-125"></span>
                Kandla Grey Sandstone
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-550 hover:text-slate-900 transition-colors flex items-center gap-2 group font-medium">
                <span className="w-1.5 h-1.5 bg-secondary opacity-60 rounded-full transition-all group-hover:scale-125"></span>
                Autumn Brown Sandstone
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-550 hover:text-slate-900 transition-colors flex items-center gap-2 group font-medium">
                <span className="w-1.5 h-1.5 bg-accent opacity-60 rounded-full transition-all group-hover:scale-125"></span>
                Indian Sandstone & Slabs
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-slate-550 hover:text-slate-900 transition-colors flex items-center gap-2 group font-medium">
                <span className="w-1.5 h-1.5 bg-secondary opacity-60 rounded-full transition-all group-hover:scale-125"></span>
                Sandstone Circle Kits
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-accent transition-colors flex items-center gap-1.5 group font-mono text-[9.5px] text-accent uppercase tracking-widest mt-5 font-bold">
                View Stone Gallery <ArrowRight className="w-3.5 h-3.5 text-accent inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Directory Links */}
        <div>
          <h4 className="font-sans text-[11px] font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-6 pb-2 border-b border-slate-205 select-none">
            Corporate Info
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-550 font-medium">
            <li>
              <Link to="/" className="hover:text-slate-900 transition-colors">
                Corporate Profile
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-slate-900 transition-colors">
                Our Story &amp; Timeline
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-slate-900 transition-colors">
                Manufacturing &amp; Crating
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-slate-900 transition-colors">
                Client Assemblies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-slate-900 transition-colors">
                Get B2B Pricing structure
              </Link>
            </li>
          </ul>
        </div>

        {/* Office Contact Info */}
        <div className="space-y-6">
          <h4 className="font-sans text-[11px] font-extrabold text-slate-900 uppercase tracking-[0.2em] pb-2 border-b border-slate-205 select-none">
            Sourcing Hub
          </h4>
          
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex gap-2.5">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] text-[#B87333] block font-mono font-bold uppercase select-none">HQ &amp; STORAGE YARDS</span>
                <p className="text-slate-800 font-sans mt-0.5 leading-snug text-xs">
                  Office - 146 Transport Nagar <br />
                  Gobriya Bawadi Kota, Rajasthan 324005, India
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[9px] text-[#B87333] block font-mono font-bold uppercase select-none">DIRECT HOTLINES</span>
                <a href="tel:9252032292" className="text-slate-800 hover:text-accent transition-colors font-bold block text-xs">
                  +91 92520 32292 (Nitesh Jain)
                </a>
                <a href="tel:9829376431" className="text-slate-800 hover:text-accent transition-colors font-bold block text-xs">
                  +91 98293 76431 (Sohan Lal Jain)
                </a>
              </div>
            </div>

            <div className="flex gap-2.5">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] text-[#B87333] block font-mono font-bold uppercase select-none">COMMERCIAL DIRECTORY</span>
                <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-slate-800 hover:text-accent transition-colors text-xs break-all block mt-0.5 font-sans font-semibold">
                  shreejyotienterpriseskota@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Footer - Copyright & Small Print */}
      <div className="bg-[#F2EFE9] text-slate-650 border-t border-slate-205 py-8 text-[9.5px] font-mono tracking-wider">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left select-none">
          <div>
            &copy; {currentYear} Shree Jyoti Enterprises &bull; Developed by Rishika Jain.
          </div>
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <span>EXPORT DISPATCH DEPT</span>
            <span>&bull;</span>
            <span>ORIGIN: RAJASTHAN, INDIA</span>
            <span>&bull;</span>
            <span className="text-[#B87333] font-extrabold">100% REGULATORY ASSURED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
