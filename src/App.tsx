import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Flame, 
  ShieldCheck, 
  Layers, 
  Leaf, 
  Coins, 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  Globe,
  Award,
  Sparkles,
  AlertTriangle,
  HelpCircle,
  MapPin,
  Clock
} from 'lucide-react';

// import logo from './assets/images/charcoal_logo_dark_bg_1781622907683.jpg';

interface Specification {
  label: string;
  value: string;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'shapes'>('specs');
  
  // WhatsApp Form State
  const [inquirerName, setInquirerName] = useState('');
  const [inquiryType, setInquiryType] = useState('Shisha & Hookah');
  const [preferredShape, setPreferredShape] = useState('Cube (22mm / 25mm / 26mm / 27mm)');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  // Track page scroll to style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '6289651864733'; // Target WhatsApp number from user screenshot
    const intro = `Halo *Fos Charcoal / AS Energy*, saya tertarik dengan Premium FOS Coconut Charcoal Briquettes Anda.`;
    const details = `
*Nama:* ${inquirerName || 'Pelanggan'}
*Keperluan:* ${inquiryType}
*Bentuk Pilihan:* ${preferredShape}
*Negara Tujuan:* ${country || 'Indonesia'}
*Pesan Tambahan:* ${message || 'Tolong kirimkan penawaran harga terbaru.'}
`;
    const encodedText = encodeURIComponent(intro + '\n' + details);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  const specsList: Specification[] = [
    { label: 'Material', value: '100% Coconut Shell (Sustainably Sourced)' },
    { label: 'Ash Content', value: 'Max 3% (Super Low / Light White-Grey)' },
    { label: 'Moisture', value: 'Max 5% (Low Moisture for Quick Ignition)' },
    { label: 'Fixed Carbon', value: 'Min 75% (Prolonged High Heat Execution)' },
    { label: 'Calorific Value', value: '7,000 - 7,500 kcal/kg (Concentrated Core Thermal Energy)' },
    { label: 'Burning Time', value: '2 - 3 Hours (Stable, Steady Sessions)' },
    { label: 'Dimensions', value: 'Standard Cushion/Cube Block' },
  ];

  const shapesList = [
    { name: 'Cube (Most Popular)', size: '25x25x25 mm / 26x26x26 mm', usage: 'Shisha, Hookah, Lounge Use' },
    { name: 'Flat', size: '25x25x15 mm / 25x25x20 mm', usage: 'Shisha, Hookah' },
    { name: 'Finger / Cylinder', size: '18x35 mm / 20x50 mm', usage: 'BBQ, Shisha & Hookah' },
    { name: 'Hexagonal', size: '20x35 mm / 20x50 mm', usage: 'Premium BBQ, Restaurants & Domestic Use' },
  ];

  const useSteps = [
    {
      num: '01',
      title: 'Pyramid Stack',
      desc: 'Stack the briquettes together in a compact pyramid shape to trap heat effectively.'
    },
    {
      num: '02',
      title: 'Ignition Flame',
      desc: 'Light the briquettes using a standard gas lighter, stove burner, or natural hot-coil fire starter.'
    },
    {
      num: '03',
      title: 'Wait & Set',
      desc: 'Wait for 10–15 minutes until the cubes are fully lit red-hot and covered with a solid light layer of ash.'
    },
    {
      num: '04',
      title: 'Spread & Enjoy',
      desc: 'Spread the briquettes evenly over your shisha bowl foil screen or charcoal grill grate and ready to use.'
    }
  ];

