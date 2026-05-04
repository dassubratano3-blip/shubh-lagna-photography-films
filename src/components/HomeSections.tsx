import React from 'react';
import { Camera, MapPin, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustStrip = () => {
  const items = [
    { icon: Heart, text: "Wedding Stories Captured", subtext: "150+" },
    { icon: MapPin, text: "Primary Service Area", subtext: "Tufanganj, Cooch Behar" },
    { icon: Clock, text: "Fast Response", subtext: "On WhatsApp" },
    { icon: Camera, text: "Coverage Style", subtext: "Personalized & Cinematic" }
  ];

  return (
    <div className="bg-maroon text-white py-8 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-white/10 rounded-full">
              <item.icon className="w-6 h-6 text-gold-light" />
            </div>
            <div>
              <p className="text-xs text-white/70 uppercase tracking-wider font-semibold">{item.text}</p>
              <p className="font-display text-xl font-medium mt-1">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section className="py-24 md:py-32 bg-ivory" id="about">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Image Collage */}
        <div className="lg:w-1/2 w-full relative">
          <div className="relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto lg:max-w-none">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-3/4 h-4/5 rounded-t-full rounded-bl-full overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1629881855675-0158913b772c?q=80&w=800&auto=format&fit=crop" 
                alt="Beautiful Bengali Bride Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-maroon mix-blend-multiply opacity-10"></div>
            </motion.div>
            
            {/* Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=800&auto=format&fit=crop" 
                alt="Architectural Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold-light/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-maroon/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        
        {/* Right: Text Content */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-maroon mb-6 leading-tight">
              Capturing the <span className="italic text-gold-light">heart</span> of your celebration.
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full"></div>
          </div>
          
          <div className="space-y-4 text-lg text-ink/80 font-light leading-relaxed">
            <p>
              At <strong>Shubh Lagna Photography & Films</strong>, we believe that the best moments are the authentic ones—the stolen glances, the joyful tears, and the quiet rituals that make a Bengali wedding so profoundly beautiful.
            </p>
            <p>
              Based in Tufanganj, Cooch Behar, our storytelling-driven approach focuses on emotional connection. We don't just take pictures; we capture real moments and preserve them naturally, elegantly, and beautifully.
            </p>
          </div>
          
          <div className="pt-6 flex flex-col gap-4">
             <p className="font-medium text-maroon flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Budget to Premium packages available
             </p>
             <div className="w-fit">
               <button className="text-maroon font-serif text-xl font-medium border-b-2 border-gold pb-1 hover:text-maroon-dark transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                 Let's talk about your day
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
