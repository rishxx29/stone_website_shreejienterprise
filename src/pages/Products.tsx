import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Layers, 
  Shrink, 
  Map, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { PRODUCTS_DATA, Product } from "../types";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const requestedProductId = searchParams.get("selected");

  // Filter products based on category buttons
  const filteredProducts = activeFilter === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.id === activeFilter);

  // If a specific product was requested from another page, auto-scroll to it and activate filter correctly
  useEffect(() => {
    if (requestedProductId) {
      setActiveFilter("all"); // show all so it can be scrolled into view
      setTimeout(() => {
        const element = productRefs.current[requestedProductId];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, [requestedProductId]);

  return (
    <div id="products-page" className="bg-[#F9F7F4] min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 stone-texture-dark opacity-10 pointer-events-none z-0"></div>
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="border-l-4 border-[#8C7851] pl-6 md:pl-8 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-[#8C7851] tracking-[0.3em] block font-bold">
            The Stonery Catalog
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-stone-900">
            Premium Architectural <span className="italic font-light text-stone-500">Stone Inventory</span>
          </h1>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed font-light">
            Consistently processed and calibrated to tolerate heavy loads, variable weather stresses, and strict architectural tolerances. We ship standard patio packs as well as gangscale slabs globally.
          </p>
        </div>
      </div>

      {/* Catalog Filters Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-stone-200 pb-4 relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] uppercase text-[#8C7851] tracking-wider mr-2 md:mr-4 font-bold">
            Filter Portfolio
          </span>
          <button
            onClick={() => setActiveFilter("all")}
            className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-stone-900 text-white font-medium border border-[#8C7851]/60"
                : "bg-white hover:bg-[#F9F7F4] text-stone-700 border border-stone-200 hover:border-[#8C7851]/40"
            }`}
          >
            All Stone Classes
          </button>
          
          {PRODUCTS_DATA.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveFilter(prod.id)}
              className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 ${
                activeFilter === prod.id
                  ? "bg-stone-900 text-white font-medium border border-[#8C7851]/60"
                  : "bg-white hover:bg-[#F9F7F4] text-stone-700 border border-stone-200 hover:border-[#8C7851]/40"
              }`}
            >
              {prod.name.split(" ")[0]} Series
            </button>
          ))}
        </div>
      </div>

      {/* Structured Products Showcase Slabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 relative z-10">
        {filteredProducts.map((product, idx) => {
          const isEven = idx % 2 === 0;
          const HighlightBorder = requestedProductId === product.id;

          return (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[product.id] = el)}
              className={`bg-white/95 backdrop-blur-sm border transition-all duration-500 p-6 md:p-12 ${
                HighlightBorder 
                  ? "border-[#8C7851] shadow-xl ring-2 ring-[#8C7851]/10" 
                  : "border-stone-200/80 shadow-sm hover:border-[#8C7851]/40"
              }`}
              id={`product-block-${product.id}`}
            >
              {HighlightBorder && (
                <div className="bg-[#1A1A1A] text-stone-100 font-mono text-[9px] uppercase tracking-widest px-4 py-1.5 w-fit mb-6 border border-[#8C7851]/40 font-semibold">
                  Selected Reference Stone
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Visual Slab Section (lg:col-span-6) */}
                <div className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                  
                  {/* Master Render */}
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative border border-stone-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 bg-stone-900/95 text-stone-100 py-1 px-3 font-mono text-[10px] uppercase tracking-widest">
                      Primary Architectural Application View
                    </div>
                  </div>

                  {/* Dual Image Grid if Secondary Image exists */}
                  {product.secondaryImage && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[1.91/1] overflow-hidden border border-stone-200 relative bg-stone-100">
                        <img 
                          src={product.secondaryImage} 
                          alt={`${product.name} Close-up texture`} 
                          className="w-full h-full object-cover filter brightness-95"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 bg-stone-950/80 text-white text-[8px] font-mono px-2 py-0.5 tracking-wider">
                          Close-up Strata Texture
                        </div>
                      </div>
                      
                      <div className="bg-[#F9F7F4] p-5 flex flex-col justify-center border border-stone-200/60 font-mono relative overflow-hidden">
                        <div className="absolute inset-0 stone-texture-dark opacity-10 pointer-events-none"></div>
                        <span className="text-[#8C7851] text-[10px] uppercase tracking-wider block font-semibold relative z-10">Calibrated Tolerance</span>
                        <span className="text-xl font-medium text-stone-800 mt-1 relative z-10">&plusmn;1mm Sawn Cut</span>
                        <p className="text-[9px] text-stone-500 leading-snug mt-1 font-sans relative z-10">
                          Immaculately squared edges for minimal joints.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technical details Section (lg:col-span-6) */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  
                  {/* Category Title */}
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#8C7851] uppercase tracking-widest block font-bold">
                      Origin: India &bull; Premium Material
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-semibold leading-tight">
                      {product.name}
                    </h2>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-stone-800 font-serif leading-relaxed italic">
                      {product.description}
                    </p>
                    <p className="text-sm text-stone-600 font-sans leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>

                  {/* Properties & Applications Columns Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
                    
                    {/* Key Properties */}
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[10px] uppercase text-[#8C7851] tracking-wider flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#8C7851]" />
                        Key Properties
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {product.properties.map((prop, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-stone-600 font-sans font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7851] shrink-0" />
                            <span>{prop}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[10px] uppercase text-[#8C7851] tracking-wider flex items-center gap-1.5 font-bold">
                        <Layers className="w-3.5 h-3.5 text-[#8C7851]" />
                        Applications
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {product.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-stone-600 font-sans font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7851] shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Sizes and Finishes Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-100">
                    
                    {/* Finishes */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase text-[#8C7851] tracking-wider block font-bold">
                        Available Finishes
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.finishes.map((fn, idx) => (
                          <span 
                            key={idx} 
                            className="bg-[#F9F7F4] text-stone-700 text-[10px] font-mono border border-stone-200 px-2 py-1 font-medium"
                          >
                            {fn}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase text-[#8C7851] tracking-wider block font-bold">
                        Standard Formats
                      </span>
                      <ul className="space-y-1 text-xs font-mono text-stone-600 font-light">
                        {product.sizes.map((sz, idx) => (
                          <li key={idx} className="list-disc pl-1 ml-3 marker:text-[#8C7851]/60">
                            {sz}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Direct inquiry trigger for stone */}
                  <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      to={`/contact?subject=Inquiry about ${product.name}`}
                      className="w-full sm:w-auto text-center bg-stone-900 hover:bg-[#1A1A1A] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-widest transition-colors font-semibold border border-[#8C7851]/40"
                    >
                      Inquire About This Stone
                    </Link>
                    <a
                      href={`https://wa.me/919252032292?text=Hi%20Shree%20Jyoti%20Enterprises,%20I%20am%20interested%20in%20pricing%20and%20availabilty%20for%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center border border-emerald-600/60 text-emerald-800 hover:bg-emerald-50/50 px-6 py-3.5 text-xs font-mono uppercase tracking-widest transition-all font-semibold"
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

      {/* Corporate Compliance & Certifications Box */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 relative z-10">
        <div className="stone-gradient text-stone-100 p-8 md:p-12 relative overflow-hidden border border-stone-850">
          <div className="absolute inset-0 stone-texture opacity-25 z-0 pointer-events-none"></div>
          <div className="absolute right-0 bottom-0 opacity-10 font-serif text-[180px] pointer-events-none translate-y-1/4 translate-x-1/4 leading-none select-none z-0">
            SJ
          </div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-mono text-[10px] text-[#8C7851] uppercase tracking-[0.3em] block font-bold">
              B2B IMPORT CONFIDENCE
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light">
              Are you sourcing for custom dimensions or tender specifications?
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed font-sans font-light">
              Our advanced machinery in Kota, Rajasthan is equipped to cut block formats to tailored depths, curve radius boundaries, and specific flamed or sandblasted slip-resistance indexes. Send us your complete architecture drawing schematics for bulk volume estimations.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-start gap-6 font-mono text-xs text-stone-300">
              <div>
                <span className="text-stone-500 text-[10px] block mr-4 uppercase">GST NUMBER REGN</span>
                <span className="font-bold text-stone-200">08AJKPJ0167G1Z9</span>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-stone-800"></div>
              <div>
                <span className="text-stone-500 text-[10px] block uppercase">EXPORT IEC CODE</span>
                <span className="font-bold text-stone-200">AJKPJ0167G</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-950 px-6 py-3 text-xs font-mono uppercase tracking-widest font-semibold transition-colors"
              >
                Send Spliced Drawings <ArrowRight className="w-4 h-4 text-stone-950" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
