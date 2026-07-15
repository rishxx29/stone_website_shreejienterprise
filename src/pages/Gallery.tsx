import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSEO } from "../hooks/useSEO";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ExternalLink,
  Maximize2
} from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../types";

type GalleryCategory = "all" | "sandstone" | "packaging" | "containers" | "outdoor";

const CATEGORY_TABS: { label: string; value: GalleryCategory }[] = [
  { label: "All Sourced Media", value: "all" },
  { label: "Indian Sandstone", value: "sandstone" },
  { label: "IPPC Crates Packaging", value: "packaging" },
  { label: "Port Container Cargo", value: "containers" },
  { label: "Outdoor Paving Walks", value: "outdoor" },
];

export default function Gallery() {
  useSEO({
    title: "Sandstone Gallery | Live Production & Shipping Slabs",
    description: "Browse high-resolution photographs of our natural sandstone paving cleft finishes, IPPC seaworthy export crates, container cargo lashing, and finished landscaping installations.",
    path: "/gallery"
  });

  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery based on the tabs
  const filteredGallery = selectedCategory === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    // Find the current index inside the FILTERED array for Left/Right navigation
    const idxInFiltered = filteredGallery.findIndex(item => item.id === id);
    if (idxInFiltered !== -1) {
      setLightboxIndex(idxInFiltered);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    
    let nextIdx = direction === "prev" ? lightboxIndex - 1 : lightboxIndex + 1;
    
    // Circulate boundaries safely
    if (nextIdx < 0) {
      nextIdx = filteredGallery.length - 1;
    } else if (nextIdx >= filteredGallery.length) {
      nextIdx = 0;
    }
    
    setLightboxIndex(nextIdx);
  };

  return (
    <div id="gallery-page" className="bg-slate-50 text-slate-800 min-h-screen pt-36 pb-24 selection:bg-accent selection:text-slate-950">
      <div className="absolute inset-0 saas-grid-pattern opacity-30 pointer-events-none z-0"></div>

      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10 animate-fade-in">
        <div className="border-l-4 border-indigo-c pl-6 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-secondary tracking-[0.3em] block font-extrabold pb-1 border-b border-slate-200 w-fit">
            01 &bull; MEDIA ARCHIVE
          </span>
          <h1 className="font-sans text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Immaculate Textures &amp; <br />
            <span className="text-gradient">Consolidated Cargo Lots</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed font-normal mt-2">
            Real-time photos illustrating raw stone textures, custom calibrated patio paving packs, IPPC heat-treated wood pallets cratings, and direct ocean container terminal loading logs.
          </p>
        </div>
      </div>

      {/* Categories Horizontal Tabs bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-slate-200 pb-8 overflow-x-auto scrollbar-none relative z-10 select-none">
        <div className="flex items-center gap-3 min-w-[640px]">
          <span className="font-mono text-[9px] uppercase text-indigo-c tracking-widest mr-4 shrink-0 font-extrabold">
            Categorized Archives
          </span>
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setSelectedCategory(tab.value);
                setLightboxIndex(null); // purge lightbox index when switching tabs
              }}
              className={`font-mono text-[10px] uppercase tracking-widest px-5 py-3 transition-all duration-300 shrink-0 rounded-lg cursor-pointer font-bold ${
                selectedCategory === tab.value
                  ? "btn-premium-indigo text-white shadow-md scale-102"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-slate-300 shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Responsive Grid of Images */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {filteredGallery.length === 0 ? (
          <div className="text-center py-24 bg-white border border-slate-200 p-10 font-mono rounded-lg">
            <span className="text-slate-500 text-xs tracking-wider block font-bold">NO ARCHIVES FOR SELECTED CLASS</span>
            <button 
              onClick={() => setSelectedCategory("all")}
              className="text-slate-800 font-extrabold text-xs uppercase underline tracking-widest mt-5 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="break-inside-avoid relative overflow-hidden bg-white border border-slate-200 cursor-pointer group shadow-sm hover:shadow-xl hover:border-accent transition-all duration-500 rounded-lg"
              >
                {/* Visual Image */}
                <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-95 group-hover:brightness-[0.4] ease-out"
                   loading="lazy"
                   referrerPolicy="no-referrer"
                />

                {/* Subdued Minimal Info Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-end justify-between gap-3 text-slate-300">
                    <div className="space-y-1 text-left">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent block font-extrabold">
                        {item.category}
                      </span>
                      <h4 className="font-sans text-sm font-extrabold text-white leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <Maximize2 className="w-4 h-4 text-accent shrink-0 mb-1" />
                  </div>
                </div>

                {/* Fallback Mobile Indicator */}
                <div className="absolute top-2.5 right-2.5 sm:hidden bg-white/95 text-accent font-mono text-[8px] px-2.5 py-1.5 uppercase tracking-widest border border-slate-200 rounded-md font-bold shadow-sm">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex flex-col justify-between p-6 pointer-events-auto"
            onClick={closeLightbox}
          >
            {/* Topbar navigation specs */}
            <div className="flex justify-between items-center text-white p-2 border-b border-slate-800 font-mono select-none">
              <div className="text-xs tracking-wider">
                <span className="text-accent font-extrabold uppercase">MEDIA INSPECTION DATA &bull;</span> {lightboxIndex + 1} / {filteredGallery.length}
              </div>
              <button 
                onClick={closeLightbox}
                className="p-3 hover:bg-white/10 text-slate-400 hover:text-white transition-all rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Core view box */}
            <div className="flex items-center justify-between my-auto relative max-w-5xl mx-auto w-full gap-4">
              
              {/* Prev */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("prev");
                }}
                className="hidden sm:flex p-4 bg-slate-900 border border-slate-800 hover:border-accent text-white hover:bg-slate-850 transition-all rounded-full cursor-pointer shrink-0"
              >
                <ChevronLeft className="w-5 h-5 text-accent" />
              </button>

              <div 
                className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl border border-slate-850 shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={filteredGallery[lightboxIndex].image} 
                  alt={filteredGallery[lightboxIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain select-none animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox("next");
                }}
                className="hidden sm:flex p-4 bg-slate-900 border border-slate-800 hover:border-accent text-white hover:bg-slate-850 transition-all rounded-full cursor-pointer shrink-0"
              >
                <ChevronRight className="w-5 h-5 text-accent" />
              </button>

            </div>

            {/* Bottom details card */}
            <div 
              className="bg-slate-900/90 border border-slate-800 p-6 max-w-xl mx-auto w-full rounded-xl text-center space-y-2 select-none shadow-2xl mb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block font-extrabold">
                Category: {filteredGallery[lightboxIndex].category}
              </span>
              <h3 className="font-sans text-lg md:text-xl font-extrabold text-white">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed font-normal">
                Quarried in Rajasthan yards. Checked Orthogonal flatness caliber, thickness calibration under ISPM testing rules. Packaging strapping verified seaworthy.
              </p>
              
              {/* Mobile swipe directions */}
              <div className="flex gap-4 justify-center pt-2.5 sm:hidden text-white font-mono text-[9px] tracking-widest font-extrabold">
                <button onClick={() => navigateLightbox("prev")} className="underline text-accent">PREVIOUS</button>
                <span className="opacity-40">&bull;</span>
                <button onClick={() => navigateLightbox("next")} className="underline text-accent">NEXT</button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