  const safetyRules = [
    'For outdoor use only or in a well-ventilated area.',
    'Do not use indoor or in completely enclosed rooms or spaces.',
    'Keep hot embers strictly away from children and flammable liquids.',
    'Never use matches or volatile lighter fluids/gasoline to spark/ignite.',
    'Ash and burning bricks can remain hot for hours. Allow to cool completely before final disposal.',
    'Always store in a dry, cool room environment protected from humidity.'
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased scroll-smooth" id="home">
      {/* 1. TOP HEADER WITH SIMPLE NAVMENU IN BOLD MINIMALIST THEME */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-6 border-b border-white/10' 
            : 'bg-[#0A0A0A] py-8 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between">
            {/* Logo in Modern Bold Industrial Style */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleScrollTo('home')}>
              <img 
                src="/src/assets/images/charcoal_logo_dark_bg_1781622907683.jpg"
                // src={logo}
                // src="/images/logo.jpg"
                alt="FOS Logo" 
                referrerPolicy="no-referrer"
                // className="w-10 h-10 object-contain mix-blend-screen transition-transform group-hover:scale-105"
                 className="w-14 h-14 object-contain"
              />
              <span className="font-sans font-black tracking-tighter text-xl uppercase">
                FOS<span className="text-amber-500"> AS ENERGY</span>
              </span>
            </div>

            {/* Desktop Navigation Links based on Studio_V theme: Uppercase, spacing, text-[11px] */}
            <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              <button 
                onClick={() => handleScrollTo('home')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => handleScrollTo('about')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => handleScrollTo('product-showcase')} 
                className="hover:text-white transition-colors cursor-pointer text-amber-400"
              >
                Product Image
              </button>
              <button 
                onClick={() => handleScrollTo('specs')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Specifications
              </button>
              <button 
                onClick={() => handleScrollTo('how-to-use')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Guide
              </button>
              <button 
                onClick={() => handleScrollTo('benefits')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Features
              </button>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleScrollTo('inquiry')}
                className="border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                Inquiry Now
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/80 hover:text-white p-2 rounded-lg focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#0A0A0A] border-b border-white/10"
            >
              <div className="px-6 pt-4 pb-8 space-y-4">
                <button
                  onClick={() => handleScrollTo('home')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => handleScrollTo('about')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleScrollTo('product-showcase')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-amber-400 hover:text-white transition-colors"
                >
                  Product Image
                </button>
                <button
                  onClick={() => handleScrollTo('specs')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  Specifications
                </button>
                <button
                  onClick={() => handleScrollTo('how-to-use')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  Directions Guide
                </button>
                <button
                  onClick={() => handleScrollTo('benefits')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="block w-full text-left py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </button>
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleScrollTo('inquiry')}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-3.5 rounded-none text-xs uppercase tracking-widest text-center"
                  >
                    Send Direct Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. BOLD TYPOGRAPHY HERO SECTION */}
      <section className="relative bg-[#0A0A0A] pt-36 pb-20 md:pt-48 md:pb-36 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col justify-center min-h-[480px]">
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] py-1.5 px-4 border border-white/20 rounded-full font-mono text-white/60">
              INDONESIAN COCO EXPORTER
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] py-1.5 px-4 border border-amber-500/30 rounded-full font-mono text-amber-500">
              AS ENERGY / FOS BRAND
            </span>
          </div>

          {/* Huge typography display header */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] sm:text-[64px] md:text-[88px] lg:text-[110px] leading-[0.85] font-black tracking-tighter mb-8 text-left"
          >
            <span className="block">FOS COCO</span>
            <span className="block text-amber-500">BRIQUETTES</span>
            <span className="block italic serif font-light text-white/30 lowercase tracking-normal text-3xl sm:text-4xl md:text-5xl mt-2">
              premium natural coconut shell energy.
            </span>
          </motion.h1>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mt-6">
            <div className="max-w-xl text-left">
              <p className="text-base sm:text-lg text-white/50 leading-relaxed font-light">
                Premium-grade coconut charcoal briquettes designed specifically to provide three hours of consistent glowing heat, standard white ash, and absolute scentless operation. Backed by industry-grade quality checks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start lg:items-end gap-4 shrink-0 font-mono">
              <button
                onClick={() => handleScrollTo('inquiry')}
                className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all cursor-pointer"
                title="Send WhatsApp Inquiry"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <div className="text-left py-2">
                <span className="block text-[9px] uppercase tracking-widest text-white/40 mb-1">Direct Connection</span>
                <span className="text-sm font-bold block text-white">+62 8965 1864 733</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION - MODERN GRID BOLD MINIMALISM */}
      <section id="about" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Huge indicator and text */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block">
                01 / OVERVIEW
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none">
                ABOUT<br />THE BRAND
              </h2>
              <div className="h-0.5 w-16 bg-white/20 mt-4" />
            </div>

            {/* Right Column: Paragraph and custom metric borders */}
            <div className="lg:col-span-8 lg:pl-8 space-y-8">
              <p className="text-white/70 text-lg sm:text-xl font-light leading-relaxed">
                As Energy operates as a premier exporter of pristine coconut shell charcoal briquettes, bringing sustainable and efficient trial carbonization setups to the international shisha and barbecue markets.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                We handle meticulous product refinement by sourcing strictly natural materials, ensuring that every batch of FOS charcoal briquettes lives up to uniform density dimensions and absolute eco-safety parameters. Designed, compressed, and packaged at our Indonesian factory for long burning periods.
              </p>

              {/* Minimal metrics in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10 font-mono">
                <div className="p-6 border border-white/10 bg-[#0F0F0F]">
                  <span className="block text-amber-500 font-black text-3xl mb-1">100%</span>
                  <span className="block text-xs uppercase tracking-widest text-white/50 font-bold">NATURAL SHELL</span>
                  <p className="text-xs text-white/30 mt-2">No chemical additives. Made purely of coconut shell materials.</p>
                </div>
                <div className="p-6 border border-white/10 bg-[#0F0F0F]">
                  <span className="block text-amber-500 font-black text-3xl mb-1">MAX 3%</span>
                  <span className="block text-xs uppercase tracking-widest text-white/50 font-bold">ASH RETENTION</span>
                  <p className="text-xs text-white/30 mt-2">Ultra clean burn profile. Leaves very light white-grey ash.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: PREMIUM PRODUCT SHOWCASE (INCORPORATES THE GENERATED IMAGE) */}
      <section id="product-showcase" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center lg:text-left mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
              PRODUCT DESIGN & INTENSITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase">
              ACTUAL PRODUCT COVER
            </h2>
            <div className="h-0.5 w-16 bg-white/20 mt-4 lg:mx-0 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: High-contrast responsive image wrapper */}
            <div className="lg:col-span-7 group">
              <div className="border border-white/15 bg-black p-3 relative overflow-hidden">
                {/* Visual Accent brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500" />
                
                <img 
                  src="/src/assets/images/charcoal_product_showcase_fos_1781360804359.jpg" 
                  alt="FOS Coconut Charcoal Briquettes Packaging and Glowing Hot Coals" 
                  referrerPolicy="no-referrer"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] filter brightness-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-center text-xs font-mono text-white/40">
                <span>[ FIG. 01 / PREMIUM RETAIL EDITION ]</span>
                <span>AS ENERGY - INDONESIA</span>
              </div>
            </div>

            {/* Right Col: Box specs & Packaging detail values */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-l-2 border-amber-500 pl-6 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block">
                  BOX PACKAGING MODEL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  FOS COCONUT CHARCOAL
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Our official factory design shows the burning charcoal cubes coupled with the signature "Friendly Energy" solar platform logo. Packaged in elegant robust multi-ply cardboard packs with moisture-lock inner polybags.
                </p>
              </div>

              {/* Bento Quick Card Details */}
              <div className="space-y-4 font-mono">
                <div className="bg-[#0F0F0F] border border-white/10 p-5 flex items-start gap-4">
                  <div className="bg-amber-500/10 text-amber-500 p-2 text-xs font-bold leading-none uppercase">
                    1 KG
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-white">RETAIL WEIGHT</h4>
                    <p className="text-xs text-white/40 mt-1">Standardized net weights with moisture barriers.</p>
                  </div>
                </div>

                <div className="bg-[#0F0F0F] border border-white/10 p-5 flex items-start gap-4">
                  <div className="bg-amber-500/10 text-amber-500 p-2 text-xs font-bold leading-none uppercase">
                    25mm
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-white">CUBE BLOCKS</h4>
                    <p className="text-xs text-white/40 mt-1">Symmetrical 25mm layout blocks fit standard shisha foils.</p>
                  </div>
                </div>

                <div className="bg-[#0F0F0F] border border-white/10 p-5 flex items-start gap-4">
                  <div className="bg-amber-500/10 text-amber-500 p-2">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-white">ECO FRIENDLY CERTIFIED</h4>
                    <p className="text-xs text-white/40 mt-1">Zero chemicals, zero harmful odorous materials, and clean ash fall.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATIONS WITH BOLD TAB SYSTEM */}
      <section id="specs" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
              02 / TECHNICAL DETAILS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase">
              SPECIFICATIONS
            </h2>
            <div className="h-0.5 w-16 bg-white/25 mx-auto mt-4" />
          </div>

          {/* Interactive Navigation Menu Tabs in Bold Minimalist layout */}
          <div className="flex justify-center mb-12">
            <div className="border border-white/15 p-1 rounded-none inline-flex bg-black">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 text-xs uppercase tracking-widest font-black transition-all cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PROPERTIES
              </button>
              <button
                onClick={() => setActiveTab('shapes')}
                className={`px-6 py-3 text-xs uppercase tracking-widest font-black transition-all cursor-pointer ${
                  activeTab === 'shapes'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                SHAPES & SIZES
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'specs' ? (
              <motion.div
                key="specs-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F0F0F] border border-white/10 overflow-hidden"
              >
                <div className="bg-[#141414] px-6 py-4.5 border-b border-white/10 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black font-mono text-amber-500">
                    LAB ANALYSIS & PHYSICAL COMPOSITION (AS ENERGY TESTING)
                  </span>
                </div>
                <div className="divide-y divide-white/10 font-mono">
                  {specsList.map((spec, i) => (
                    <div 
                      key={i} 
                      className="grid grid-cols-1 sm:grid-cols-12 px-6 py-5 text-sm items-center hover:bg-white/5 transition-colors"
                    >
                      <div className="font-extrabold text-white text-xs uppercase tracking-wider col-span-1 sm:col-span-5 mb-2 sm:mb-0">
                        {spec.label}
                      </div>
                      <div className="text-white/60 sm:col-span-7 font-light text-xs sm:text-sm">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="shapes-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F0F0F] border border-white/10 overflow-hidden"
              >
                <div className="bg-[#141414] px-6 py-4.5 border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black font-mono text-amber-500">
                    STANDARD EXPORT PACKAGE FORMATS
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-mono">
                    <thead>
                      <tr className="bg-black border-b border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest text-left">
                        <th className="px-6 py-5">SHAPE TYPE</th>
                        <th className="px-6 py-5">DIMENSIONAL SIZING</th>
                        <th className="px-6 py-5 hidden sm:table-cell">RECOMMENDED APPLICATION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                      {shapesList.map((shape, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-5 font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-amber-500" />
                            {shape.name}
                          </td>
                          <td className="px-6 py-5 text-amber-400 font-bold">{shape.size}</td>
                          <td className="px-6 py-5 text-white/50 hidden sm:table-cell font-mono text-xs">{shape.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-black px-6 py-5 border-t border-white/10 text-[10px] text-white/40 italic font-mono">
                  * Custom packaging formats, brand boxes print designs, and customized size dimensions exist upon active RFQ client requests.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* NEW SECTION: DIRETIONS OF USE & SAFETY REGULATIONS (EXTRACTED FROM THE BOX PACKAGING GRAPHICS) */}
      <section id="how-to-use" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Interactive How To Use */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
                  03 / STEPS OF IGNITION
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase">
                  DIRECTIONS FOR USE
                </h2>
                <div className="h-0.5 w-16 bg-white/20 mt-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {useSteps.map((step, i) => (
                  <div key={i} className="bg-[#0F0F0F] border border-white/10 p-6 flex flex-col justify-between min-h-[180px]">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs font-black text-amber-500 tracking-wider">
                        STEP / {step.num}
                      </span>
                      <HelpCircle className="w-4 h-4 text-white/30" />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-base font-extrabold uppercase tracking-wide text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-white/50 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Safety Warning & Storage */}
            <div className="lg:col-span-5 space-y-10 bg-[#0F0F0F] border border-amber-500/20 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <h3 className="font-black text-xl uppercase tracking-wider text-white">
                  SAFETY WARNINGS
                </h3>
              </div>
              <div className="h-0.5 w-16 bg-amber-500" />
              
              <ul className="space-y-4 font-mono text-xs text-white/60">
                {safetyRules.map((rule, idx) => (
                  <li key={idx} className="flex gap-3 items-start leading-relaxed">
                    <span className="text-amber-500 font-bold shrink-0">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-xs">
                <span className="block text-amber-500 font-black uppercase tracking-widest">
                  STORAGE ENVIRONMENT
                </span>
                <p className="text-white/40 leading-relaxed font-sans">
                  Store package in a cool, fully dry place away from direct humidity, direct atmospheric moisture, and persistent boiling heat parameters. Keep box tightly closed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE BENEFITS / WHY CHOOSE US? IN BOLD NUMERICAL GRID */}
      <section id="benefits" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
              04 / THE PREMIUM ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase">
              WHY CHOOSE US?
            </h2>
            <div className="h-0.5 w-16 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-white/10 divide-y md:divide-y-0 lg:divide-x divide-white/10 bg-[#0F0F0F]">
            
            {/* Feature 1 */}
            <div className="p-8 space-y-4">
              <span className="text-amber-500/80 font-mono text-2xl font-black block">01</span>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">Long Duration</h3>
              <p className="text-white/55 text-xs font-mono leading-relaxed">
                Steady high-temperature emission for up to 3 hours with minimal thermal dissipation or loss.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 space-y-4">
              <span className="text-amber-500/80 font-mono text-2xl font-black block">02</span>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">Ultra Low Ash</h3>
              <p className="text-white/55 text-xs font-mono leading-relaxed">
                Maintains clean 2%-3% white ash residues. Perfect for shisha burners keeping pure flavors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 space-y-4">
              <span className="text-amber-500/80 font-mono text-2xl font-black block">03</span>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">Maximum Heat</h3>
              <p className="text-white/55 text-xs font-mono leading-relaxed">
                Concentrated thermal output over 7,200 kcal/kg. Quick lighting and exceptional performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 space-y-4">
              <span className="text-amber-500/80 font-mono text-2xl font-black block">04</span>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">100% Organic</h3>
              <p className="text-white/55 text-xs font-mono leading-relaxed">
                Chemical free premium materials. Scentless, completely odorless, and non-sulfur burning.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 space-y-4">
              <span className="text-amber-500/80 font-mono text-2xl font-black block">05</span>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white">Export Ready</h3>
              <p className="text-white/55 text-xs font-mono leading-relaxed">
                Factory design compliant packaging, full sea logistics networks, and reliable contract delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHATSAPP QUOTE FORM - INTUITIVE & MINIMALIST */}
      <section id="inquiry" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
              05 / INSTANT PRICING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase leading-none">
              WHATSAPP INQUIRY
            </h2>
            <p className="text-white/40 mt-4 text-xs sm:text-sm max-w-lg mx-auto font-mono uppercase tracking-widest [word-spacing:3px]">
              Fill the details to dispatch auto-formatted parameters to our WhatsApp desk.
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 p-8 sm:p-12 text-left">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono">
                <div>
                  <label className="block text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                    Full Name / Corporate Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / AS Energy Corp"
                    value={inquirerName}
                    onChange={(e) => setInquirerName(e.target.value)}
                    className="w-full bg-black border border-white/15 px-4 py-4.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors uppercase tracking-widest"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                    Your Core Market Use-Case
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-black border border-white/15 px-4 py-4.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors uppercase tracking-wider"
                  >
                    <option>Shisha & Hookah Distributors</option>
                    <option>Supermarket BBQ Suppliers</option>
                    <option>Hookah Lounges & Cafes</option>
                    <option>Industrial Packaging Clients</option>
                    <option>Other / Customized</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono">
                <div>
                  <label className="block text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                    Preferred Briquette Layout
                  </label>
                  <div className="w-full bg-black/40 border border-white/10 px-4 py-4.5 text-xs text-amber-500 font-bold uppercase tracking-wider">
                    Cube (22mm / 25mm / 26mm / 27mm) Random Mix
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                    Shipment Destination / Port
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hamburg, Rotterdam, Dubai"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-black border border-white/15 px-4 py-4.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors uppercase tracking-widest"
                  />
                </div>
              </div>

              <div className="font-mono">
                <label className="block text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                  Volume Requirement & Message
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g. Estimated 20 tons container order with brand boxing needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-white/15 px-4 py-4.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-white/20 uppercase tracking-wider"
                />
              </div>

              <div className="pt-2 font-mono">
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-amber-500 hover:text-black font-black py-5 uppercase tracking-[0.2em] text-xs transition-colors duration-300 cursor-pointer"
                >
                  FORMAT & OPEN WHATSAPP CHAT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CHANNELS CONTAINER (WITH CUSTOM PACKAGING EXPORTER DIRECTORY) */}
      <section id="contact" className="py-24 bg-[#0A0A0A] border-b border-white/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-amber-500 block mb-3">
              06 / EXPORTER DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase">
              REGISTERED OFFSHORE DESK
            </h2>
            <div className="h-0.5 w-16 bg-white/20 mx-auto mt-4" />
          </div>

          {/* Map address block from custom packaging image */}
          <div className="mb-12 bg-[#0F0F0F] border border-white/10 p-8 sm:p-10 font-mono text-xs leading-relaxed space-y-4">
            <div className="flex items-center gap-3 text-amber-500">
              <MapPin className="w-5 h-5 shrink-0" />
              <span className="font-black tracking-widest uppercase">OFFICIAL PRIMARY EXPORT OFFICE</span>
            </div>
            <p className="text-white/80 text-sm">
              <span className="font-extrabold text-white">AS ENERGY</span> <span className="text-white/30">/ FOS Brand Partners</span><br />
              Glagah-Banyuwangi, East Java 68432, Indonesia
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/50 pt-2 text-xs">
              <div>Chat_Me: <span className="text-white font-bold"><a href="https://chat.google.com/u/7/app/home" target="_blank" rel="noopener noreferrer">chatgoogle.com</a></span> (Alternative)</div>
              <div>Web: <span className="text-amber-500 font-bold transition-colors hover:underline"><a href="https://websitefos.vercel.app/" target="_blank" rel="noopener noreferrer">www.asenergy.id</a></span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
            {/* WhatsApp Portal */}
            <a 
              href="https://wa.me/6289651864733" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0F0F0F] border border-white/10 hover:border-amber-500/40 p-8 flex flex-col justify-between h-72 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">WHATSAPP CHAT</span>
                  <Phone className="w-5 h-5 text-white/40" />
                </div>
                <div className="mt-8">
                  <p className="text-2xl font-black text-white group-hover:text-amber-500 transition-colors">
                    +62 8965 1864 733
                  </p>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed">
                    Direct communication, catalog specifications, current price quote charts, and shipment options.
                  </p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold group-hover:text-white flex items-center gap-2 pt-4 transition-colors">
                LAUNCH INSTANT CHAT <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Email Portal */}
            <a 
              href="mailto:foscharcoal@gmail.com"
              className="bg-[#0F0F0F] border border-white/10 hover:border-amber-500/40 p-8 flex flex-col justify-between h-72 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">EMAIL RFQ</span>
                  <Mail className="w-5 h-5 text-white/40" />
                </div>
                <div className="mt-8">
                  <p className="text-2xl font-black text-white group-hover:text-amber-550 transition-colors">
                    foscharcoal@gmail.com
                  </p>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed">
                    Corporate tenders, physical container load logistics, custom logo box layout print requests.
                  </p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold group-hover:text-white flex items-center gap-2 pt-4 transition-colors">
                COMPOSE EMAIL <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. SIMPLE BOLD MINIMALIST FOOTER */}
      <footer className="bg-[#0F0F0F] border-t border-white/10 py-16 text-white font-mono">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-left">
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-white/40 mb-3">FOS_COCO</span>
              <div className="flex items-center gap-2">
                <img 
                  src="/src/assets/images/charcoal_logo_dark_bg_1781622907683.jpg" 
                  alt="FOS Logo" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 object-contain mix-blend-screen"
                />
                <span className="font-extrabold tracking-tighter uppercase text-base">FOS_CHARCOAL</span>
              </div>
            </div>

            <div>
              <span className="block text-[9px] uppercase tracking-widest text-white/40 mb-3">AS ENERGY OFFICE</span>
              <span className="text-xs text-white/60 leading-relaxed block">
                Banyuwangi-Surabaya Export Desk,<br />
                Republic of Indonesia
              </span>
            </div>

            <div className="md:text-right">
              <span className="block text-[9px] uppercase tracking-widest text-white/40 mb-3">Socials & Networks</span>
              <div className="flex md:justify-end gap-5 text-xs text-white/60">
                <a href="#" className="hover:text-amber-500 transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-amber-500 transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-amber-500 transition-colors">EXPORT_PORTAL</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
            <span>&copy; {new Date().getFullYear()} Fos Charcoal / AS Energy. All Rights Reserved.</span>
            <span>Est. 2026 / IDN Exporter.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
