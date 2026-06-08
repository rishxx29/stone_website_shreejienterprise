import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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
  ChevronRight,
  Send,
  Building2,
  Anchor,
  Sparkle,
  Scale,
  Settings,
  Activity,
  Globe2
} from "lucide-react";
import Logo from "../components/Logo";

// Local image assets references
const containerLoad1 = "/src/assets/images/container_load_1_1780911726514.png";
const containerOpenExt = "/src/assets/images/container_open_ext_1780911744496.png";
const containerLoad2 = "/src/assets/images/container_load_2_1780911760568.png";
const luxuryVillaInterior = "/src/assets/images/luxury_villa_interior_1780912810343.png";
const premiumStoneStack = "/src/assets/images/premium_stone_stack_1780912826313.png";
const luxuryResortCourtyard = "/src/assets/images/luxury_resort_courtyard_1780912841518.png";

const PREMIUM_STONES = [
  {
    id: "kandla-grey",
    name: "Kandla Grey Sandstone",
    origin: "Rajasthan, India",
    type: "Sandstone",
    desc: "Naturally slip-resistant, calibrated sandstone with a fine-grained, elegant grey hue. Unmatched durability in extreme freeze-thaw cycles.",
    image: "/kandla_grey_real_2_1780479348623.png",
    properties: ["Freeze-Thaw Tolerant", "Anti-Slip R11 Surface", "Calibrated ±1mm Thick"],
    applications: ["Architectural Paving", "Resort Courtyards", "Pool Coping"]
  },
  {
    id: "raj-green",
    name: "Raj Green Sandstone",
    origin: "Rajasthan, India",
    type: "Sandstone",
    desc: "An organic medley of soft olive, khaki, sage-grey, and warm sand. Naturally textured, slip-resistant finish matching premier landscape layouts.",
    image: "/raj_green_real_1_1780479414994.png",
    properties: ["Multi-Tonal Organic Blend", "Natural Slip-Resistant Surface", "Optimized Density & Grit"],
    applications: ["Patio Flagstones", "Garden Step Riser", "Outdoor Sitting Areas"]
  },
  {
    id: "autumn-brown",
    name: "Autumn Brown Sandstone",
    origin: "Rajasthan, India",
    type: "Sandstone",
    desc: "A warm palette of terracotta, beige, and copper-brown layers. Perfectly suited for landscape paving and rustic estate layouts.",
    image: "/autumn_brown_real_dry.png",
    properties: ["Rich Layered Bands", "Low Water Absorption", "Hand-Chipped Edges Available"],
    applications: ["Patio Flagstones", "Garden Steps", "Water Feature Surrounds"]
  }
];

const SPECIALTY_SANDSTONES = [
  {
    id: "raj-green-spec",
    name: "Raj Green Natural Sandstone",
    finish: "Dry Matte Cleft Paving",
    desc: "An organic medley of soft olive greens, khaki, sage-grey, and warm sand. Naturally textured, slip-resistant finish matched exactly to our live production yards.",
    veining: "Natural split-face bedding with subtle tonal variation.",
    image: "/raj_green_real_dry_patio.png",
    highlight: "Direct Quarry Stock"
  },
  {
    id: "rippon-buff-spec",
    name: "Rippon Buff Premium Sandstone",
    finish: "Vibrant Swirling Patio Tiles",
    desc: "Vibrant golden-buff foundational blocks accented by mesmerizing geological waves of soft rose, peach, and copper-bronze ochre, providing outstanding outdoor wear resistance.",
    veining: "Pronounced high-contrast metamorphic waves of color.",
    image: "/rippon_buff_real_vibrant.png",
    highlight: "Pre-Sorted Hand Picked Slabs"
  },
  {
    id: "indian-york-spec",
    name: "Indian York Heavy Sandstone",
    finish: "Vintage Hard-wearing Pavers",
    desc: "Traditional rugged gray, olive, and autumn-tan pavers emulating classic British Yorkstone with low porosity, extreme load stability, and natural drainage attributes.",
    veining: "Dense quartz grains with fine natural stratification.",
    image: "/indian_york_real_1.png",
    highlight: "Sawn & Calibrated 22mm / 30mm"
  }
];

