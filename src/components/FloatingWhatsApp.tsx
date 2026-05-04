import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/917365853984"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-[#25D366]/40 flex items-center justify-center cursor-pointer group"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-ink text-white text-xs px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
        <span className="absolute top-1/2 -right-1 w-2 h-2 bg-ink transform -translate-y-1/2 rotate-45"></span>
      </span>
      
      {/* Mobile only ring animation */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 md:hidden"></span>
    </motion.a>
  );
};
