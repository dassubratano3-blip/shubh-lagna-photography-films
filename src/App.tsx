/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrustStrip, About } from './components/HomeSections';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process, WhyChooseUs } from './components/MoreSections';
import { Testimonials, Contact, Footer } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  
  // Smooth scroll handler inside the app globally for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased text-ink bg-ivory selection:bg-maroon selection:text-white">
      {/* Navigation could go here, but a simple landing page without sticky header keeps focus on content */}
      <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 text-white mix-blend-difference">
        <h1 className="font-display text-2xl tracking-wide">SHUBH LAGNA</h1>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">About</button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Services</button>
          <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Portfolio</button>
        </div>
      </nav>

      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
