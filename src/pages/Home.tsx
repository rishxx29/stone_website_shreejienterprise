import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Award, 
  Package, 
  Truck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Coins, 
  Flame, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { PRODUCTS_DATA, TRUST_INDICATORS, GALLERY_DATA } from "../types";

export default function Home() {
  
  // Custom Icon lookup helper for B2B card grids
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-8 h-8 text-stone-300 stroke-[1.25]" />;
      case "package":
        return <Package className="w-8 h-8 text-stone-300 stroke-[1.25]" />;
      case "truck":
        return <Truck className="w-8 h-8 text-stone-300 stroke-[1.25]" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8 text-stone-300 stroke-[1.25]" />;
      default:
        return <Layers className="w-8 h-8 text-stone-300 stroke-[1.25]" />;
    }
  };

  return (
    <div id="home-page" className="overflow-x-hidden">
      
      {/* SECTION 1 - HERO */}
      <section className="relative h-screen flex items-center justify-center stone-gradient overflow-hidden" id="hero-section">
        {/* Immersive high resolution background of architectural stone */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2000" 
            alt="Shree Jyoti Natural Stone Slabs Background" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle slow panning/zoom animation effect using Tailwind */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-950/90"></div>
          {/* Dark Glassmorphism bottom-fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/40"></div>
        </div>

        {/* Stone texture overlay (Immersive UI specification) */}
        <div className="absolute inset-0 stone-texture opacity-35 pointer-events-none z-10"></div>

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Ultra-luxury thin uppercase label based on Immersive gold accent */}
            <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 font-mono text-[9px] sm:text-[11px] tracking-[0.4em] uppercase text-stone-500 border border-stone-800/80 bg-stone-900/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-stone-500 rotate-45"></span>
              EST. 2007 • ISO 9001:2015 CERTIFIED
            </span>

            {/* Main Display Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-100 font-light tracking-tight leading-[1.08]">
              Premium Indian <br />
              <span className="italic font-light text-stone-400 font-serif">
                Natural Stone
              </span> <br />
              Exporter
            </h1>

            {/* B2B Descriptive Copy */}
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-stone-300 font-light leading-relaxed font-sans">
              Mastering the art of stone manufacturing for 16+ years. Delivering the finest Kandla Grey, premium Sandstone, and Granite to global architectural landmarks.
            </p>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-stone-50 hover:bg-stone-200 text-stone-900 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-stone-700 hover:border-stone-500 hover:bg-stone-900/40 text-stone-300 hover:text-white px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Elegant structural page anchor */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-500">
            Scroll to Tour Industry Expertise
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-stone-500 to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2 - TRUST INDICATORS */}
      <section className="py-24 bg-[#1A1A1A] border-t border-stone-900 relative" id="trust-section">
        <div className="absolute inset-0 stone-texture opacity-25 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center md:text-left mb-16 space-y-2">
            <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
              Global Reliability
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-150 font-light text-white">
              Assuring <span className="italic text-[#AFA9A0]">Impeccable Sourcing</span> and Fortified Shipments
            </h2>
          </div>

          {/* Trust Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_INDICATORS.map((trust, idx) => (
              <motion.div
                key={trust.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group border border-stone-800/85 bg-stone-900/40 hover:border-[#8C7851]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-stone-900/70"
              >
                <div className="space-y-6">
                  <div className="p-3 border border-stone-800 w-fit group-hover:bg-[#1A1A1A] group-hover:border-[#8C7851]/40 transition-colors bg-stone-950">
                    {/* Highlight icon using gold accent */}
                    <div className="text-[#AFA9A0] group-hover:text-[#8C7851] transition-colors duration-300">
                      {getIcon(trust.iconName)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-stone-100 group-hover:text-white transition-colors">
                      {trust.title}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#8C7851] font-semibold">
                      {trust.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-stone-400 font-sans leading-relaxed font-light">
                    {trust.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 - FEATURED PRODUCTS */}
      <section className="py-28 bg-[#F9F7F4] border-t border-stone-200/60 relative" id="featured-products">
        <div className="absolute inset-0 stone-texture-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
                The Core Inventory
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 font-medium">
                Our Mined Signature <span className="italic font-light text-stone-500">Stone Classes</span>
              </h2>
            </div>
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-700 hover:text-[#8C7851] transition-colors border-b border-stone-300 hover:border-[#8C7851] pb-1 w-fit font-semibold"
            >
              View Full Architectural Specs <ArrowRight className="w-3.5 h-3.5 text-[#8C7851]" />
            </Link>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="bg-white border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-[#8C7851]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image wrapper with exquisite zoom zoom */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-100 font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-semibold">
                      {product.id === "kandla-grey" ? "PATIO PAVING" : product.id === "autumn-brown" ? "ULTRA RESILIENT" : "NATURAL STRATA"}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-8 space-y-5">
                    <h3 className="font-serif text-2xl font-medium text-stone-900 group-hover:text-[#8C7851] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-stone-600 font-sans leading-relaxed min-h-[72px] font-light">
                      {product.description}
                    </p>

                    <div className="h-[1px] bg-stone-100"></div>

                    {/* Applications & Features Tagging */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#8C7851] uppercase tracking-widest block font-bold">
                        Recommended Applications
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <span 
                            key={i} 
                            className="bg-[#F9F7F4] border border-stone-200 text-stone-700 text-[10px] font-mono px-2 py-1 font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Clickable */}
                <div className="p-8 pt-0 mt-auto">
                  <Link 
                    to={`/products?selected=${product.id}`}
                    className="w-full inline-flex items-center justify-between border border-stone-300 hover:border-stone-900 hover:bg-[#1A1A1A] hover:text-white px-5 py-3 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 font-semibold"
                  >
                    <span>Full Specifications</span>
                    <ChevronRight className="w-4 h-4 text-[#8C7851] group-hover:text-stone-300 transition-colors" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 - EXPORT & MANUFACTURING */}
      <section className="py-24 stone-gradient text-stone-100 relative overflow-hidden" id="export-manufacturing">
        <div className="absolute inset-0 stone-texture opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Column: Split Screen Images Collage */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-stone-900 overflow-hidden relative border border-stone-800">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800" 
                    alt="Packaging Stones in Crates" 
                    className="w-full h-full object-cover filter brightness-75 hover:brightness-95 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-stone-300 border border-stone-850">
                    Crate Fortification
                  </div>
                </div>
                <div className="aspect-square bg-stone-900 overflow-hidden relative border border-stone-800">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" 
                    alt="Industrial Calibration Machinery" 
                    className="w-full h-full object-cover filter brightness-75 hover:brightness-95 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-stone-300 border border-stone-850">
                    Sawn Calibration
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-stone-900 overflow-hidden relative border border-stone-800">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" 
                    alt="Cargo Port Shipping Container" 
                    className="w-full h-full object-cover filter brightness-75 hover:brightness-95 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-stone-300 border border-stone-850">
                    Direct Port Delivery
                  </div>
                </div>
                <div className="bg-stone-950 border border-stone-800 p-6 flex flex-col justify-center space-y-2 h-[150px] relative overflow-hidden group">
                  <div className="absolute inset-0 stone-texture opacity-25"></div>
                  <span className="text-3xl font-serif text-[#8C7851] relative z-10 font-bold">100%</span>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone-400 relative z-10 leading-tight">
                    Export Compliance Certifications Held
                  </p>
                </div>
              </div>
            </div>

            {/* Informative Column */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
                  Processing &amp; Logistics Excellence
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-100">
                  Global Supply-Chain <br />
                  <span className="italic font-normal text-[#AFA9A0]">Engineered for B2B Sourcing</span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-stone-400 leading-relaxed font-sans font-light">
                Our heavy manufacturing units in Rajasthan house multi-blade cutting panels, polishing tables, and edge processing zones. We strictly conform to international stone sizing conventions and load direct containers destined for top global sea gateways.
              </p>

              {/* Collapsible/Tab style details */}
              <div className="grid grid-cols-2 gap-6 border-t border-b border-stone-800/80 py-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-200 font-serif text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                    <span className="font-semibold">IPPC Wood Lashing</span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                    Fumigated wooden grids with internal foam barriers protect against salt air.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-200 font-serif text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                    <span className="font-semibold">IEC Standard Routing</span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                    Accredited with Import-Export credentials (IEC AJKPJ0167G) for direct ports.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-200 font-serif text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                    <span className="font-semibold">Strict Calibration</span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                    Uniform block thicknesses ensure rapid installer layouts with zero mismatch.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-200 font-serif text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                    <span className="font-semibold">Ethic Sourced Quarries</span>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed font-light">
                    Ethical raw blocks mined from highly stable, certified Geological layers.
                  </p>
                </div>
              </div>

              {/* B2B Indicators */}
              <div className="flex flex-wrap gap-8 items-center bg-stone-950/90 p-6 border border-stone-800">
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] uppercase text-[#8C7851] font-bold tracking-wider">Industry History</span>
                  <p className="font-serif text-lg font-semibold text-stone-200">16+ Years Experience</p>
                </div>
                <div className="w-[1px] h-8 bg-stone-800 hidden sm:block"></div>
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] uppercase text-[#8C7851] font-bold tracking-wider">Quality Standard</span>
                  <p className="font-serif text-lg font-semibold text-stone-200">ISO 9001 Alignment</p>
                </div>
                <div className="w-[1px] h-8 bg-stone-800 hidden sm:block"></div>
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] uppercase text-[#8C7851] font-bold tracking-wider">Security Index</span>
                  <p className="font-serif text-lg font-semibold text-stone-200">Export Wooden Packing</p>
                </div>
              </div>            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 - WHY CHOOSE US */}
      <section className="py-24 bg-[#EAE4DD] border-t border-stone-200/40 relative overflow-hidden text-stone-900" id="why-choose-us">
        <div className="absolute inset-0 stone-texture-dark opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
              Architectural Standard
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 font-medium">
              Engineered to Expose the <span className="italic font-light text-stone-600">True Purity</span> of Stone
            </h2>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed font-sans max-w-xl mx-auto font-light">
              Our products are processed to withstand freeze-thaw degradation and commercial traffic loops while highlighting the beautiful textures.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Sparkles className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Premium Quality Stones</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Hand-selected blocks derived from certified geographical reserves. Consistent density and uniform mineral composition ensure structural longevity.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Layers className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Precise Finishing</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Calibrated width, micro-honed flat surfaces, and clean-cut right angles guarantee fast patio layouts and thin grout joints for seamless designs.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Flame className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Weather Resistant Materials</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Tested to combat extreme frost cycles, intense solar heat, and heavy monsoon rains. Highly resistant to algae formation and dust absorption.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Truck className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Timely Delivery</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Strategic location in Rajasthan's primary stone transport terminal combined with sea logistics freight connections guarantee cargo schedules.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Coins className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Competitive Pricing</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Our direct quarry-source partnerships and massive domestic scale eliminate agent markup layers, returning optimal B2B pricing values.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-sm p-8 border border-stone-200 hover:border-[#8C7851]/50 shadow-sm transition-all duration-305 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F9F7F4] text-stone-800 border border-stone-150">
                <Package className="w-5 h-5 text-[#8C7851]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">Professional Packaging</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed font-light">
                Sturdy custom-built wooden pallets, high-strength shrink covers, and protective polystyrene partitions prevent internal movement cracks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6 - CLIENT/PROJECT VISUALS */}
      <section className="py-24 bg-[#F9F7F4] border-t border-stone-200/60 relative" id="masonry-gallery-showcase">
        <div className="absolute inset-0 stone-texture-dark opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
                Visual Proof
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 font-medium">
                Pristine Sandstone <span className="italic font-light text-[#8C7851]">&amp; Quarry Installations</span>
              </h2>
            </div>
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C7851] hover:text-[#70624a] transition-colors border-b border-stone-300 hover:border-[#8C7851] pb-1 w-fit font-semibold"
            >
              Explore Full Gallery Portfolio <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Masonry-Style Responsive Grid Layout of curated stone galleries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_DATA.slice(0, 4).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative h-[360px] overflow-hidden bg-stone-950 border border-stone-200/80"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-75"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean hover overlay with metadata text */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#8C7851] mb-1 font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-stone-100 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-sans mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="py-28 relative stone-gradient text-white overflow-hidden border-t border-stone-850" id="corporate-cta">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600" 
            alt="Minimalist Luxury Stone Yard" 
            className="w-full h-full object-cover object-center filter grayscale"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950"></div>
        </div>
        <div className="absolute inset-0 stone-texture opacity-30 pointer-events-none z-10"></div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8 z-20">
          <span className="inline-block px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C7851] border border-[#8C7851]/40 bg-stone-900/60 font-bold backdrop-blur-sm">
            PRODUCE &bull; PROCESS &bull; EXPORT
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl mx-auto text-stone-100">
            Looking for <span className="italic font-normal text-[#AFA9A0]">Premium Indian Natural Stones</span> for Your Next Project?
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-300 leading-relaxed font-sans font-light">
            Connect with our global sourcing specialists. We arrange safe container shipments with fully customized container lashings, calibrated tile matrices, and custom surface polishes.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-stone-50 hover:bg-stone-200 text-stone-950 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 font-semibold shadow-md"
            >
              Request Catalog
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-[#8C7851]/60 hover:border-white text-stone-200 hover:text-white px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