const PREMIUM_SANDSTONE_COLLECTION = [
  {
    id: "autumn-brown-wet",
    name: "Autumn Brown (Wet Gloss Finish)",
    density: "Low Porosity (Calibrated 18mm / 22mm)",
    desc: "When wet or sealed, these natural flagstone slabs exhibit deep chocolate-brown, rich mahogany, and warm copper base tones. Perfect for high-contrast garden patios, borders, and scenic pool surroundings.",
    finish: "Wet Look / Sealed Cleft",
    image: "/autumn_brown_real_wet.png"
  },
  {
    id: "autumn-brown-dry",
    name: "Autumn Brown (Dry Cleft Slabs)",
    density: "Calibrated 18mm / 22mm Standard",
    desc: "A stunning dry-matte layout highlighting earthy taupe, warm tan, and rustic bronze grains. Highly durable split cleft face that is naturally slip-resistant with outstanding freeze-thaw tolerance.",
    finish: "Earthy Natural Cleft face",
    image: "/autumn_brown_real_dry.png"
  },
  {
    id: "kandla-grey-core",
    name: "Kandla Grey Premium Slabs",
    density: "Calibrated 18mm / 22mm Block Pack",
    desc: "The absolute B2B benchmark in modern European landscape architecture. Features consistent cool slate grey tones, superior dimensional thickness calibration, and outstanding load capacity.",
    finish: "Natural Split & Calibrated",
    image: "/kandla_grey_real_1_1780479327873.png"
  }
];

const TESTIMONIALS = [
  {
    quote: "Sourcing Kandla Grey sandstone containers from Shree Jyoti is a seamless experience. Their sawn edges are perfectly calibrated, allowing our European installers to layout courtyards with minimal grout gap. Exceptional dimensional tolerance.",
    author: "Marc Werner",
    role: "Project Director",
    company: "Werner & Söhne Landscaping GmbH",
    location: "Munich, Germany"
  },
  {
    quote: "Sourcing Rippon Buff and Raj Green sandstone from Shree Jyoti has been a game-changer for our residential landscaping business in the UK. The thickness calibration is accurate, and the color representation is exactly as shown in their yards.",
    author: "David Hirst",
    role: "Lead Landscape Architect",
    company: "Hirst Garden Designs Ltd",
    location: "London, UK"
  },
  {
    quote: "Our wholesale container shipments of Autumn Brown and Kandla Grey sandstone arrived perfectly in Seattle. Every single crate was securely reinforced with wood-bracings and sea-worthy lashing. Outstanding quality and service.",
    author: "Robert Vance",
    role: "Wholesale Sourcing VP",
    company: "Pacific Stone Imports Inc",
    location: "Seattle, USA"
  }
];

const PORTFOLIO_ITEMS = [
  { id: "p1", title: "Luxury Resort Courtyard", stone: "Kandla Gray & Sandstone", img: luxuryResortCourtyard },
  { id: "p2", title: "Commercial Garden Esplanade", stone: "Autumn Brown", img: "/autumn_brown_real_dry.png" },
  { id: "p3", title: "Traditional Sandstone Courtyard", stone: "Raj Green", img: "/raj_green_real_dry_patio.png" },
  { id: "p4", title: "Minimalist Villa Interior", stone: "Quartzite Walls", img: luxuryVillaInterior },
  { id: "p5", title: "Swimming Pool Surrounds", stone: "Rippon Buff", img: "/rippon_buff_real_vibrant.png" },
  { id: "p6", title: "Concentric Garden Focal Piece", stone: "Sandstone Circle Kit", img: "/sandstone_circle_kit_1780479388000.png" }
];

