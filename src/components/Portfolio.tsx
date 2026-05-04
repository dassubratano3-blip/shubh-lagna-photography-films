import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const portfolioImages = [
  { id: 1, category: 'Wedding', src: 'https://images.unsplash.com/photo-1610173826065-4d6935276232?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: 2, category: 'Cinematic', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, category: 'Tradition', src: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 5, category: 'Wedding', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Tradition', 'Cinematic'];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeFilter === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeFilter);

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">Featured Stories</h2>
            <p className="text-lg text-ink/70">A glimpse into the beautiful memories we've framed for our clients.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat 
                    ? 'bg-maroon text-white' 
                    : 'bg-sand text-ink hover:bg-gold-light/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${img.colSpan} ${img.rowSpan}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/40 transition-colors duration-300 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center">
                     <ZoomIn className="w-8 h-8 text-white mb-2" />
                     <span className="text-white font-medium tracking-wide">{img.category}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.replace('&w=800', '&w=1600')} 
              alt="Fullscreen preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
