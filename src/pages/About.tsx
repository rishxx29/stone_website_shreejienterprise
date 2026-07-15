import { motion } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import { 
  Building2, 
  Layers, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Globe, 
  Compass, 
  ArrowRight,
  Sparkle,
  Hourglass,
  Activity,
  Box
} from "lucide-react";
import { TIMELINE_DATA } from "../types";
import { Link } from "react-router-dom";

export default function About() {
  useSEO({
    title: "About Us | Legacy in Indian Stone & Sandstone",
    description: "Learn about Shree Jyoti Enterprises. Mined and processed in Kota, Rajasthan, we supply export-grade natural stones to global projects since 2007.",
    path: "/about"
  });

  return (
    <div id="about-page" className="bg-slate-50 text-slate-800 min-h-screen pt-36 pb-24 selection:bg-accent selection:text-slate-950">
      <div className="absolute inset-0 saas-grid-pattern opacity-30 pointer-events-none z-0"></div>

      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10 animate-fade-in">
        <div className="border-l-4 border-indigo-c pl-6 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-secondary tracking-[0.3em] block font-extrabold pb-1 border-b border-slate-200 w-fit">
            01 &bull; CORPORATE HISTORY
          </span>
          <h1 className="font-sans text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            A Rich Legacy Quarried in <br />
            <span className="text-gradient">Indian Earth &amp; Stone</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed font-normal mt-2">
            Shree Jyoti Enterprises is a trusted manufacturer, consolidator, and direct exporter specializing in architectural Indian sandstone, premium quartzite, and calibrated outdoor paving. From our base in Kota, Rajasthan, we connect international builds with permanent durability.
          </p>
        </div>
      </div>

      {/* Brand Ethos with Split Image Screen */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[9px] uppercase text-indigo-c tracking-[0.25em] block font-extrabold">
              OUR ROOT VISION &bull; ESTD. 2010
            </span>
            <h2 className="font-sans text-2xl md:text-3.5xl text-slate-900 font-extrabold leading-tight">
              Consistent thickness tolerances, sea-worthy wood packings, and prompt customs execution are the pillars of our wholesale relationships.
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
              With over 16 years of experience in the stone trade, our founders successfully cataloged the mineral compositions of premier quarries in Rajasthan, supplying directly to major exporters. Expanding directly to ports of call worldwide, we bring certified quality, structural confidence, and competitive quarry-direct pricing to large-scale residential, civic landscaping, and hotel projects.
            </p>
            
            <div className="space-y-4.5 text-[10px] font-mono text-slate-700 border-l-2 border-slate-200 pl-5 mt-6">
              <div className="flex items-center gap-3 font-semibold">
                <Compass className="w-4 h-4 text-accent shrink-0" />
                <span>PRIMARY QUARRY SOURCE: KOTA REGION</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>100% REGULATED PRODUCTION &bull; FAIR WAGE CONTRACTS</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <span>DIRECT TO PORT INTEGRATED OVERLAND LOGISTICS</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[80px] pointer-events-none rounded-full"></div>
            
            <div className="col-span-8 aspect-[4/3] bg-white overflow-hidden border border-slate-200 shadow-sm relative rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200" 
                alt="Stone Quarry Slabs block" 
                className="w-full h-full object-cover brightness-95 group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 text-[8px] font-mono tracking-widest text-[#06B6D4] uppercase px-3 py-1.5 border border-slate-200 rounded-md font-bold shadow-sm text-slate-850">
                Geological Stratum
              </div>
            </div>
            
            <div className="col-span-4 aspect-[3/4] bg-white overflow-hidden border border-slate-200 shadow-sm relative rounded-lg translate-y-8 group">
              <img 
                src="/autumn_brown_real_dry.png" 
                alt="Modern Stone Path Architectural Installation" 
                className="w-full h-full object-cover brightness-90 group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 text-[8px] font-mono tracking-widest text-accent uppercase px-3 py-1.5 border border-slate-200 rounded-md font-bold shadow-sm text-slate-850">
                Yard Stock
              </div>
            </div>

            <div className="col-span-12 mt-12 text-center md:text-left">
              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-indigo-c hover:border-indigo-c transition-all border-b-2 border-slate-205 pb-1.5 font-bold"
              >
                Explore Sourced Project Installation Images <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Trajectory Timeline Section */}
      <section className="bg-white text-slate-800 py-32 border-t border-b border-slate-200 saas-grid-pattern" id="timeline-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 font-sans">
          
          <div className="max-w-xl mb-20 space-y-2 border-l-4 border-accent pl-6">
            <span className="font-mono text-xs uppercase text-accent tracking-[0.3em] block font-extrabold">
              02 &bull; TIMELINE
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Sixteen Years of <br />
              <span className="text-gradient">Quarry Integrity</span>
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
                className="relative bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between group hover:border-accent hover:bg-white transition-all duration-400 rounded-lg shadow-sm"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-200 group-hover:border-accent rounded-tr-lg pointer-events-none transition-colors"></div>

                {/* Custom numeric styling */}
                <span className="text-4xl sm:text-5.5xl font-sans font-black text-accent opacity-35 group-hover:opacity-100 transition-opacity block mb-5 select-none leading-none">
                  {event.year}
                </span>

                <div className="space-y-3">
                  <h3 className="font-sans text-lg font-extrabold text-slate-800 group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industrial Capabilities Details Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32" id="capabilities-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start font-sans">
          
          {/* Sourcing Hub Map Coordinates */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-8 space-y-6 rounded-lg shadow-md saas-card">
            <h3 className="font-sans text-2xl text-slate-900 font-extrabold">Sourcing Origin</h3>
            
            <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
              Operating out of Transport Nagar, Gobriya Bawadi, Kota, we bypass traditional domestic middlemen to secure direct, consistent sandstone beds from our quarries.
            </p>

            <div className="h-44 bg-slate-50 flex items-center justify-center relative overflow-hidden border border-slate-200 rounded-md shadow-inner">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#855b32_1.2px,transparent_1.2px)] [background-size:16px_16px]"></div>
              <div className="relative z-10 text-center space-y-1.5 p-4">
                <MapPin className="w-6 h-6 text-indigo-c mx-auto animate-bounce" />
                <span className="font-sans text-[10.5px] font-extrabold text-slate-800 block">No. 146 Transport Nagar, Gobriya Bawadi</span>
                <span className="font-mono text-[9.5px] uppercase text-accent block tracking-widest font-extrabold select-none">Kota, Rajasthan, India</span>
                <span className="text-[8.5px] text-slate-500 font-mono block">Coordinates: 25.18&deg; N, 75.83&deg; E</span>
              </div>
            </div>

            <div className="space-y-3.5 text-[10px] font-mono text-slate-700 pt-2">
              <div className="flex font-extrabold items-center justify-between border-b border-slate-100 pb-3">
                <span>PROCESSING DEPOTS</span>
                <span className="text-indigo-c">KOTA DEPOTS</span>
              </div>
              <div className="flex font-extrabold items-center justify-between border-b border-slate-100 pb-3">
                <span>INTERSTATE PORT CONNECT</span>
                <span className="text-slate-500">MUNDRA TERMINALS</span>
              </div>
              <div className="flex font-extrabold items-center justify-between">
                <span>EXPORT CARRIERS</span>
                <span className="text-secondary">GLOBAL MATRIX</span>
              </div>
            </div>
          </div>

          {/* Core Quality Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            
            <div className="space-y-4">
              <div className="w-11 h-11 flex items-center justify-center bg-white text-accent rounded-lg border border-slate-200 shadow-sm animate-pulse-subtle">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-sans text-xl font-extrabold text-slate-900 leading-tight">Meticulous Calibration</h4>
              <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                Maintaining a rigorous dimensional depth tolerance of &plusmn;1mm using advanced block circular-sawn calibrators, compiling tiles that lay flat and minimize installer grout gaps.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-11 h-11 flex items-center justify-center bg-white text-secondary rounded-lg border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-xl font-extrabold text-slate-900 leading-tight">Precipitation Resilience</h4>
              <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                Our sandstone blocks survive extreme freeze-thaw cycles, retaining structural integrity and fine surface cleftness under moisture and sub-zero conditions worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-11 h-11 flex items-center justify-center bg-white text-accent rounded-lg border border-slate-200 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-xl font-extrabold text-slate-900 leading-tight">Texture Fineness</h4>
              <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                From raw split cleft paving to beautiful sawn edge finishes, we monitor the slide resistance parameters requested strictly on order specs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-11 h-11 flex items-center justify-center bg-white text-secondary rounded-lg border border-slate-200 shadow-sm">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-xl font-extrabold text-slate-900 leading-tight">Integrated Freight Protocol</h4>
              <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                Managing Indian Customs clearance logs, marine shipping bookings, and IPPC health certification (for crates) using our valid Import Export certification, assuring direct-port delivery globally.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Luxury Brand B2B CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 relative z-10">
        <div className="border border-slate-200 bg-white p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-10 rounded-xl shadow-md relative overflow-hidden saas-card">
          <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-[#855b32]/5 to-[#b1926d]/5 rounded-bl-full pointer-events-none"></div>
          <div className="space-y-3.5 max-w-2xl text-left">
            <span className="font-mono text-[9px] text-indigo-c uppercase tracking-[0.2em] block font-extrabold">ESTEEMED SAMPLING DEEP FEED</span>
            <h3 className="font-sans text-2xl md:text-3.5xl text-slate-900 font-extrabold leading-tight">Require diagnostic samples for laboratory tests?</h3>
            <p className="text-xs md:text-sm text-slate-600 font-sans font-normal leading-relaxed">
              We send direct, professionally cut sampling formats (100mm x 100mm) reflecting actual calibrated depths, sawn edges, and requested split textures to international architectural boards.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-premium-indigo hover:scale-102 transition-transform px-8 py-4 text-[9.5px] font-mono uppercase tracking-widest font-extrabold rounded-lg shrink-0 text-white"
          >
            Dispatch Sampling Request &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
