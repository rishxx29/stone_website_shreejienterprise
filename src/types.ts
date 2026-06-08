export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImage?: string;
  realImages?: string[];
  properties: string[];
  applications: string[];
  finishes: string[];
  sizes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sandstone' | 'packaging' | 'containers' | 'outdoor';
  image: string;
  description: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// Global Static Data to keep the code modular and clean
export const PRODUCTS_DATA: Product[] = [
  {
    id: "kandla-grey",
    name: "Kandla Grey Sandstone",
    slug: "kandla-grey-sandstone",
    description: "Anti-slip, highly durable, weather-resistant natural sandstone with a hand-dressed or calibrated surface. A premium choice for sophisticated outdoor architectures globally.",
    longDescription: "Kandla Grey Sandstone is a popular Indian sandstone recognized for its subtle, consistent grey color and natural anti-slip texture. Widely used for outdoor paving, pathways, and landscaping, it offers excellent durability and a timeless look. Highly resistant to frost, acids, and thermal expansion, it keeps its pristine raw elegance in all seasons.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200", // elegant modern patio with grey stone
    secondaryImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200", // close up grey architectural stones
    realImages: [
      "/kandla_grey_real_1_1780479327873.png",
      "/kandla_grey_real_2_1780479348623.png"
    ],
    properties: ["Anti-slip Texture", "Weather Resistant", "High Load Bearing", "Durable Composition"],
    applications: ["Pathways & Driveways", "Parking Areas", "Garden Paving", "Landscaping Layouts"],
    finishes: ["Natural Calibrated", "Hand Cut / Sawn Edge", "Shotblasted", "Tumbled"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "600 x 290 mm", "Mixed Patio Packs", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "autumn-brown",
    name: "Autumn Brown Sandstone",
    slug: "autumn-brown-sandstone",
    description: "Earthy brown tones fused with high density and natural sandstone stability. Extreme compressive strength and low porosity, designed for robust exterior path pavings and warm facades.",
    longDescription: "Autumn Brown Sandstone is a highly sought-after B2B paving export, presenting a rustic, warm blend of brown, tan, and bronze tones. Renowned for its slip resistance, frost tolerance, and color stability under harsh UV environments, it transforms courtyards, residential landscaping, and B2B building blocks into enduring visual assets.",
    image: "/autumn_brown_real_wet.png",
    secondaryImage: "/autumn_brown_real_dry.png",
    realImages: [
      "/autumn_brown_real_wet.png",
      "/autumn_brown_real_dry.png"
    ],
    properties: ["Hard natural surface density", "Elegant Warm Color Blend", "Minimal water absorption", "Zero color fade under sunlight"],
    applications: ["Patio Walks & Driveways", "High-Traffic Flooring", "Exterior Protective Facades", "Decorative Edgings"],
    finishes: ["Natural Split / Calibrated", "Sawn Calibrated", "Tumbled & Brushed", "Lapatro"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "290 x 290 mm", "Mixed Patio Packs", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "raj-green",
    name: "Raj Green Sandstone",
    slug: "raj-green-sandstone",
    description: "Classic multi-tonal Indian sandstone in dry earthy tones, displaying soft olive green, warm khaki-ochre, sage, and sand shades with a fine rugged cleft texture.",
    longDescription: "Raj Green Sandstone is one of our most prominent trade-quality landscape selections, presenting an authentic, dry-matte medley of soft olive, khaki, beige, and sage colors. These natural cleft, calibrated paving slabs match perfectly with the user's uploaded references, demonstrating a highly dense structure with superior anti-slip performance and outstanding durability under external environmental stresses.",
    image: "/raj_green_real_dry_patio.png",
    secondaryImage: "/raj_green_real_dry_2x2.png",
    realImages: [
      "/raj_green_real_dry_patio.png",
      "/raj_green_real_dry_2x2.png"
    ],
    properties: ["Beautiful dry-matte olive-khaki colors", "Naturally Non-Slip Cleft Texture", "Exceptional Structural Density", "Resistant to Frosting and Hot UV Exposure"],
    applications: ["Concentric Residential Patios", "Traditional Walkway Paving", "Garden Steps & Outer Poolsides", "Broad Commercial Courtyards"],
    finishes: ["Natural Hand Split & Calibrated", "Sawn Cut Edges", "Cobbles & Steps", "Tumbled Vintage Surface"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "600 x 290 mm", "Patio Utility Project Packs", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "sandstone-circle",
    name: "Sandstone Circle Kits",
    slug: "sandstone-circle-kits",
    description: "Architectural focal circle paving feature modules cut from premium sandstone. Elevates central yards, roundabouts, and landscaping layouts with circular symmetry.",
    longDescription: "Our premium Sandstone Circle Paving Kits are precision-designed concentric circular layouts that create immediate architectural landmarks. Delivered in complete, pre-sorted modular packing crates, these circle design modules can easily integrate within standard outdoor patio grids or act as independent circular seating features inside lush garden designs.",
    image: "/sandstone_circle_kit_1780479388000.png",
    realImages: [
      "/sandstone_circle_kit_1780479388000.png"
    ],
    properties: ["High Dimensional Radial Symmetry", "Anti-Skid Calibrated Cleft Face", "Warm Earthy Color Contrasts", "Easy To Install pre-numbered sets"],
    applications: ["Scenic Central Patio Elements", "Focal Driveway Roundabouts", "Classic Garden Sitting Circles", "Featured Rotundas & Landscape Medallions"],
    finishes: ["Natural Cleft", "Sawn Edge Calibrated / Hand-chiseled Edge"],
    sizes: ["2.4 Meter Paving Circle", "3.0 Meter Paving Circle", "3.6 Meter Paving Circle", "Custom Center Ring Layouts", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "indian-sandstone",
    name: "Indian Yellow Sandstone",
    slug: "indian-yellow-sandstone",
    description: "Warm earthy tones ranging from golden beige to terracotta. Perfect for warm-climate architecture, garden layout installations, and hand-crafted building facades.",
    longDescription: "Indian Sandstone is a naturally textured, sediment-layered stone that brings a touch of organic warmth to any exterior layout. Available in a spectrum of earthy tones, it is particularly appreciated by landscape architects for high-end gardens, resort walks, and exterior building envelopes. Naturally slip-resistant and incredibly easy to shape.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200", // beige stone cladding
    secondaryImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200", // earthy stone minimal texture
    properties: ["Natural Hand-Chipped Texture", "Long-lasting Sturdiness", "Thermal Insulation Properties", "Naturally Slip Resistant"],
    applications: ["Outdoor Courtyard Paving", "Pool Decks & Garden Steps", "Structural Building Facades", "Pedestrian Walkways"],
    finishes: ["Natural Split", "Sawn Edge", "Brushed", "Sandblasted"],
    sizes: ["600 x 600 mm", "560 x 560 mm", "600 x 900 mm", "Custom Block Carvings", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "indian-york",
    name: "Indian York Sandstone",
    slug: "indian-york-sandstone",
    description: "Traditional heavy-duty landscaping paving in a rich blend of steel gray, olive-buff, and autumnal tan. Renowned for its slip resistance and historic charm.",
    longDescription: "Our premium Indian York Sandstone is highly processed to emulate the prestigious British Yorkstone. Exhibiting incredible hardness, minimal moisture absorption, and a robust hand-dressed or calibrated cleft face, it presents a cohesive mix of olive-buff, gray, and rustic brown tones. This makes it an exemplary choice for high-end residential pathways, public driveways, and vintage courtyard settings globally.",
    image: "/indian_york_real_1.png",
    secondaryImage: "/indian_york_real_2.png",
    realImages: [
      "/indian_york_real_1.png",
      "/indian_york_real_2.png"
    ],
    properties: ["Excellent anti-slip cleft face", "Extremely dense and hard-wearing", "Handles harsh sub-zero frost conditions", "Pre-calibrated thickness tolerance"],
    applications: ["High-Traffic Paths & Walks", "Luxury Carriage Driveways", "Historic Town Squares", "Garden Courtyards & Edging"],
    finishes: ["Natural Cleft / Calibrated", "Sawn Edge", "Tumbled / Antiqued", "Sandblasted & Sawn"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "560 x 560 mm", "Mixed Project Patio Packs", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  },
  {
    id: "rippon-buff",
    name: "Rippon Buff Sandstone",
    slug: "rippon-buff-sandstone",
    description: "Vibrant, warm, multi-colored paving stones with a golden-buff foundation accented by beautiful swirling waves of pink, peach, and coral tones.",
    longDescription: "Rippon Buff Sandstone is famous for its lively and dynamic color palette. Each slab is a geological masterpiece, featuring organic swirls of rose blush, orange ochre, and warm golden-beige. It has a natural split texture that offers natural traction even when wet, making it highly requested for residential gardens, swimming pool surrounds, and warm Mediterranean-style patio designs.",
    image: "/rippon_buff_real_vibrant.png",
    secondaryImage: "/rippon_buff_real_tawny.png",
    realImages: [
      "/rippon_buff_real_vibrant.png",
      "/rippon_buff_real_tawny.png",
      "/rippon_buff_real_beige.png"
    ],
    properties: ["Stunning high-contrast swirls", "Naturally slip-resistant texture", "Low water retention & salt tolerance", "Highly resistant to weathering and fading"],
    applications: ["Swimming Pool Coping", "Garden Patio Landscapes", "Sunrooms & Terraces", "Feature Steps & Circular Paths"],
    finishes: ["Natural Raw Split & Calibrated", "Machine Cut Sawn Edges", "Tumbled Antiqued Finish", "Brushed Surface"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "290 x 290 mm", "Pre-sorted Multi-Size Patio Packs", "Calibrated 18mm / 22mm", "Patio Pack (900x600, 600x600, 600x290, 290x290)"]
  }
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    id: "exp",
    title: "16+ Years Experience",
    subtitle: "In-Depth Natural Stone Expertise",
    description: "Operating with profound knowledge of geological variations, processing standards, and domestic supply, now bringing world-class products directly to international markets.",
    iconName: "award"
  },
  {
    id: "pack",
    title: "Export Quality Packaging",
    subtitle: "Seaworthy Wooden Crate Fortification",
    description: "Every shipment is secured with premium IPPC heat-treated wooden crates, sturdy tension strapping, and soft edge guards to guarantee scratch-free port delivery.",
    iconName: "package"
  },
  {
    id: "deliv",
    title: "Timely Delivery",
    subtitle: "Optimized Logistics Fleet",
    description: "Efficient domestic transit coordination and strong freight integrations at Indian ports guarantee strict adherence to B2B shipping timelines.",
    iconName: "truck"
  },
  {
    id: "finish",
    title: "Premium Stone Finishing",
    subtitle: "State-of-the-Art Processing",
    description: "Advanced calibration machinery, diamond-edge cut precision, and rigorous manual inspection line-ups deliver immaculate slab tolerances and surface finishes.",
    iconName: "sparkles"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Kandla Grey Premium Patio Paving",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    description: "Elegant outdoor courtyard paved with calibrated Kandla Grey Sandstone."
  },
  {
    id: "gal-2",
    title: "Natural Sandstone Facade Blockwork",
    category: "sandstone",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
    description: "Modern architectural exterior wall featuring multi-tonal split Indian Sandstone."
  },
  {
    id: "gal-3",
    title: "Export Crate Preparation & Lashing",
    category: "packaging",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800",
    description: "Strong structural packaging and reinforcement of crates inside cargo docks."
  },
  {
    id: "gal-4",
    title: "Heavy Cargo Port Freight Container",
    category: "containers",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    description: "Secure terminal handling for international shipment of natural stone exports."
  },
  {
    id: "gal-5",
    title: "Autumn Brown (Wet Gloss Finish)",
    category: "sandstone",
    image: "/autumn_brown_real_wet.png",
    description: "Deep, chocolate gloss finish and warm copper tones of premium Autumn Brown natural sandstone."
  },
  {
    id: "gal-6",
    title: "Luxury Residential Pathway Installation",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
    description: "Earthy toned stone steps paired with modern architectural minimal landscape design."
  },
  {
    id: "gal-7",
    title: "Natural Stone Quarry Processing",
    category: "sandstone",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800",
    description: "Expertly mined natural strata illustrating the high density of raw sandstone."
  },
  {
    id: "gal-8",
    title: "Secure Port Stack Loading",
    category: "containers",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800",
    description: "Consolidated containers containing high-value materials lined up for vessel embarkation."
  },
  {
    id: "gal-real-1",
    title: "Calibrated Kandla Grey Paving Layout",
    category: "sandstone",
    image: "/kandla_grey_real_1_1780479327873.png",
    description: "An authentic bird's-eye view of calibrated, light grey Kandla sandstone paving tiles with fine hand-dressed split-faces and hand-cut edges."
  },
  {
    id: "gal-real-2",
    title: "Premium Kandla Grey Courtyard",
    category: "outdoor",
    image: "/kandla_grey_real_2_1780479348623.png",
    description: "Wide courtyard paved with clean-cut, slip-resistant Kandla Grey sandstone slabs under bright natural sunlight."
  },
  {
    id: "gal-real-3",
    title: "Autumn Brown Dry Cleft Slabs",
    category: "sandstone",
    image: "/autumn_brown_real_dry.png",
    description: "Dry, rugged, slip-resistant Autumn Brown sandstone paving slabs highlighting wonderful earthy, warm slate-like grain veins."
  },
  {
    id: "gal-real-3b",
    title: "Autumn Brown Wet Patio Display",
    category: "outdoor",
    image: "/autumn_brown_real_wet.png",
    description: "Wet and glossy clean-cut Autumn Brown Indian sandstone paving units portraying deep, rich chocolate/tan layers under high brightness."
  },
  {
    id: "gal-real-4",
    title: "Concentric Sandstone Paving Circle Kit",
    category: "outdoor",
    image: "/sandstone_circle_kit_1780479388000.png",
    description: "Pre-assembled concentric sandstone circle paving segment, highly requested for landscape design focal points."
  },
  {
    id: "gal-real-5",
    title: "Dry Raj Green Patio Yard",
    category: "outdoor",
    image: "/raj_green_real_dry_patio.png",
    description: "An authentic, dry-matte layout of Raj Green Indian sandstone paving slabs matched exactly to our live production yards."
  },
  {
    id: "gal-real-5b",
    title: "Raj Green 2x2 Slate Matrix",
    category: "sandstone",
    image: "/raj_green_real_dry_2x2.png",
    description: "Subtle multi-shaded green, khaki, and sand-buff tiles illustrating dry natural cleft strata."
  },
  {
    id: "gal-real-6",
    title: "Premium Rippon Buff Patio Paving",
    category: "outdoor",
    image: "/rippon_buff_real_vibrant.png",
    description: "Close inspection of laid Rippon Buff sandstone showing vibrant golden foundation and organic pink-peach swirls."
  },
  {
    id: "gal-real-7",
    title: "Rippon Buff High-Density Slabs",
    category: "sandstone",
    image: "/rippon_buff_real_beige.png",
    description: "Freshly calibrated Rippon Buff sandstone paving units showcasing a clean hand-cut edge finish."
  },
  {
    id: "gal-real-8",
    title: "Earthy Indian York Paving Grid",
    category: "outdoor",
    image: "/indian_york_real_1.png",
    description: "Earthy grey and warm olive tones of Indian York sandstone paving laid out cleanly in a classic block pattern."
  },
  {
    id: "gal-real-9",
    title: "Indian York Heavy Cleft Close-Up",
    category: "sandstone",
    image: "/indian_york_real_2.png",
    description: "Macro-lens representation of raw-face Indian York sandstone, exhibiting extreme anti-slip density and mineral ridges."
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2010",
    title: "Inception & Quarry Sourcing",
    description: "Shree Jyoti Enterprises begins operations in Kota, Rajasthan, partnering with premium sandstone quarries to supply the domestic architecture market."
  },
  {
    year: "2015",
    title: "Machinery Upgrade & Calibration",
    description: "Invested in state-of-the-art stone calibration lines and multi-blade tile saws, reducing dimensional tolerances to dynamic international standards."
  },
  {
    year: "2020",
    title: "Pan-India Expansion & B2B Exporter Supplier",
    description: "Became a preferred supplier of top Indian exporters, supply-chaining materials into massive commercial projects across Delhi NCR, Mumbai, and Bangalore."
  },
  {
    year: "2026",
    title: "Direct Global Export Launch",
    description: "Officially establishing independent direct-to-port export facilities, with verified IEC code and custom seaworthy lashing standards for worldwide premium buyers."
  }
];
