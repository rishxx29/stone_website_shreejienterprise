import { motion } from "motion/react";
import { 
  Building2, 
  Layers, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Globe, 
  Compass, 
  Hammer,
  ArrowRight
} from "lucide-react";
import { TIMELINE_DATA } from "../types";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div id="about-page" className="bg-stone-50 min-h-screen pt-28 pb-20">
      
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="border-l-4 border-stone-800 pl-6 md:pl-8 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-stone-500 tracking-[0.3em] block">
            THE STRATA PROFILE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-stone-950">
            A Legacy Sourced in <br />
            <span className="italic font-light text-stone-700">Indian Earth and Quartzite</span>
          </h1>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
            Shree Jyoti Enterprises is a trusted manufacturer and supplier specializing in high-quality Indian sandstone, granite, limestone, and natural stones. From our base in Kota, Rajasthan, we connect global designs with raw durability.
          </p>
        </div>
      </div>

      {/* Brand Ethos with Split Image Screen */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase text-stone-400 tracking-widest block">
              OUR ROOT VISION &bull; SINCE 2010
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-950 font-medium leading-snug">
              Consistent quality, professional packaging, and timely cargo dispatches are the pillars of our B2B relationships.
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              With over 16 years of experience in the stone industry, our founders successfully cataloged the mineral compositions of key quarries in Rajasthan, supplying direct, calibrated blocks to major exporters. Now expanding directly to ports of call worldwide, we bring certified quality, structural trust, and competitive quarry-direct pricing to multi-residential, landscaping, and public space developers.
            </p>
            
            <div className="space-y-4 text-xs font-mono text-stone-700 border-l border-stone-300 pl-4 mt-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-stone-400 shrink-0" />
                <span>PRIMARY QUARRY SOURCE: KOTA REGION</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
                <span>100% REGULATED WORKING CONDITIONS</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-stone-400 shrink-0" />
                <span>DIRECT TO PORT INTEGRATED FREIGHT</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-8 aspect-[4/3] bg-stone-300 overflow-hidden border border-stone-200 shadow-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200" 
                alt="Stone Quarry Slabs block" 
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-950/80 px-2 py-0.5 text-[8px] font-mono tracking-widest text-stone-300 uppercase">
                Geological Stratum block
              </div>
            </div>
            
            <div className="col-span-4 aspect-[3/4] bg-stone-300 overflow-hidden border border-stone-200 shadow-sm relative translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800" 
                alt="Modern Stone Path Architectural Installation" 
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-950/80 px-2 py-0.5 text-[8px] font-mono tracking-widest text-stone-300 uppercase">
                Modern Installation View
              </div>
            </div>

            <div className="col-span-12 mt-4 text-center">
              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-600 hover:text-stone-950 transition-colors"
              >
                Explore Sourced Project Portfolios <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Horizontal/Vertical Timeline Section */}
      <section className="bg-stone-900 text-stone-100 py-24 border-t border-b border-stone-800" id="timeline-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center md:text-left mb-16 space-y-2">
            <span className="font-mono text-xs uppercase text-stone-400 tracking-[0.3em] block">
              CORPORATE TRAJECTORY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Our Journey Over <span className="italic">16+ Years</span>
            </h2>
          </div>

          {/* Timeline Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {TIMELINE_DATA.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative bg-stone-950 border border-stone-800 p-8 flex flex-col justify-between group hover:border-stone-700/80 transition-colors"
              >
                {/* Year tag displaying big */}
                <span className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 group-hover:text-stone-500 transition-colors block mb-4 select-none">
                  {event.year}
                </span>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-stone-200">
                    {event.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed font-sans mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industrial Capabilities Details Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24" id="capabilities-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sourcing Hub Map Coordinates */}
          <div className="lg:col-span-4 bg-white border border-stone-200 p-8 space-y-6">
            <h3 className="font-serif text-2xl text-stone-900 font-medium">Sourcing Advantage</h3>
            
            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              Based directly in the rich sandstone capital of Kota, Rajasthan, we bypass middle-broker logistics systems completely. This lets us secure consistent color shade ranges and raw blocks instantly.
            </p>

            <div className="h-44 bg-stone-100 flex items-center justify-center relative overflow-hidden border border-stone-200">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#8c8273_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10 text-center space-y-1">
                <MapPin className="w-6 h-6 text-stone-700 mx-auto animate-bounce" />
                <span className="font-mono text-[10px] uppercase text-stone-600 block tracking-widest font-semibold">Kota, Rajasthan, India</span>
                <span className="text-[9px] text-stone-400 font-mono block">25.18&deg; N, 75.83&deg; E</span>
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono text-stone-700">
              <div className="flex font-semibold items-center justify-between border-b border-stone-100 pb-2">
                <span>RAW MINED STRATA</span>
                <span className="text-stone-500">KOTA QUARRIES</span>
              </div>
              <div className="flex font-semibold items-center justify-between border-b border-stone-100 pb-2">
                <span>DOMESTIC COURIERS</span>
                <span className="text-stone-500">MUNDRA / NHAVA SHEVA</span>
              </div>
              <div className="flex font-semibold items-center justify-between">
                <span>EXPORT DESTINATIONS</span>
                <span className="text-stone-500">GLOBAL SEA ROUTES</span>
              </div>
            </div>
          </div>

          {/* Core Quality Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            <div className="space-y-3">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-900 text-stone-100">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">Consistent Slabs Calibration</h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                By maintaining systematic depth tolerances of &plusmn;1mm using diamond gangscale circular saws, we supply builders with tiles that minimize grout wastage and drop-in layout delays.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-900 text-stone-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">Salt and Freeze-Thaw Resistance</h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Our stones undergo severe mineral tests to ensure minimal structural degradation under intense winter cold and maritime trade pathways. Our sandstones behave outstandingly in high-precipitation zones.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-900 text-stone-100">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">Authentic Polish Sawn Edges</h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                From Raw split rustic feels to fine honed flamed matte indexes, we tailor the tactile depth of each slab to the friction constraints required by modern architects.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-900 text-stone-100">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-medium text-stone-900">Direct Port Logistics Integration</h4>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                We handle Indian Customs approvals and freight routing using our active Import-Export Credentials (IEC Code), assuring smooth ocean Bill of Lading issues to partners globally.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Modern B2B CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="border border-stone-200 bg-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest block">PARTNERSHIP ENHANCEMENTS</span>
            <h3 className="font-serif text-2xl md:text-3xl text-stone-950 font-semibold">Ready to test Shree Jyoti stone samples in your laboratory?</h3>
            <p className="text-sm text-stone-600 font-sans">
              We send direct sample slabs (100mm x 100mm) displaying calibrated depth, honed finishes, and custom textures to architectural procurement committees and testing entities globally.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center text-center bg-stone-900 hover:bg-stone-800 text-stone-100 px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold transition-colors"
          >
            Order Premium Samples
          </Link>
        </div>
      </div>

    </div>
  );
}