export default function Home() {
  const [stoneClass, setStoneClass] = useState("kandla-grey");
  const [thickness, setThickness] = useState("20mm");
  const [targetPort, setTargetPort] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress) return;
    
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 1800);
  };

  return (
    <div id="home-page" className="overflow-x-hidden relative bg-slate-50 text-slate-800 selection:bg-accent selection:text-slate-950">
      
      {/* -------------------- HERO SECTION (Pristine Centered Display Board) -------------------- */}
      <section 
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-36 pb-24 lg:py-0" 
        id="hero-section"
      >
        {/* Ivory Sand Ambient Gradients & Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={luxuryVillaInterior} 
            alt="Premium Architectural Stone Quarry Slabs" 
            className="w-full h-full object-cover object-center opacity-12 scale-102 filter brightness-[1.05] saturate-[0.8] contrast-[0.95]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Glowing Ambient Orbs of Warm Sienna Amber and Soft Gold */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 opacity-20 blur-[140px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent"></div>
        </div>

        {/* Dense Hexagonal Grid Pattern Overlay */}
        <div className="absolute inset-0 saas-grid-pattern opacity-25 pointer-events-none z-10"></div>

        {/* Main Centered Content Layout */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 xl:px-16 w-full z-20 text-center flex flex-col items-center">
          
          {/* Premium Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent border border-accent/20 bg-amber-500/10 rounded-full shadow-[0_0_15px_rgba(217,119,6,0.05)] backdrop-blur-md mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>ESTD. 2007 | ISO 9001:2015 CERTIFIED</span>
          </motion.div>

          {/* Epic Centered Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] text-slate-900 font-normal tracking-tight leading-[1.06] max-w-4xl mx-auto">
              Premium Indian <br />
              <span className="italic font-normal">Natural Stone</span> <br />
              Exporter
            </h1>
          </motion.div>

          {/* Centered Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-650 font-normal leading-relaxed font-sans mt-8 mx-auto"
          >
            Mastering the art of stone manufacturing for 16+ years. Delivering the finest Kandla Grey, premium Sandstone, and Granite to global architectural landmarks.
          </motion.p>

          {/* Centered Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#premium-stones-section"
              className="btn-premium-indigo px-8 py-4.5 font-mono text-[10px] uppercase tracking-[0.2em] font-extrabold rounded-lg inline-flex items-center gap-2.5 w-full sm:w-auto justify-center cursor-pointer text-center text-white"
            >
              Explore Products <ArrowRight className="w-4 h-4 text-accent" />
            </a>
            <a 
              href="#contact-form-section"
              className="w-full sm:w-auto text-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-755 px-8 py-4.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-extrabold rounded-lg shadow-sm cursor-pointer"
            >
              Inquire Now &rarr;
            </a>
          </motion.div>

        </div>

        {/* Dynamic page scroll visual index */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 z-20 select-none">
          <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-accent font-extrabold opacity-75">
            Scroll to Specifications Catalog
          </span>
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </section>


      {/* -------------------- SECTION: GLOBAL RELIABILITY (4 Cards Grid) -------------------- */}
      <section 
        className="py-32 relative bg-white border-t border-slate-200" 
        id="global-reliability-section"
      >
        {/* Subtle grid bg for professional feel */}
        <div className="absolute inset-0 saas-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[10px] uppercase text-accent tracking-[0.35em] block font-extrabold">
              GLOBAL RELIABILITY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-slate-900 leading-tight">
              Assuring <span className="italic">Impeccable Sourcing</span> and Fortified Shipments
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-[#faf9f5]/55 p-8 rounded-xl border border-slate-200/80 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 border border-slate-200/80 flex items-center justify-center rounded-lg mb-6 text-accent bg-white shadow-sm">
                  <Award className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                  16+ Years Experience
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-extrabold block mb-4">
                  IN-DEPTH NATURAL STONE EXPERTISE
                </span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
                  Operating with profound knowledge of geological variations, processing standards, and domestic supply, now bringing world-class products directly to international markets.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#faf9f5]/55 p-8 rounded-xl border border-slate-200/80 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 border border-slate-200/80 flex items-center justify-center rounded-lg mb-6 text-accent bg-white shadow-sm">
                  <Package className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                  Export Quality Packaging
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-extrabold block mb-4">
                  SEAWORTHY WOODEN CRATE FORTIFICATION
                </span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
                  Every shipment is secured with premium IPPC heat-treated wooden crates, sturdy tension strapping, and soft edge guards to guarantee scratch-free port delivery.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-[#faf9f5]/55 p-8 rounded-xl border border-slate-200/80 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 border border-slate-200/80 flex items-center justify-center rounded-lg mb-6 text-accent bg-white shadow-sm">
                  <Truck className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                  Timely Delivery
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-extrabold block mb-4">
                  OPTIMIZED LOGISTICS FLEET
                </span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
                  Efficient domestic transit coordination and strong freight integrations at Indian ports guarantee strict adherence to B2B shipping timelines.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-[#faf9f5]/55 p-8 rounded-xl border border-slate-200/80 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 border border-slate-200/80 flex items-center justify-[0.95] items-center justify-center rounded-lg mb-6 text-accent bg-white shadow-sm">
                  <Sparkles className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900 mb-2">
                  Premium Stone Finishing
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-extrabold block mb-4">
                  STATE-OF-THE-ART PROCESSING
                </span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
                  Advanced calibration machinery, diamond-edge cut precision, and rigorous manual inspection line-ups deliver immaculate slab tolerances and surface finishes.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>      {/* -------------------- SECTION 1: SIGNATURE COLLECTIONS -------------------- */}
      <section 
        className="py-32 relative bg-white border-t border-slate-200" 
        id="premium-stones-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header with SaaS Numbering */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="border-l-4 border-indigo-c pl-6 space-y-1.5">
              <span className="font-mono text-[11px] uppercase text-indigo-c tracking-[0.3em] block font-extrabold">
                01 &bull; SIGNATURE COLLECTION
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Architectural Slabs &amp; Blocks
              </h2>
              <p className="max-w-xl text-sm text-slate-600 leading-relaxed font-sans font-normal mt-2">
                High-density structural quartzites, pristine sandstone tiles, and calibrated paving blocks sourced from Rajasthan's prime geological zones. Engineered for lifelong design durability.
              </p>
            </div>
            
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-c hover:text-secondary font-bold border-b-2 border-indigo-500/20 pb-1.5 hover:border-secondary transition-all duration-300"
            >
              Full Specifications Catalog <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PREMIUM_STONES.map((stone, idx) => (
              <motion.div
                key={stone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group rounded-xl"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <img 
                      src={stone.image} 
                      alt={stone.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-accent border border-cyan-500/30 font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded-md shadow-sm backdrop-blur-md">
                      {stone.type}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="p-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                        Quarry Source: {stone.origin}
                      </span>
                      <h3 className="font-sans text-xl font-extrabold text-slate-900 group-hover:text-indigo-c transition-colors duration-300">
                        {stone.name}
                      </h3>
                    </div>
                    
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal min-h-[55px]">
                      {stone.desc}
                    </p>

                    <div className="h-[1px] bg-slate-100"></div>

                    {/* Properties List */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-secondary uppercase tracking-wider block font-bold">
                        Architectural Merits
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {stone.properties.map((prop, i) => (
                           <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-normal">
                             <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                             <span>{prop}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-7 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {stone.applications.map((app, i) => (
                      <span 
                        key={i}
                        className="bg-slate-50 border border-slate-150 text-slate-600 text-[9px] font-mono px-2.5 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/products?selected=${stone.id}`}
                    className="btn-premium-indigo w-full text-center py-3.5 block font-mono text-[9px] uppercase tracking-widest font-extrabold rounded-lg text-white"
                  >
                    Specifications Sheet
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* -------------------- SECTION 2: SPECIALTY PAVING -------------------- */}
      <section 
        className="py-32 relative bg-slate-50 text-slate-800 border-t border-slate-205 saas-grid-pattern" 
        id="specialty-sandstones-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 border-l-4 border-accent pl-6 space-y-2">
            <span className="font-mono text-[11px] uppercase text-accent tracking-[0.3em] block font-extrabold">
              02 &bull; COMPLIANCE RANGES
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Pre-Graded Premium Patio Slabs
            </h2>
            <p className="text-sm text-slate-650 font-sans leading-relaxed font-normal mt-2">
              Meticulously selected sandstone paving series. Sourced from the finest quarry strata of Rajasthan and calibrated to precise export specifications, these collections deliver outstanding landscape consistency.
            </p>
          </div>

          {/* Sandstone Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SPECIALTY_SANDSTONES.map((stone, idx) => (
              <motion.div
                key={stone.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white overflow-hidden border border-slate-205 flex flex-col justify-between group shadow-sm rounded-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-205">
                    <img 
                      src={stone.image} 
                      alt={stone.name} 
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded shadow-md">
                      {stone.highlight}
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono text-accent tracking-widest block font-bold">
                        {stone.finish}
                      </span>
                      <h3 className="font-sans text-xl font-extrabold text-slate-900 group-hover:text-accent transition-colors leading-tight">
                        {stone.name}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                      {stone.desc}
                    </p>

                    <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg space-y-1">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold select-none">Veining Matrix Definition</span>
                      <p className="text-xs text-accent italic font-sans">{stone.veining}</p>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 mt-auto">
                  <Link 
                    to={`/contact?subject=Inquiry on ${stone.name}`}
                    className="w-full text-center border border-slate-200 hover:border-accent text-slate-700 hover:text-white hover:bg-slate-900 py-3.5 block font-mono text-[9px] uppercase tracking-widest font-bold transition-all duration-300 rounded-lg bg-slate-50"
                  >
                    Get Quotation &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* -------------------- SECTION 3: CALIBRATED RANGES -------------------- */}
      <section 
        className="py-32 relative bg-white border-t border-slate-200" 
        id="premium-sandstones-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="border-l-4 border-secondary pl-6 space-y-1.5">
              <span className="font-mono text-[11px] uppercase text-secondary tracking-[0.3em] block font-extrabold">
                03 &bull; CALIBRATION SERVICES
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Calibrated Sawn Thickness Series
              </h2>
              <p className="max-w-xl text-sm text-slate-600 leading-relaxed font-sans font-normal mt-2">
                High-density slabs processed with precision thickness. Designed for direct installation, minimal joints, and maximum durability under harsh climatic weathering.
              </p>
            </div>
            
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-c hover:text-secondary font-bold border-b-2 border-indigo-500/20 pb-1.5 hover:border-secondary transition-all duration-300"
            >
              Browse Complete Ranges <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sandstones Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PREMIUM_SANDSTONE_COLLECTION.map((sandstone, idx) => (
              <motion.div
                key={sandstone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="aspect-[16/11] rounded-lg overflow-hidden bg-slate-50 mb-6 border border-slate-200">
                    <img 
                      src={sandstone.image} 
                      alt={sandstone.name} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-3.5">
                     <div className="space-y-1">
                      <div className="flex items-center gap-2 text-indigo-c font-mono text-[9px] uppercase font-extrabold tracking-widest">
                        <Sparkle className="w-3.5 h-3.5 text-accent" />
                        <span>{sandstone.density}</span>
                      </div>
                      <h3 className="font-sans text-xl font-extrabold text-slate-900 group-hover:text-indigo-c transition-colors leading-snug">
                        {sandstone.name}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-sans font-normal">
                      {sandstone.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-slate-500">
                    <span>GRID CLASSIFIER: </span>
                    <span className="font-extrabold text-slate-700">{sandstone.finish}</span>
                  </div>
                  
                  <Link 
                    to={`/contact?subject=Inquiry regarding ${sandstone.name}`}
                    className="p-2.5 border border-slate-200 rounded-full hover:bg-indigo-c hover:border-indigo-c hover:text-white transition-all text-slate-500"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------- SECTION 4: GLOBAL EXPORT -------------------- */}
      <section 
        className="py-32 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-slate-200 saas-grid-pattern" 
        id="export-services-section"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-accent/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full font-sans">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Informative logistics column */}
            <div className="space-y-8 col-span-1">
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase text-accent tracking-[0.3em] block font-extrabold">
                  04 &bull; EXPORT OPERATIONS
                </span>
                <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Global Freight Integrity <br />
                  <span className="text-gradient font-bold">
                    Heavy Duty Timber Lashing
                  </span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-slate-605 leading-relaxed font-sans font-normal">
                Consignments departing Rajasthan factories are packed within certified ISPM-15 heat-treated wood pallets, reinforced with iron strap bounds and security timber bracing. We orchestrate sea duty clearances, bill-of-lading processing, and multi-country customs alignment.
              </p>

              {/* Service Grid boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-5 border border-slate-200 rounded-xl bg-white flex gap-4 items-start hover:border-accent shadow-sm transition-all">
                  <div className="p-2 bg-amber-500/10 text-accent rounded-lg shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900">Heat-Treated Crating</h4>
                    <p className="text-xs text-slate-550 font-sans leading-relaxed">Fumigated IPPC timber blocks with rigid polystyrene corner braces and plastic wrapping.</p>
                  </div>
                </div>

                <div className="p-5 border border-slate-200 rounded-xl bg-white flex gap-4 items-start hover:border-secondary shadow-sm transition-all">
                  <div className="p-2 bg-purple-500/10 text-secondary rounded-lg shrink-0">
                    <Truck className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900">Direct Port Freight</h4>
                    <p className="text-xs text-slate-550 font-sans leading-relaxed">Overland heavy vehicle coordination directly to ICD Mundra, Pipavav, and Kandla ports.</p>
                  </div>
                </div>

                <div className="p-5 border border-slate-200 rounded-xl bg-white flex gap-4 items-start hover:border-accent shadow-sm transition-all">
                  <div className="p-2 bg-amber-500/10 text-accent rounded-lg shrink-0">
                    <Anchor className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900">Customs Clearance</h4>
                    <p className="text-xs text-slate-550 font-sans leading-relaxed">Meticulous shipping manifest verification to comply with rigorous EU/UK import parameters.</p>
                  </div>
                </div>

                <div className="p-5 border border-slate-200 rounded-xl bg-white flex gap-4 items-start hover:border-accent shadow-sm transition-all">
                  <div className="p-2 bg-amber-550/10 text-accent rounded-lg shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900">IEC Certification</h4>
                    <p className="text-xs text-slate-550 font-sans leading-relaxed">Registration ID AJKPJ0167G validating absolute trade compliance at entry ports.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Visual Mosaic Cards */}
            <div className="grid grid-cols-2 gap-5 relative font-sans">
              <div className="space-y-5">
                <div className="aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
                  <img 
                    src={containerLoad1} 
                    alt="Packaging Wooden Crates - Real Loading" 
                    className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 text-[8px] font-mono uppercase tracking-widest px-3 py-1.5 text-accent font-bold rounded border border-slate-200 shadow-sm">
                    Cargo Lashing
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center text-slate-800 min-h-[160px] relative overflow-hidden shadow-sm">
                  <div className="absolute right-0 top-0 w-16 h-16 bg-accent/5 rounded-bl-full"></div>
                  <span className="text-4xl font-sans font-black text-accent shadow-sm">100%</span>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                    Traceable Legal Strata Quarry Compliance
                  </p>
                </div>
              </div>

              <div className="space-y-5 pt-8">
                <div className="bg-slate-100 aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
                  <img 
                    src={containerOpenExt} 
                    alt="Global Cargo container" 
                    className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 text-[8px] font-mono uppercase tracking-widest px-3 py-1.5 text-accent font-bold rounded border border-slate-200 shadow-sm">
                    Maritime 22G1 Slabs
                  </div>
                </div>

                <div className="aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
                  <img 
                    src={containerLoad2} 
                    alt="Loaded sandstone tiles inside container" 
                    className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 text-[8px] font-mono uppercase tracking-widest px-3 py-1.5 text-accent font-bold rounded border border-slate-200 shadow-sm">
                    Palleted Container Load
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-xl text-[10px] font-mono space-y-1.5 shadow-sm select-none">
                  <span className="text-slate-400 block text-[8px] tracking-wider font-extrabold uppercase">GOVT INC NO:</span>
                  <p className="text-accent font-bold">GSTIN: 08AJKPJ0167G1Z9</p>
                  <p className="text-slate-500">IEC CODE: AJKPJ0167G</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* -------------------- SECTION 5: PROJECTS ARCHIVE -------------------- */}
      <section 
        className="py-32 relative bg-white border-t border-slate-200" 
        id="projects-gallery-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 font-sans">
            <div className="border-l-4 border-indigo-c pl-6 space-y-1.55">
              <span className="font-mono text-[11px] uppercase text-indigo-c tracking-[0.3em] block font-extrabold">
                05 &bull; ARCHITECTURAL SHOWCASE
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Global Estates Installation Gallery
              </h2>
              <p className="text-sm text-slate-605 leading-relaxed font-sans font-normal max-w-lg mt-2">
                Documenting real-world commissions, luxury pooldecks, and municipal paving grids laid with our calibrated natural materials.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {PORTFOLIO_ITEMS.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-[0.35] ease-out"
                  />
                  
                  {/* Hover visual panel card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-extrabold">
                      {item.stone} MATERIAL
                    </span>
                    <h3 className="font-sans text-lg text-white font-extrabold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-sans mt-2 leading-relaxed">
                      Quarried and custom processed strictly according to contract layout dimensioning. Passed quality assurance.
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Gallery Redirect link */}
          <div className="text-center mt-14">
            <Link 
              to="/gallery"
              className="btn-premium-indigo text-white px-8 py-4 inline-flex items-center gap-2.5 font-mono text-[9.5px] uppercase tracking-widest font-extrabold rounded-lg"
            >
              Browse Extended Gallery Archives <ExternalLink className="w-4 h-4 text-accent" />
            </Link>
          </div>

        </div>
      </section>


      {/* -------------------- SECTION 6: QUALITY & SPECIFICATIONS -------------------- */}
      <section 
        className="py-32 relative bg-slate-50 border-t border-slate-200" 
        id="certifications-quality-section"
      >
        <div className="absolute inset-0 saas-grid-pattern opacity-15 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column visual metrics */}
            <div className="space-y-8 font-sans">
              <div className="bg-white border border-slate-200 p-8 rounded-xl relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 top-0 opacity-5 font-sans text-[120px] font-black select-none translate-y-10 translate-x-3 text-indigo-c">
                  SJE
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-indigo-500/10 text-indigo-c rounded-full">
                      <Award className="w-5 h-5 text-indigo-c" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B87333] font-extrabold">
                      STANDARDS COMPLIANCE LOGS
                    </span>
                  </div>
                  
                  <h3 className="font-sans text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                    ISO 9001:2015 Process Certification
                  </h3>
                  
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                    Every export bundle undergoes strict verification of orthogonal dimensioning, flatness, and edge cleanliness. Mechanized split cleft faces are pressure calibrated to standard millimeter configurations.
                  </p>
                </div>
              </div>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-4 font-sans">
                <div className="p-5 border border-slate-205 text-center rounded-xl bg-white shadow-sm">
                  <span className="block font-sans text-3xl font-extrabold text-indigo-c">130+</span>
                  <span className="block font-sans text-[8.5px] text-slate-500 uppercase tracking-wider mt-2 font-bold leading-normal">Comp. Strength (MPa)</span>
                </div>
                <div className="p-5 border border-slate-205 text-center rounded-xl bg-white shadow-sm">
                  <span className="block font-sans text-3xl font-extrabold text-accent">&lt; 0.5%</span>
                  <span className="block font-sans text-[8.5px] text-slate-500 uppercase tracking-wider mt-2 font-bold leading-normal">Water Absorption</span>
                </div>
                <div className="p-5 border border-slate-205 text-center rounded-xl bg-white shadow-sm">
                  <span className="block font-sans text-3xl font-bold text-slate-800">&plusmn;1mm</span>
                  <span className="block font-sans text-[8.5px] text-slate-500 uppercase tracking-wider mt-2 font-bold leading-normal">Thickness Tolerance</span>
                </div>
              </div>
            </div>

            {/* Right Column checklist details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase text-secondary tracking-[0.3em] block font-extrabold">
                  06 &bull; QUALITY STANDARDS
                </span>
                <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Uncompromising Architectural Quality
                </h2>
              </div>

              <div className="space-y-6 pt-2">
                
                <div className="flex gap-4">
                  <div className="p-2 bg-indigo-500/10 text-indigo-c rounded-full h-fit">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-base font-extrabold text-slate-950">Diamond Sawn Edge Precision</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed">Multi-blade stone block cutters slice the raw sandstone blocks evenly to maintain flat margins and prevent corner flares.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-purple-500/10 text-purple-600 rounded-full h-fit">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-base font-extrabold text-slate-950">ISPM-15 Timber Certification</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed">Crating timber is kiln-dried and chemical-treated strictly aligned with marine port sanitation rules.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-cyan-500/10 text-cyan-600 rounded-full h-fit">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-base font-extrabold text-slate-950">Veterans Manual Sorting Line</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed">Every individual paver is verified by veteran regional processors to weed out natural micro-fissures or mineral voids before packing.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* -------------------- SECTION 7: CLIENT TESTIMONIALS -------------------- */}
      <section 
        className="py-32 relative bg-white border-t border-slate-200" 
        id="testimonials-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-3">
            <span className="font-mono text-[11px] uppercase text-indigo-c tracking-[0.3em] block font-extrabold">
              07 &bull; PARTNER REVIEWS
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Testaments of Trust Across Borders
            </h2>
            <p className="text-sm text-slate-605 font-sans leading-relaxed max-w-lg mx-auto font-normal">
              Endorsed by international developers, wholesale distributors, and landscape artists.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-200 hover:border-accent/40 transition-all duration-350 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Accent background logo */}
                <div className="absolute right-0 top-0 opacity-5 text-slate-400 pointer-events-none translate-x-4 -translate-y-4">
                  <Building2 className="w-24 h-24 stroke-[1]" />
                </div>
                
                {/* Quote details */}
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Sparkle key={i} className="w-4 h-4 fill-cyan-400/20 text-accent animate-pulse" />
                    ))}
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author profile metrics */}
                <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-3.5 relative z-10 font-sans">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-c to-secondary flex items-center justify-center text-white font-mono text-sm font-extrabold uppercase shadow-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-extrabold text-slate-900">
                      {t.author}
                    </h4>
                    <p className="text-[10px] font-mono text-indigo-c uppercase tracking-wider font-extrabold">
                      {t.role}, {t.company}
                    </p>
                    <p className="text-[9.5px] font-sans text-slate-500 font-normal">
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>      {/* -------------------- SECTION 8: CONTACT & INQUIRY FORM -------------------- */}
      <section 
        className="py-32 relative bg-slate-50 text-slate-805 border-t border-slate-200 saas-grid-pattern" 
        id="contact-form-section"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Information Column (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-l-4 border-accent pl-6 space-y-2">
                <span className="font-mono text-[11px] uppercase text-accent tracking-[0.3em] block font-extrabold">
                  08 &bull; INQUIRY GATEWAY
                </span>
                <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Request an Export Quotation
                </h2>
                <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed font-normal mt-2">
                  Direct communication with our quarrying managers secures optimal pricing. Provide your discharge port or dimension specification sheets in the system.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white border border-slate-200 rounded-full text-accent shadow-sm">
                    <Send className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Main Office Email Directory</span>
                    <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-xs sm:text-xs md:text-sm font-semibold text-slate-900 hover:text-accent transition-all break-all block mt-0.5">
                      shreejyotienterpriseskota@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-white border border-slate-200 rounded-full text-accent shadow-sm">
                    <Globe2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Live Sourcing Managers</span>
                    <a href="https://wa.me/919252032292" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-semibold text-slate-800 hover:text-accent transition-colors block">
                      +91 92520 32292 (Nitesh Jain)
                    </a>
                    <a href="https://wa.me/919829376431" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-semibold text-slate-800 hover:text-accent transition-colors block">
                      +91 98293 76431 (Sohan Lal Jain)
                    </a>
                  </div>
                </div>

                <div className="bg-white text-slate-700 p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm select-none">
                  <span className="font-mono text-[9px] uppercase text-[#B87333] tracking-widest block font-extrabold">Commercial Depot Warehouse</span>
                  <div className="text-xs leading-relaxed space-y-1.5 font-sans">
                    <p className="font-bold text-slate-900">Shree Jyoti Enterprises Office:</p>
                    <p>Office - 146 Transport Nagar,</p>
                    <p>Gobriya Bawadi Kota, Rajasthan 324005, India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column (lg:col-span-7) */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-xl shadow-lg relative">
                
                <AnimatePresence mode="wait">
                  {!formSuccess ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleFormSubmit}
                      className="space-y-5 font-sans"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="font-sans text-xl md:text-2xl font-extrabold text-slate-900">
                        Live Ocean Freight &amp; Sample Ordering
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Target Stone Category</label>
                          <select 
                            value={stoneClass}
                            onChange={(e) => setStoneClass(e.target.value)}
                            className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-805 text-sm focus:border-accent focus:outline-none rounded-lg font-mono text-[10.5px] uppercase tracking-wider"
                          >
                            <option value="kandla-grey">Kandla Grey Sandstone</option>
                            <option value="autumn-brown">Autumn Brown Sandstone</option>
                            <option value="raj-green">Raj Green Sandstone</option>
                            <option value="rippon-buff">Rippon Buff Sandstone</option>
                            <option value="indian-york">Indian York Sandstone</option>
                            <option value="sandstone-circle">Sandstone Circle Kits</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Thickness Tolerance</label>
                          <select 
                            value={thickness}
                            onChange={(e) => setThickness(e.target.value)}
                            className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-805 text-sm focus:border-accent focus:outline-none rounded-lg font-mono text-[10.5px] uppercase tracking-wider"
                          >
                            <option value="20mm">Calibrated 20mm (±1mm)</option>
                            <option value="22mm">Calibrated 22mm (±1mm)</option>
                            <option value="18mm">Calibrated 18mm standard</option>
                            <option value="25-35mm">Natural Split 25-35mm</option>
                            <option value="custom">Custom Commercial Cut</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Destination Sea Port / City</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Felixstowe Port (UK), Hamburg (DE), Mundra FOB" 
                          value={targetPort}
                          onChange={(e) => setTargetPort(e.target.value)}
                          className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-805 text-sm focus:border-accent focus:outline-none rounded-lg placeholder-slate-400"
                        />
                      </div>

                      <div className="h-[1px] bg-slate-200 my-2"></div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Direct Contact Person *</label>
                          <input 
                            type="text" 
                            required
                            placeholder="Full Name" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-850 text-sm focus:border-accent focus:outline-none rounded-lg placeholder-slate-400"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Company Entity</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Werner Landscaping Group" 
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-850 text-sm focus:border-accent focus:outline-none rounded-lg placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Corporate Email *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="name@company.com" 
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-850 text-sm focus:border-accent focus:outline-none rounded-lg placeholder-slate-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase text-slate-500 font-extrabold tracking-wider block">Specification Notes / LCL Volume</label>
                        <textarea 
                          rows={3}
                          placeholder="Detailed sizes, finishes (Sawn, Hand-Chipped, Tumbled) or mix ratios requested..." 
                          value={userMsg}
                          onChange={(e) => setUserMsg(e.target.value)}
                          className="w-full border border-slate-200 p-3.5 bg-slate-50 text-slate-850 text-sm focus:border-accent focus:outline-none rounded-lg placeholder-slate-400"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="btn-premium-indigo cursor-pointer w-full text-center py-4 text-xs font-semibold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 text-white"
                      >
                        {formSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>CALCULATING SEA QUOTE...</span>
                          </>
                        ) : (
                          <>
                            <span>DISPATCH Sourcing Request</span>
                            <Send className="w-3.5 h-3.5 text-accent" />
                          </>
                        )}
                      </button>

                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      className="py-12 text-center space-y-6 font-sans"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="w-16 h-16 bg-amber-500/10 text-accent rounded-full flex items-center justify-center mx-auto shadow-sm border border-accent/20">
                        <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-slate-900">Sourcing Request Confirmed</h3>
                        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                          Thank you, <span className="text-accent underline font-bold">{fullName}</span>. SJE Logistics Desk has registered your query for <span className="font-bold text-slate-900 uppercase">{stoneClass}</span> targeting <span className="text-accent underline font-bold">{targetPort || "Mundra Port (FOB)"}</span>.
                        </p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg max-w-md mx-auto space-y-1 text-left text-xs font-mono text-slate-600 leading-normal">
                        <span className="text-accent font-extrabold text-[9px] block uppercase">Live Telemetry Registration Details:</span>
                        <p className="mt-1">CLIENT ASSIGNMENT ID: SJE-INQ-{Math.floor(Math.random() * 9000) + 1000}</p>
                        <p>ESTIMATED SEADONE DRAFTING: &lt; 4 Hours (Mo-Sa)</p>
                        <p>VERIFICATION ROUTE: DIRECT PORT TRANSIT LASHING</p>
                      </div>

                      <button
                        onClick={() => {
                          setFormSuccess(false);
                          setFullName("");
                          setTargetPort("");
                          setCompanyName("");
                          setUserMsg("");
                        }}
                        className="btn-premium-indigo hover:opacity-90 transition-all font-sans text-xs w-64 mx-auto py-3 uppercase tracking-widest font-extrabold rounded-lg inline-block text-white"
                      >
                        Reset Sourcing Intake
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
