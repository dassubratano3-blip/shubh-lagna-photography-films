import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { WhatsAppButton, Button } from './ui';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Ananya & Rahul",
      text: "They made us feel so comfortable. The candid shots from our Gaye Holud were incredible, capturing the real fun we had. Highly recommend them for any Bengali wedding!",
    },
    {
      name: "Sneha & Amit",
      text: "The cinematic film they created for our reception feels like a movie. The team is very professional, punctual, and friendly. The albums were delivered exactly on time.",
    },
    {
      name: "Priyanka Roy",
      text: "Booked them for my sister's wedding in Tufanganj. Excellent photography and very supportive team. The traditional rituals were covered beautifully.",
    }
  ];

  return (
    <section className="py-24 bg-sand">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl text-maroon mb-16 text-center">Words of Love</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm relative">
              <span className="absolute top-4 left-6 text-6xl text-gold/20 font-serif leading-none">"</span>
              <p className="text-ink/80 italic relative z-10 mb-6 font-serif text-lg leading-relaxed pt-4">
                {review.text}
              </p>
              <div className="border-t border-maroon/10 pt-4">
                <p className="font-medium text-maroon">- {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-maroon rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left: Contact Info */}
          <div className="lg:w-5/12 bg-maroon-dark p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10">
               <h2 className="font-display text-4xl mb-6">Get in Touch</h2>
               <p className="text-white/80 font-light mb-12">Ask us anything about our packages, availability, or how we capture your big day.</p>
               
               <div className="space-y-6">
                 <a href="tel:+917365853984" className="flex items-center gap-4 text-lg hover:text-gold transition-colors">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-5 h-5"/></div>
                   +91 73658 53984
                 </a>
                 <a href="mailto:dask54326@gmail.com" className="flex items-center gap-4 text-lg hover:text-gold transition-colors">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-5 h-5"/></div>
                   dask54326@gmail.com
                 </a>
                 <div className="flex items-center gap-4 text-lg">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-5 h-5"/></div>
                   Tufanganj, Cooch Behar, WB
                 </div>
               </div>
             </div>

             <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
                 <p className="text-sm text-white/50 mb-4 uppercase tracking-wider font-semibold">Follow our work</p>
                 <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all"><Instagram className="w-5 h-5"/></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all"><Facebook className="w-5 h-5"/></a>
                 </div>
             </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-7/12 p-10 md:p-16 bg-white">
             <h3 className="text-2xl font-medium text-maroon mb-8">Send an Inquiry</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-ink/70">Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30" placeholder="Rahul & Ananya" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-ink/70">Phone / WhatsApp</label>
                   <input type="tel" className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30" placeholder="+91 XXXXXXXXXX" />
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-ink/70">Event Type</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30">
                     <option>Wedding & Reception</option>
                     <option>Pre-Wedding Shoot</option>
                     <option>Rice Ceremony</option>
                     <option>Engagement</option>
                     <option>Other Event</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-ink/70">Event Date (if decided)</label>
                   <input type="date" className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium text-ink/70">Event Location(s)</label>
                 <input type="text" className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30" placeholder="City or Venue Name" />
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium text-ink/70">Message</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-maroon/20 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon bg-sand/30" placeholder="Tell us about what you're looking for..."></textarea>
               </div>

               <Button className="w-full text-lg h-14" type="submit">Submit Request</Button>
               <p className="text-center text-sm text-ink/50 mt-4">For immediate response, use WhatsApp.</p>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ink text-white/70 py-12 border-t border-maroon/20">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="font-display text-3xl text-gold-light mb-4">Shubh Lagna Photography & Films</h2>
        <p className="max-w-md mx-auto mb-8 font-light">
          Framing beautiful moments and preserving them like timeless memories. Based in Tufanganj.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-white">
          <button onClick={() => window.scrollTo(0, 0)} className="hover:text-gold transition-colors text-sm uppercase tracking-wide">Home</button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors text-sm uppercase tracking-wide">Services</button>
          <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors text-sm uppercase tracking-wide">Portfolio</button>
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Shubh Lagna Photography & Films. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
