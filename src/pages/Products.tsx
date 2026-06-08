import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Layers, 
  Map, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Scale,
  Waves,
  Building2,
  Settings,
  Globe
} from "lucide-react";
import { PRODUCTS_DATA, Product } from "../types";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImages, setSelectedImages] = useState<{ [productId: string]: string }>({});
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const requestedProductId = searchParams.get("selected");

  // Filter products based on category buttons
  const filteredProducts = activeFilter === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.id === activeFilter);

  // Auto-scroll logic if specific stone requested
  useEffect(() => {
    if (requestedProductId) {
      setActiveFilter("all"); // show all to allow scrolling
      setTimeout(() => {
        const element = productRefs.current[requestedProductId];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, [requestedProductId]);

  return (
    <div id="products-page" className="bg-slate-50 text-slate-800 min-h-screen pt-36 pb-24 relative selection:bg-accent selection:text-slate-950">
      <div className="absolute inset-0 saas-grid-pattern opacity-30 pointer-events-none z-0"></div>
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10 animate-fade-in">
        <div className="border-l-4 border-indigo-c pl-6 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-secondary tracking-[0.3em] block font-extrabold pb-1 border-b border-slate-200 w-fit">
            ARCHITECTURAL CATALOGUE
          </span>
          <h1 className="font-sans text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Premium Natural <br />
            <span className="text-gradient">Stone Inventory</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed font-normal mt-2">
            Each slab category represents standard-deviating quartz deposits, dense sandstone beddings, and calibrated granite tiles directly from our quarry consolidation yards in Kota, Rajasthan, India. Custom sizing cut-lists are completed on order.
          </p>
        </div>
      </div>

      {/* Catalog Filters Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 border-b border-slate-200 pb-8 relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[9px] uppercase text-indigo-c tracking-widest mr-4 font-extrabold select-none">
            Filter Portfolio
          </span>
          <button
            onClick={() => setActiveFilter("all")}
            className={`font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer text-center font-bold ${
              activeFilter === "all"
                ? "btn-premium-indigo text-white shadow-md scale-102"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm"
            }`}
          >
            All Stone Classes
          </button>
          
          {PRODUCTS_DATA.map((prod) => {
            const getShortSeriesName = (name: string) => {
              if (name.includes("York")) return "York";
              if (name.includes("Circle")) return "Circle Kit";
              if (name.includes("Yellow")) return "Yellow";
              if (name.includes("Grey")) return "Kandla Grey";
              if (name.includes("Autumn")) return "Autumn Brown";
              if (name.includes("Raj")) return "Raj Green";
              if (name.includes("Rippon")) return "Rippon Buff";
              return name.split(" ")[0];
            };
            return (
              <button
                key={prod.id}
                onClick={() => setActiveFilter(prod.id)}
                className={`font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer text-center font-bold ${
                  activeFilter === prod.id
                    ? "btn-premium-indigo text-white shadow-md scale-102"
                    : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm"
                }`}
              >
                {getShortSeriesName(prod.name)} Series
              </button>
            );
          })}
        </div>
      </div>

      {/* Structured Products Showcase Slabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 relative z-10">
        {filteredProducts.map((product, idx) => {
          const isEven = idx % 2 === 0;
          const HighlightBorder = requestedProductId === product.id;
          const currentViewedImage = selectedImages[product.id] || product.image;
          const isRealPhotoActive = product.realImages?.includes(currentViewedImage);

          return (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[product.id] = el)}
              className={`bg-white border transition-all duration-500 p-8 md:p-12 rounded-xl saas-card ${
                HighlightBorder 
                  ? "border-accent ring-2 ring-accent/30 shadow-[0_0_40px_rgba(133,91,50,0.1)]" 
                  : "border-slate-200/85 shadow-sm hover:border-slate-300"
              }`}
              id={`product-block-${product.id}`}
            >
              {HighlightBorder && (
                <div className="bg-slate-50 text-accent font-mono text-[9px] uppercase tracking-widest px-4 py-2 w-fit mb-8 border border-slate-200 rounded-md font-bold shadow-sm">
                  Selected Reference Stone
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Visual Slab Section */}
                <div className={`lg:col-span-6 space-y-5 ${!isEven ? "lg:order-2" : ""}`}>
                  
                  {/* Master Render View */}
                  <div className="aspect-[4/3] bg-slate-50 overflow-hidden relative border border-slate-200 rounded-lg shadow-inner">
                    <img 
                      src={currentViewedImage} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-300 brightness-95"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {isRealPhotoActive ? (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-c to-secondary text-white px-4 py-2 text-[9px] font-mono uppercase tracking-widest font-extrabold shadow-md rounded border border-white/20 flex items-center gap-1.5 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
                        📸 Actual Factory Stock Photo
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 bg-white/95 text-accent border border-slate-200 px-3 py-1.5 text-[8.5px] font-mono uppercase tracking-widest rounded shadow-sm backdrop-blur-md">
                        Reference Render Profile
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 bg-white/95 text-slate-700 py-1.5 px-3.5 font-mono text-[8.5px] uppercase tracking-widest border border-slate-200 rounded-md shadow-sm backdrop-blur-md">
                      {isRealPhotoActive ? "Actual Block Stock & Yard Shot" : "Primary Architectural Application View"}
                    </div>
                  </div>

                  {/* Inspection images selector */}
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 flex flex-col space-y-3 shadow-inner">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B87333] font-bold block select-none">
                      Inspect Quarry Strata / Yard stock:
                    </span>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {/* Concept image */}
                      <button
                        onClick={() => setSelectedImages(prev => ({ ...prev, [product.id]: product.image }))}
                        className={`w-20 h-14 border rounded overflow-hidden relative transition-all duration-200 cursor-pointer ${
                          currentViewedImage === product.image
                            ? "border-accent ring-2 ring-accent/20 scale-102"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <img src={product.image} className="w-full h-full object-cover animate-fade-in" referrerPolicy="no-referrer" />
                        <div className="absolute inset-x-0 bottom-0 bg-white/95 text-[7px] text-slate-700 font-mono uppercase py-0.5 leading-none text-center font-bold">
                          Concept
                        </div>
                      </button>

                      {/* Texture image */}
                      {product.secondaryImage && (
                        <button
                          onClick={() => setSelectedImages(prev => ({ ...prev, [product.id]: product.secondaryImage! }))}
                          className={`w-20 h-14 border rounded overflow-hidden relative transition-all duration-200 cursor-pointer ${
                            currentViewedImage === product.secondaryImage
                              ? "border-accent ring-2 ring-accent/20 scale-102"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <img src={product.secondaryImage} className="w-full h-full object-cover animate-fade-in" referrerPolicy="no-referrer" />
                          <div className="absolute inset-x-0 bottom-0 bg-white/95 text-[7px] text-slate-700 font-mono uppercase py-0.5 leading-none text-center font-bold">
                            Texture
                          </div>
                        </button>
                      )}

                      {/* Real factory yard stock images */}
                      {product.realImages?.map((url, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={() => setSelectedImages(prev => ({ ...prev, [product.id]: url }))}
                          className={`w-20 h-14 border rounded overflow-hidden relative transition-all duration-200 cursor-pointer ${
                            currentViewedImage === url
                              ? "border-accent ring-2 ring-accent/20 scale-102"
                              : "border-slate-200 hover:border-slate-350"
                          }`}
                        >
                          <img src={url} className="w-full h-full object-cover animate-fade-in" referrerPolicy="no-referrer" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-[#855b32] to-[#b1926d] text-white text-[7.5px] font-mono uppercase py-0.5 leading-none text-center font-extrabold">
                            Yard #{rIdx + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Technical details Section */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  
                  {/* Category Title */}
                  <div className="space-y-1">
                    <span className="font-mono text-[9.5px] text-indigo-c uppercase tracking-widest block font-extrabold">
                      Rajasthan, India &bull; Certified Strata
                    </span>
                    <h2 className="font-sans text-2xl md:text-3.5xl text-slate-900 font-extrabold leading-tight">
                      {product.name}
                    </h2>
                  </div>

                  {/* Brand Descriptions */}
                  <div className="space-y-4">
                    <p className="text-xs md:text-sm font-semibold text-slate-700 font-sans leading-relaxed italic border-l-4 border-indigo-c pl-4">
                      {product.description}
                    </p>
                    <p className="text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                      {product.longDescription}
                    </p>
                  </div>

                  {/* Key Properties & Applications column splitting */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-205">
                    
                    {/* Key Merits */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-[9.5px] uppercase text-secondary tracking-widest flex items-center gap-1.5 font-extrabold">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        Key Properties
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {product.properties.map((prop, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-slate-700 font-sans font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span>{prop}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-[9.5px] uppercase text-secondary tracking-widest flex items-center gap-1.5 font-extrabold">
                        <Layers className="w-3.5 h-3.5 text-indigo-c" />
                        Applications
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {product.applications.map((app, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-slate-700 font-sans font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-c shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Standard Formats and Finishes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-205">
                    
                    {/* Finishes */}
                    <div className="space-y-2.5">
                      <span className="font-mono text-[9.5px] uppercase text-secondary tracking-widest block font-extrabold">
                        Finishing Formats
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.finishes.map((fn, idx) => (
                          <span 
                            key={idx} 
                            className="bg-slate-50 text-slate-700 text-[9.5px] font-mono border border-slate-200 px-3 py-1.5 rounded font-bold"
                          >
                            {fn}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="space-y-2">
                      <span className="font-mono text-[9.5px] uppercase text-secondary tracking-widest block font-extrabold">
                        Standard Sizes
                      </span>
                      <ul className="space-y-1 max-h-[160px] overflow-y-auto pr-2 text-xs font-mono text-slate-600 font-normal scrollbar-thin">
                        {product.sizes.map((sz, idx) => (
                           <li key={idx} className="list-disc pl-0.5 ml-4 marker:text-accent">
                            {sz}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Direct Inquiry triggers */}
                  <div className="pt-6 border-t border-slate-205 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      to={`/contact?subject=Inquiry about ${product.name}`}
                      className="btn-premium-indigo w-full sm:w-auto text-center px-8 py-3.5 text-[10px] font-mono uppercase tracking-widest font-extrabold rounded-lg text-white"
                    >
                      Inquire About This Stone
                    </Link>
                    <a
                      href={`https://wa.me/919252032292?text=Hi%2520Shree%2520Jyoti%2520Enterprises,%2520I%2520am%2520interested%2520in%2520pricing%2520and%2520availabilty%2520for%2520${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center border border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-white px-8 py-3.5 text-[10px] font-mono uppercase tracking-widest rounded-lg shadow-sm font-extrabold transition-colors duration-300"
                    >
                      Discuss via WhatsApp
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Travertine Custom Compliance */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 relative z-10">
        <div className="bg-white text-slate-800 p-10 md:p-14 relative overflow-hidden border border-slate-200 rounded-xl">
          <div className="absolute inset-0 saas-grid-pattern opacity-10 z-0 pointer-events-none"></div>
          <div className="absolute right-0 bottom-0 opacity-5 font-sans text-[180px] pointer-events-none translate-y-1/4 translate-x-1/4 leading-none select-none z-0 text-slate-400">
            SJE
          </div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-mono text-[9px] text-[#B87333] uppercase tracking-[0.3em] block font-extrabold">
              B2B PROCUREMENT CLEARANCES
            </span>
            <h3 className="font-sans text-2xl md:text-3.5xl text-slate-900 font-extrabold leading-tight">
              Sourcing custom dimensional slabs or tender formats?
            </h3>
            <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-sans font-normal">
              Our dynamic limestone yards and machine systems in Rajasthan are fully certified to accommodate architectural slab revisions, curved masonry elements, and tailored edge-profiling (bullnosing, pencil edge). Submit your design layouts for bulk contract estimations.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-start gap-8 font-mono text-[9.5px] text-slate-500">
              <div>
                <span className="text-slate-400 block uppercase font-extrabold tracking-wider">GSTIN REGISTERED STATUS</span>
                <span className="font-extrabold text-slate-800 text-xs">08AJKPJ0167G1Z9</span>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>
              <div>
                <span className="text-slate-400 block uppercase font-extrabold tracking-wider">MARITIME IEC DIRECT LICENSE</span>
                <span className="font-extrabold text-slate-800 text-xs">AJKPJ0167G</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link
                to="/contact"
                className="btn-premium-indigo inline-flex items-center gap-2 px-8 py-4 text-[9.5px] font-mono uppercase tracking-widest font-extrabold rounded-lg text-white"
              >
                Upload Architectural Drawings <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
