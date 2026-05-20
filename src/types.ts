export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImage?: string;
  properties: string[];
  applications: string[];
  finishes: string[];
  sizes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sandstone' | 'granite' | 'packaging' | 'containers' | 'outdoor';
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
    properties: ["Anti-slip Texture", "Weather Resistant", "High Load Bearing", "Durable Composition"],
    applications: ["Pathways & Driveways", "Parking Areas", "Garden Paving", "Landscaping Layouts"],
    finishes: ["Natural Calibrated", "Hand Cut / Sawn Edge", "Shotblasted", "Tumbled"],
    sizes: ["600 x 600 mm", "600 x 900 mm", "600 x 290 mm", "Mixed Patio Packs"]
  },
  {
    id: "autumn-brown",
    name: "Autumn Brown Granite",
    slug: "autumn-brown-granite",
    description: "Earthy brown tones fused with crystalline granite stability. Extreme compressive strength and low porosity, designed for robust indoor countertops and premium outdoor facades.",
    longDescription: "Autumn Brown Granite is a premium natural stone known for its rich, warm brown tones and flowing natural crystalline patterns. Incredibly dense and durable, it is ideal for heavy-use flooring, luxury countertops, protective wall cladding, and exterior landscaping. It handles extreme weather beautifully without fading or cracking.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200", // stone slabs collection stack
    secondaryImage: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1200", // warm brown stone texture close-up
    properties: ["Strong & Dense", "Elegant Lustrous Polish", "Low Water Absorption", "Premium Resilient Material"],
    applications: ["Kitchen Countertops", "High-Traffic Flooring", "Exterior Wall Cladding", "Decorative Paving"],
    finishes: ["Polished", "Honed", "Flamed", "Lapatro"],
    sizes: ["Gangscale Slabs (2800mm+ x 1600mm+)", "Cutter Slabs (1800mm+ x 600mm+)", "Custom Architectural Cut-to-Size"]
  },
  {
    id: "indian-sandstone",
    name: "Indian Sandstone",
    slug: "indian-sandstone",
    description: "Warm earthy tones ranging from golden beige to terracotta. Perfect for warm-climate architecture, garden layout installations, and hand-crafted building facades.",
    longDescription: "Indian Sandstone is a naturally textured, sediment-layered stone that brings a touch of organic warmth to any exterior layout. Available in a spectrum of earthy tones, it is particularly appreciated by landscape architects for high-end gardens, resort walks, and exterior building envelopes. Naturally slip-resistant and incredibly easy to shape.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200", // beige stone cladding
    secondaryImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200", // earthy stone minimal texture
    properties: ["Natural Hand-Chipped Texture", "Long-lasting Sturdiness", "Thermal Insulation Properties", "Naturally Slip Resistant"],
    applications: ["Outdoor Courtyard Paving", "Pool Decks & Garden Steps", "Structural Building Facades", "Pedestrian Walkways"],
    finishes: ["Natural Split", "Sawn Edge", "Brushed", "Sandblasted"],
    sizes: ["600 x 600 mm", "560 x 560 mm", "600 x 900 mm", "Custom Block Carvings"]
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
    title: "Autumn Brown Granite Crystalline Slab",
    category: "granite",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800",
    description: "High-grade Autumn Brown Granite slabs ready for gangscale processing."
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
