import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray text-slate-300 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              SIDNEJ<span className="text-primary">SHPK</span>
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed font-light">
            Shije autentike shqiptare që nga viti 2008. Me seli në qytetin historik të Beratit, ne prodhojmë perime të konservuara premium duke përdorur receta tradicionale dhe standarde moderne.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Kompania</h4>
          <ul className="space-y-4 text-sm">
            {['Rreth Nesh', 'Historia Jonë', 'Qëndrueshmëria', 'Kontrolli i Cilësisë', 'Karriera'].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-accent transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Burimet</h4>
          <ul className="space-y-4 text-sm">
            {['Katalogu i Produkteve', 'Shpërndarja', 'Shitja me Shumicë', 'Receta', 'Blog'].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-accent transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Na Kontaktoni</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <span>Lagjia "30 Vjetori"<br />Berat, Shqipëri 5001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary shrink-0" />
              <span>+355 69 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary shrink-0" />
              <span>info@sidnej.al</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {currentYear} Sidnej Shpk. Të gjitha të drejtat e rezervuara.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Politika e Privatësisë</a>
          <a href="#" className="hover:text-white transition-colors">Kushtet e Shërbimit</a>
        </div>
      </div>
    </footer>
  );
}
