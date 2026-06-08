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
  Globe, 
  CheckCircle2, 
  Send 
} from "lucide-react";
import { PRODUCTS_DATA } from "../types";

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
    <div id="contact-page" className="bg-slate-50 text-slate-800 min-h-screen pt-36 pb-24 selection:bg-accent selection:text-slate-950">
      <div className="absolute inset-0 saas-grid-pattern opacity-30 pointer-events-none z-0"></div>

      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10 animate-fade-in">
        <div className="border-l-4 border-indigo-c pl-6 py-2 max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase text-secondary tracking-[0.3em] block font-extrabold pb-1 border-b border-slate-200 w-fit">
            01 &bull; PORT CHANNELS
          </span>
          <h1 className="font-sans text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Establish Direct B2B <br />
            <span className="text-gradient">Export Sourcing Lines</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-sans leading-relaxed font-normal mt-2">
            Our trade coordinators stand by to review custom design sheets, issue seafreight container quotes, and arrange physical slab samples directly to your construction depots.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Contact Details Panel & map (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Contact Info Cards */}
          <div className="bg-white border border-slate-200/80 p-8 space-y-6 rounded-xl shadow-md saas-card">
            <h3 className="font-sans text-2xl font-extrabold text-slate-900 leading-snug">Commercial Desk</h3>
            
            <div className="space-y-6 text-xs sm:text-sm">
              <div className="flex gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-slate-50 text-accent rounded-lg shrink-0 border border-slate-200 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-secondary font-mono uppercase tracking-widest block font-extrabold leading-none select-none">WhatsApp &amp; Call Hotline</span>
                  <div className="space-y-2 mt-2">
                    <a href="tel:9252032292" className="text-slate-900 hover:text-indigo-c transition-colors font-bold font-mono text-base block leading-none">
                      +91 92520 32292 <span className="text-xs font-sans text-slate-500 font-normal">(Nitesh Jain)</span>
                    </a>
                    <a href="tel:9829376431" className="text-slate-900 hover:text-indigo-c transition-colors font-bold font-mono text-base block leading-none">
                      +91 98293 76431 <span className="text-xs font-sans text-slate-500 font-normal">(Sohan Lal Jain)</span>
                    </a>
                  </div>
                  <p className="text-[10.5px] text-slate-500 font-sans leading-none mt-2.5">Monday &ndash; Saturday, 10:00 AM &ndash; 7:30 PM (IST)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-slate-50 text-accent rounded-lg shrink-0 border border-slate-200 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-secondary font-mono uppercase tracking-widest block font-extrabold leading-none select-none">Wholesale &amp; Customs Email</span>
                  <a href="mailto:shreejyotienterpriseskota@gmail.com" className="text-slate-900 hover:text-indigo-c transition-colors font-semibold break-all block mt-2 text-sm">
                    shreejyotienterpriseskota@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-slate-50 text-accent rounded-lg shrink-0 border border-slate-200 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-secondary font-mono uppercase tracking-widest block font-extrabold leading-none select-none">Consolidation Factory Depot</span>
                  <p className="text-slate-600 font-sans leading-normal text-xs md:text-sm mt-1.5 font-normal">
                    Office - 146 Transport Nagar, <br />
                    Gobriya Bawadi Kota, Rajasthan 324005, India
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-slate-200"></div>

            {/* Verification IDs */}
            <div className="space-y-4 bg-slate-50 text-slate-700 p-6 font-mono text-[11px] rounded-lg border border-slate-200 shadow-sm">
              <span className="text-[8.5px] text-accent tracking-widest block font-extrabold select-none">PORT INTEGRITY CREDENTIALS</span>
              
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <div>
                  <span className="text-slate-500 text-[8px] block font-extrabold uppercase tracking-wider">GST REGISTERED STATUS</span>
                  <span className="text-slate-800 font-extrabold block mt-0.5">08AJKPJ0167G1Z9</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-secondary" />
                <div>
                  <span className="text-slate-500 text-[8px] block font-extrabold uppercase tracking-wider">IMPORT EXPORT LICENSE</span>
                  <span className="text-slate-800 font-extrabold block mt-0.5">AJKPJ0167G</span>
                </div>
              </div>
            </div>

            {/* Live WhatsApp */}
            <a
              href="https://wa.me/919252032292"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-4 text-xs font-mono uppercase tracking-widest transition-all font-extrabold cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Launch Live WhatsApp Inquiry
            </a>
          </div>

          {/* Map Section Layout */}
          <div className="bg-white border border-slate-200/80 p-8 space-y-4 rounded-xl shadow-md saas-card">
            <h4 className="font-sans text-lg font-extrabold text-slate-900 leading-tight">Geographical Position</h4>
            <div className="h-64 bg-slate-100 relative overflow-hidden border border-slate-200 flex items-center justify-center rounded-lg shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(#855b32_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.05]"></div>
              
              <div className="text-center relative z-10 p-5 bg-white border border-slate-200 shadow-xl max-w-xs rounded-lg">
                <MapPin className="w-5 h-5 text-indigo-c mx-auto animate-bounce" />
                <span className="font-sans text-sm font-extrabold text-slate-900 block leading-tight mt-1">SJE Depot Headquarter</span>
                <p className="text-[10px] font-mono text-slate-600 leading-normal mt-0.5">
                  Transport Nagar, Kota, Rajasthan, India
                </p>
                <div className="h-[1px] bg-slate-100 my-2"></div>
                <span className="text-[8.5px] font-mono uppercase tracking-wider text-accent block font-extrabold select-none">
                  Sandstone Hub &bull; Near Quarries
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-12 rounded-xl shadow-md saas-card">
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
                  <span className="font-mono text-[9px] text-indigo-c uppercase tracking-widest block mb-1 font-extrabold">
                    B2B PROCUREMENT ENQUIRY FORM
                  </span>
                  <h3 className="font-sans text-2xl md:text-3.5xl text-slate-900 font-extrabold leading-snug">
                    Custom Sizing &amp; Packing Specifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Liam Sterling"
                      className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-sans rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Commercial Email *</label>
                    <input
                      type="email"
                      required
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="e.g. liam@luxurydevelops.com"
                      className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-sans rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Cole Landscaping Ltd"
                      className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-sans rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Phone Number</label>
                    <input
                      type="tel"
                      value={phoneDial}
                      onChange={(e) => setPhoneDial(e.target.value)}
                      placeholder="e.g. +44 20 7946 0958"
                      className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-mono rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Stone Category selection</label>
                    <select
                      value={stoneSelection}
                      onChange={(e) => setStoneSelection(e.target.value)}
                      className="w-full border border-slate-200 p-3.5 text-[11px] bg-slate-50 text-slate-900 focus:border-indigo-500 focus:outline-none transition-all font-mono uppercase tracking-widest rounded-lg font-bold"
                    >
                      {PRODUCTS_DATA.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name}
                        </option>
                      ))}
                      <option value="other">Multiple Stone Classes Combo</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Target Destination sea Port</label>
                    <input
                      type="text"
                      value={targetPort}
                      onChange={(e) => setTargetPort(e.target.value)}
                      placeholder="e.g. Port of London Gateway, UK"
                      className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-sans rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-extrabold">Architectural Specifications / Thickness / Finishes *</label>
                  <textarea
                    required
                    rows={5}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Provide details about required formats (e.g., standard patio packages: 900x600, 600x600, 600x290, 290x290, or project-specific machine-honed dimensions with ±1mm calibration)."
                    className="w-full border border-slate-200 p-3.5 text-xs bg-slate-50 text-slate-900 md:text-sm focus:border-indigo-500 focus:outline-none transition-all placeholder:text-slate-450 font-sans rounded-lg"
                  />
                </div>

                <div className="flex items-start gap-3 text-[11px] text-slate-500 py-1 select-none">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p className="font-normal leading-relaxed text-slate-600 text-[11px]">
                    By submitting your specifications, you acknowledge that Shree Jyoti Enterprises' trade desk will draft real-time freight and calibration metrics to Mundra Port clearances.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-premium-indigo w-full inline-flex items-center justify-center gap-2.5 text-white py-4 text-xs font-mono uppercase tracking-widest font-bold transition-all disabled:bg-slate-400 cursor-pointer rounded-lg"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Validating freight margins...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 shrink-0 text-accent" /> Submit Sourcing Specifications
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
                <div className="w-16 h-16 bg-slate-900 border border-cyan-500/30 text-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans text-2xl md:text-3.5xl font-extrabold text-slate-900 leading-tight">Inquiry Received Successfully</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block bg-slate-50 px-3.5 py-1.5 w-fit mx-auto border border-slate-200 rounded-md shadow-md">
                    TRANSMITTED REGISTRY KOTA
                  </span>
                </div>

                <p className="max-w-md mx-auto text-xs md:text-sm text-slate-650 font-sans leading-relaxed font-normal">
                  Thank you, <strong>{fullName}</strong>. Your requested specification block has been processed. We will draft real-time shipping costs to <strong>{targetPort || "your port"}</strong> and email our consolidated invoice within 24 hours to <strong>{emailAddress}</strong>.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-colors font-bold rounded-lg cursor-pointer border border-slate-200 shadow-sm"
                  >
                    Submit New Inquiry
                  </button>

                  <a
                    href={`https://wa.me/919252032292?text=B2B%2520Web%2520Follow-up%2520from%2520${encodeURIComponent(fullName)}%2520(${encodeURIComponent(companyName || "Personal")})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-colors font-bold inline-flex items-center justify-center gap-2 rounded-lg"
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
