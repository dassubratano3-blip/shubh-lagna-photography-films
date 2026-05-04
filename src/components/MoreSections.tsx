import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './ui';

export const WhyChooseUs = () => {
  const points = [
    "Emotional storytelling rather than just posing",
    "Understanding of local Bengali cultural rituals",
    "Candid moments captured beautifully",
    "Budget to premium packages available",
    "Friendly communication & smooth planning",
    "Timely delivery of your albums and films"
  ];

  return (
    <section className="py-24 bg-maroon text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-dark rounded-full filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-dark rounded-full filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Why couples choose us.</h2>
          <div className="space-y-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-lg font-light tracking-wide">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center">
             <h3 className="font-display text-3xl mb-4">Let's capture your story.</h3>
             <p className="text-white/80 mb-8 font-light">Popular wedding dates fill up early in Cooch Behar. Reach out to check availability.</p>
             <WhatsAppButton size="lg" className="w-full bg-white text-maroon hover:bg-gold hover:text-white mb-4" />
             <p className="text-sm text-white/50">Or call us direct: +91 73658 53984</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    { num: "01", title: "Talk with us", desc: "Reach out via WhatsApp or phone. We'll discuss your dates, vision, and packages." },
    { num: "02", title: "Plan your day", desc: "We finalize the timeline, locations, and special moments you want covered." },
    { num: "03", title: "Capture every moment", desc: "You celebrate, we capture. Smooth, unobtrusive, and professional coverage." },
    { num: "04", title: "Deliver memories", desc: "Receive beautifully edited photos and cinematic films to cherish forever." }
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">Our Simple Process</h2>
          <p className="text-lg text-ink/70">From the first message to final delivery, we make it effortless.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-[1px] bg-maroon/20 -z-10"></div>
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-maroon/5 relative z-10 flex flex-col h-full">
               <span className="font-display text-5xl text-gold/30 font-bold mb-4">{step.num}</span>
               <h3 className="text-xl font-medium text-maroon mb-3">{step.title}</h3>
               <p className="text-ink/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
