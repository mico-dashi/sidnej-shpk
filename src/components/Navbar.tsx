import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Ballina', href: '/' },
  { name: 'Rreth Nesh', href: '/about' },
  { name: 'Produkte', href: '/products' },
  { name: 'Shërbime', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-2.5 md:py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm md:py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group py-1">
          <div className="h-10 md:h-14 flex items-center">
            <span className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">S<span className="text-primary">SHPK</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-bold tracking-wide uppercase transition-colors',
                scrolled ? 'text-dark-gray/70 hover:text-primary' : 'text-white/90 hover:text-white',
                location.pathname === link.href && (scrolled ? 'text-primary' : 'text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/20">
            <div className={cn(
              "flex items-center gap-2 text-[10px] font-bold tracking-widest",
              scrolled ? "text-dark-gray/40" : "text-white/50"
            )}>
              <button className="hover:text-primary transition-colors text-primary">EN</button>
              <span className="opacity-30">/</span>
              <button className="hover:text-primary transition-colors">AL</button>
            </div>
            <Link
              to="/products"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg",
                scrolled 
                  ? "bg-primary text-white hover:bg-red-900 shadow-primary/20" 
                  : "bg-white text-primary hover:bg-soft-white shadow-black/10"
              )}
            >
              Eksploro Katalogun
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2.5 rounded-lg transition-colors flex items-center justify-center",
            scrolled ? "text-dark-gray hover:bg-soft-white" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-soft-white shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base font-bold uppercase tracking-wide flex items-center justify-between py-3.5 px-4 rounded-lg transition-colors group",
                    location.pathname === link.href 
                      ? "text-primary bg-primary/5" 
                      : "text-dark-gray/70 hover:text-dark-gray hover:bg-soft-white/50"
                  )}
                >
                  {link.name}
                  <ChevronRight size={18} className={cn(
                    "transition-opacity", 
                    location.pathname === link.href ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-primary'
                  )} />
                </Link>
              ))}
              <Link
                to="/products"
                className="mt-4 bg-primary text-white text-center py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-red-900 transition-colors"
              >
                Eksploro Katalogun
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
