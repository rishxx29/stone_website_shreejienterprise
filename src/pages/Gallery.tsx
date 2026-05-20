import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ExternalLink,
  Maximize2
} from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../types";

type GalleryCategory = "all" | "sandstone" | "granite" | "packaging" | "containers" | "outdoor";

const CATEGORY_TABS: { label: string; value: GalleryCategory }[] = [
  { label: "All Sourced Media", value: "all" },
  { label: "Indian Sandstone", value: "sandstone" },
  { label: "Dense Granites", value: "granite" },
  { label: "IPPC Crates Packaging", value: "packaging" },
  { label: "Port Container Cargo", value: "containers" },
  { label: "Outdoor Paving Walks", value: "outdoor" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery based on the tabs
  const filteredGallery = selectedCategory === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    // Find the current index inside the FILTERED array to support easy Left/Right navigation
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
    <div id="gallery-page" className="bg-stone-50 min-h-screen pt-28 pb-20">
      
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="border-l-4 border-stone-800 pl-6 md:pl-8 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-stone-500 tracking-[0.3em] block">
            THE STONE GRIDS
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-stone-950">
            Immaculate Textures &amp; <br />
            <span className="italic font-light text-stone-700">Consolidated Cargo Lots</span>
          </h1>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
            Real photos illustrating sandstone textures, dense granite slabs stacks, IPPC heat-treated wooden crates packaging, and direct sea-freight container terminals.
          </p>
        </div>
      </div>

      {/* Categories Horizontal Tabs bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 border-b border-stone-200 pb-4 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2.5 min-w-[640px]">
          <span className="font-mono text-[10px] uppercase text-stone-400 tracking-wider mr-4 shrink-0">
            Categorized Archives
          </span>
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setSelectedCategory(tab.value);
                setLightboxIndex(null); // safely purge lightbox index when switching tabs
              }}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-200 shrink-0 ${
                selectedCategory === tab.value
                  ? "bg-stone-900 text-stone-100 font-medium border-stone-900"
                  : "bg-white hover:bg-stone-100 text-stone-600 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Responsive Grid of Images */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {filteredGallery.length === 0 ? (
          <div className="text-center py-20 bg-white border border-stone-200/60 p-8 font-mono">
            <span className="text-stone-400 text-sm block">NO ARCHIVES FOR SELECTED CLASS</span>
            <button 
              onClick={() => setSelectedCategory("all")}
              className="text-stone-900 font-medium text-xs uppercase underline tracking-wider mt-4"
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
                className="break-inside-avoid relative overflow-hidden bg-stone-950 border border-stone-200/80 cursor-pointer group shadow-sm hover:shadow-lg transition-all"
              >
                {/* Visual Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-95 group-hover:brightness-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subdued Minimal Info Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between items-end gap-2 text-stone-200">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-white leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <Maximize2 className="w-4 h-4 text-stone-300/80 shrink-0 mb-1" />
                  </div>
                </div>

                {/* Fallback Mobile Indicator (always showing small tag on mobile screens to ensure user intent accessibility) */}
                <div className="absolute top-2 right-2 sm:hidden bg-stone-950/80 text-white font-mono text-[8px] px-2 py-0.5 uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Lightbox Portal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            style={{ backdropFilter: "blur(4px)" }}
            id="gallery-lightbox-overlay"
          >
            {/* Close trigger */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-stone-300 hover:text-white p-2 border border-stone-800 bg-stone-900/60 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous slide trigger */}
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 md:left-8 text-stone-300 hover:text-white p-3 border border-stone-800 bg-stone-900/20 hover:bg-stone-900/60 rounded-none z-50"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next slide trigger */}
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 md:right-8 text-stone-300 hover:text-white p-3 border border-stone-800 bg-stone-900/20 hover:bg-stone-900/60 rounded-none z-50"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Viewbox */}
            <div className="max-w-4xl max-h-[70vh] flex items-center justify-center relative select-none">
              <motion.img 
                key={filteredGallery[lightboxIndex].id}
                src={filteredGallery[lightboxIndex].image} 
                alt={filteredGallery[lightboxIndex].title} 
                className="max-w-full max-h-[70vh] object-contain border border-stone-800"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption Info bottom */}
            <div className="max-w-xl text-center space-y-2 mt-6">
              <span className="font-mono text-[10px] uppercase text-stone-400 tracking-[0.2em] block">
                Category: {filteredGallery[lightboxIndex].category} &bull; Image {lightboxIndex + 1} of {filteredGallery.length}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-light text-stone-100">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed max-w-lg mx-auto">
                {filteredGallery[lightboxIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
