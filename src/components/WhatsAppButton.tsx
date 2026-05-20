import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "919252032292"; // India country code prefix + phone
  const message = encodeURIComponent(
    "Hello Shree Jyoti Enterprises, I visited your export portal and would like to inquire about your premium natural stone collections (Kandla Grey, Granite, Sandstones)."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      id="whatsapp-floating-btn"
    >
      <span className="absolute right-0 top-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageSquare className="w-5 h-5 fill-white/10" />
      <span className="text-sm font-medium tracking-wide max-w-0 overflow-hidden group-hover:max-w-[180px] transition-all duration-300 ease-out whitespace-nowrap">
        B2B WhatsApp Inquiry
      </span>
    </motion.a>
  );
}
