import React from 'react';
import { motion } from 'motion/react';
import { Video, Camera, Sparkles, PartyPopper, Users, Ring } from 'lucide-react';
import { WhatsAppButton } from './ui';

export const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Comprehensive coverage of your special day, capturing every crucial tradition and candid smile.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Cinematic Films",
      desc: "Beautifully edited cinematic wedding films that let you relive your wedding story again and again.",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Tell your love story before the big day with a creative, romantic photoshoot.",
      icon: <HeartIcon />
    },
    {
      title: "Rice Ceremony",
      desc: "Preserving the innocent and joyous moments of the traditional Annaprashan.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Reception & Engagement",
      desc: "Elegant coverage of your ring ceremony and grand reception evenings.",
      icon: <PartyPopper className="w-6 h-6" />
    },
    {
      title: "Family Events",
      desc: "Professional photography for anniversaries, birthdays, and family milestones.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-sand" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">Our Services</h2>
          <p className="text-lg text-ink/70">Expert coverage tailored to your cultural traditions and personal style.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-maroon/5 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-maroon/5 text-maroon flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-medium mb-3 text-ink">{service.title}</h3>
              <p className="text-ink/70 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              <div className="mt-auto">
                <WhatsAppButton text="Inquire Now" size="sm" variant="outline" className="w-full !rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted simple heart icon to avoid importing Lucide icon that conflicts with standard Heart
function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
}
