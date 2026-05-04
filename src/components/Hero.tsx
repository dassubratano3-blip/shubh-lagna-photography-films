import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppButton, Button } from './ui';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ink text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" 
          alt="Beautiful Indian Wedding Moment" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 border border-gold/50 rounded-full text-gold-light text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Premium Wedding Photography in Cooch Behar
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            Your wedding is not just an event. <br className="hidden md:block"/>
            <span className="text-gold-light italic font-light">It is a story we preserve forever.</span>
          </h1>

          <p className="text-lg md:text-xl text-sand/80 font-light max-w-xl mb-10 text-balance leading-relaxed">
            Every moment has a story. We frame beautiful moments and preserve them like timeless memories for families across West Bengal.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <WhatsAppButton size="lg" className="w-full sm:w-auto" />
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View Portfolio
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-sand/60 font-medium">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-ink bg-maroon flex items-center justify-center overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&h=100`} alt="Couple" className="w-full h-full object-cover opacity-0" />
                  <span className="text-[10px] text-white">★</span>
                </div>
              ))}
            </div>
            <p>Loved by 100+ couples across Bengal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
