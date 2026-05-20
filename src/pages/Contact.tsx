import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  MessageSquare, 
  PlusCircle, 
  Globe, 
  CheckCircle2, 
  Send 
} from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedSubject = searchParams.get("subject") || "";

  // Contact form state
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneDial, setPhoneDial] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [targetPort, setTargetPort] = useState("");
  const [stoneSelection, setStoneSelection] = useState("kandla-grey");
  const [userMessage, setUserMessage] = useState("");
  
  // Prefill message if subject exists
  useEffect(() => {
    if (requestedSubject) {
      setUserMessage(`Hi, I am reaching out regarding the ${requestedSubject}. Please send us your complete bulk catalog list, freight estimation metrics, and sample availability terms to my email.`);
    }
  }, [requestedSubject]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Submissions simulation
  const handleInquiryAction = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !userMessage) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFullName("");
    setEmailAddress("");
    setPhoneDial("");
    setCompanyName("");
    setTargetPort("");
    setStoneSelection("kandla-grey");
    setUserMessage("");
    setFormSubmitted(false);
  };

  return (
    <div id="contact-page" className="bg-stone-50 min-h-screen pt-28 pb-20">
      
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="border-l-4 border-stone-800 pl-6 md:pl-8 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-stone-500 tracking-[0.3em] block">
            THE CHANNELS
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-stone-950">
            Establish Direct B2B <br />
            <span className="italic font-light text-stone-700">Export Sourcing Lines</span>
          </h1>
          <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed">
            Our trade coordinators stand by to review custom drawing files, issue container CIF freight quotes, and prepare physical stone sample shipments to international destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Details Panel & map (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Contact Info Cards */}
          <div className="bg-white border border-stone-200 p-8 space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-stone-905">Commercial Desk</h3>
            
            <div className="space-y-5 text-sm">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-stone-100 text-stone-700 border border-stone-200 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase block">WhatsApp & Calling hotline</span>
                  <a href="tel:9252032292" className="text-stone-900 hover:text-stone-600 transition-colors font-semibold font-mono text-base block mt-0.5">
                    +91 92520 32292
                  </a>
                  <p className="text-xs text-stone-500 font-sans leading-none mt-1">Mon-Sat, 10:00 AM &ndash; 7:30 PM (IST)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-stone-100 text-stone-700 border border-stone-200 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase block">Sourcing & Commercial Inbox</span>
                  <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-stone-900 hover:text-stone-600 transition-colors font-medium break-all block mt-0.5">
                    shreejyotienterpriseskota@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-stone-100 text-stone-700 border border-stone-200 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 font-mono uppercase block">Registered Headquarters</span>
                  <p className="text-stone-800 font-sans leading-snug mt-0.5">
                    Kota, Rajasthan, India. <br />
                    <span className="text-xs text-stone-500">Major Sandstone Calibration Belt Area</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-stone-100"></div>

            {/* Verification IDs */}
            <div className="space-y-3.5 bg-stone-950 text-stone-300 p-5 font-mono text-xs">
              <span className="text-[9px] text-stone-500 tracking-wider block">COMPLIANCE CREDENTIALS</span>
              
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
                <div>
                  <span className="text-stone-500 text-[8px] block leading-none">GST NUMBER REGN</span>
                  <span className="text-stone-200 mt-0.5 block">08AJKPJ0167G1Z9</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-stone-400 shrink-0" />
                <div>
                  <span className="text-stone-500 text-[8px] block leading-none">IMPORT EXPORT CODE (IEC)</span>
                  <span className="text-stone-200 mt-0.5 block">AJKPJ0167G</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Redirection button */}
            <a
              href="https://wa.me/919252032292"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 text-xs font-mono uppercase tracking-widest transition-colors font-bold"
            >
              <MessageSquare className="w-4 h-4" /> Launch Live WhatsApp Inquiry
            </a>
          </div>

          {/* Map Section Layout */}
          <div className="bg-white border border-stone-200 p-8 space-y-4">
            <h4 className="font-serif text-lg font-medium text-stone-900">Geographical Position</h4>
            <div className="h-64 bg-stone-100 relative overflow-hidden border border-stone-200 flex items-center justify-center">
              {/* Clean structured visual representational grid of Rajasthan Stone Belt for B2B */}
              <div className="absolute inset-0 bg-[radial-gradient(#b0a79a_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-30"></div>
              
              <div className="text-center relative z-10 p-6 space-y-3 bg-white/95 border border-stone-200 shadow-xl max-w-xs">
                <MapPin className="w-5 h-5 text-stone-800 mx-auto animate-bounce" />
                <span className="font-serif text-sm font-semibold text-stone-900 block leading-tight">Shree Jyoti Depot Hub</span>
                <p className="text-[10px] font-mono text-stone-500 leading-normal">
                  National Highway Slabs Belt, Kota, Rajasthan, India
                </p>
                <div className="h-[1px] bg-stone-100"></div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-800 block">
                  Near Sandstone Raw Strata
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Inquiry Form (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white border border-stone-200 p-8 md:p-12">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleInquiryAction}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-2">
                    B2B EXPORT TENDER ENQUIRY
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-950 font-medium leading-tight">
                    Custom Sizing &amp; Bulk Shipment Calculation Sheets
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Kenneth Cole"
                      className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-sans"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Commercial Email Address *</label>
                    <input
                      type="email"
                      required
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="e.g. procurement@buildergroup.com"
                      className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Company / Sourcing Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Cole Landscaping Ltd"
                      className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Phone / Tel Line</label>
                    <input
                      type="tel"
                      value={phoneDial}
                      onChange={(e) => setPhoneDial(e.target.value)}
                      placeholder="e.g. +1 555-019-2834"
                      className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Stone of Reference Selection</label>
                    <select
                      value={stoneSelection}
                      onChange={(e) => setStoneSelection(e.target.value)}
                      className="w-full border border-stone-200 p-3.5 text-sm bg-white focus:border-stone-900 focus:outline-none transition-all font-mono uppercase text-xs tracking-wider"
                    >
                      <option value="kandla-grey">Kandla Grey Sandstone</option>
                      <option value="autumn-brown">Autumn Brown Granite</option>
                      <option value="indian-sandstone">Indian Sandstone</option>
                      <option value="other">Multiple Stone Classes Combo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Target Destination Sea Port</label>
                    <input
                      type="text"
                      value={targetPort}
                      onChange={(e) => setTargetPort(e.target.value)}
                      placeholder="e.g. Port of Rotterdam, Netherlands"
                      className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Message details / Specifications / Thickness constraints *</label>
                  <textarea
                    required
                    rows={6}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Describe custom thickness requirements (20mm, 30mm, calibrated sawn, tumbling requests, sample delivery options, etc.)"
                    className="w-full border border-stone-200 p-3.5 text-sm focus:border-stone-900 focus:outline-none transition-all placeholder:text-stone-300 font-sans"
                  />
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-500 py-2">
                  <div className="mt-0.5"><CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0" /></div>
                  <p>
                    By submitting your specifications sheets, you accept that a Shree Jyoti senior trade manager will run verified logistics calculations against custom port distances of Mundra port or Nhava Sheva.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-stone-850 text-white py-4 text-xs font-mono uppercase tracking-widest font-semibold transition-colors disabled:bg-stone-400"
                >
                  {submitting ? (
                    <span>Reviewing freight rules...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" /> Submit Sourcing Specifications
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-medium text-stone-950">Inquiry Received Successfully</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-700 font-semibold block bg-emerald-50 px-3 py-1 w-fit mx-auto border border-emerald-100">
                    TRANSMITTED REGISTRY KOTA
                  </span>
                </div>

                <p className="max-w-md mx-auto text-sm text-stone-600 font-sans leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Shree Jyoti Enterprises' trade cell has recorded your specifications for <strong>{stoneSelection === "kandla-grey" ? "Kandla Grey Sandstone" : stoneSelection === "autumn-brown" ? "Autumn Brown Granite" : "Indian Sandstone"}</strong>. We will check the current seaworthy container costs to <strong>{targetPort || "your destination"}</strong> and trace back within 24 working hours to <strong>{emailAddress}</strong>.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-900 py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-colors font-semibold"
                  >
                    Submit New Inquiry
                  </button>

                  <a
                    href={`https://wa.me/919252032292?text=B2B%20Web%20Follow-up%20from%20${encodeURIComponent(fullName)}%20(${encodeURIComponent(companyName || "Personal")})%20sourcing%20${encodeURIComponent(stoneSelection)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-colors font-bold inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Message Direct Manager
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
