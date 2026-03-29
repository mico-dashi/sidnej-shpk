import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const categories = ['Të gjitha', 'Perime te konservuara', 'Ullinj dhe Vaj Ulliri', 'Fruta(Komposto)', 'Reçel', 'Gliko', 'Salca', 'Katering', 'Mjalte'];

const products = [
  { id: 1, name: 'Marmelatë Fiku', category: 'Reçel', img: 'products/fiqv.jpg' },
  { id: 2, name: 'Ajvar (Kuti)', category: 'Katering', img: 'products/ajvarv (1).jpg' },
  { id: 3, name: 'Ajvar Tradicional', category: 'Perime te konservuara', img: 'products/ajvarv.jpg' },
  { id: 4, name: 'Domate pa Lëkurë', category: 'Perime te konservuara', img: 'products/domatev.jpg' },
  { id: 5, name: 'Salcë Domate', category: 'Salca', img: 'products/salcev.jpg' },
  { id: 6, name: 'Fërgesë me Gjizë', category: 'Perime te konservuara', img: 'products/fergesev.jpg' },
  { id: 7, name: 'Reçel Fiku', category: 'Reçel', img: 'products/IMG_1714_RFiku.jpg' },
  { id: 8, name: 'Ftoi Reçel', category: 'Reçel', img: 'products/IMG_1718_RFtoi.jpg' },
  { id: 9, name: 'Kumbull Reçel', category: 'Reçel', img: 'products/IMG_1670_RKumbulle.jpg' },
  { id: 10, name: 'Qershi Komposto Ekstra', category: 'Fruta(Komposto)', img: 'products/IMG_1723_Qershie_Komposto.jpg' },
  { id: 11, name: 'Kumbull Komposto Ekstra', category: 'Fruta(Komposto)', img: 'products/IMG_1724_Kumbulle_Komposto.jpg' },
  { id: 12, name: 'Kajsi Reçel', category: 'Reçel', img: 'products/kajsivogel.jpg' },
  { id: 13, name: 'Kajsi Komposto Ekstra', category: 'Fruta(Komposto)', img: 'products/kajsivogel.png' },
  { id: 14, name: 'Domate Ketchup', category: 'Perime te konservuara', img: 'products/ketchupv.jpg' },
  { id: 15, name: 'Kumbull Gliko', category: 'Gliko', img: 'products/kumbullevogel.jpg' },
  { id: 16, name: 'Majonezë', category: 'Perime te konservuara', img: 'products/majonezev.jpg' },
  { id: 17, name: 'Mjaltë Natyral', category: 'Mjalte', img: 'products/mjaltivogel.jpg' },
  { id: 18, name: 'Panxhar i Kuq', category: 'Perime te konservuara', img: 'products/panxhv.jpg' },
  { id: 19, name: 'Patëllxhanë të Mbushur', category: 'Perime te konservuara', img: 'products/patellv.jpg' },
  { id: 20, name: 'Pjeshkë Komposto Ekstra', category: 'Fruta(Komposto)', img: 'products/pjeshkevogel.jpg' },
  { id: 21, name: 'Pjeshkë Reçel', category: 'Reçel', img: 'products/pjeshkvogel.jpg' },
  { id: 22, name: 'Portokall Gliko', category: 'Gliko', img: 'products/portokallevogel.jpg' },
  { id: 23, name: 'Qershi Gliko', category: 'Gliko', img: 'products/qershivogel.jpg' },
  { id: 24, name: 'Qershi Reçel', category: 'Reçel', img: 'products/qershiv.jpg' },
  { id: 25, name: 'Ullinj të Mbushur', category: 'Ullinj dhe Vaj Ulliri', img: 'products/ullij.jpg' },
  { id: 26, name: 'Sallatë e Përzier', category: 'Perime te konservuara', img: 'products/sallatepv.jpg' },
  { id: 27, name: 'Spec Djegës', category: 'Perime te konservuara', img: 'products/specdv.jpg' },
  { id: 28, name: 'Spec i Mbushur', category: 'Perime te konservuara', img: 'products/specpv.jpg' },
  { id: 29, name: 'Speca të Grira', category: 'Perime te konservuara', img: 'products/spgrirevogel.jpg' },
  { id: 30, name: 'Spec i Mbushur me Lakër', category: 'Perime te konservuara', img: 'products/spmbushurv.jpg' },
  { id: 31, name: 'Trangull Marinadë', category: 'Perime te konservuara', img: 'products/trangullv.jpg' },
  { id: 32, name: 'Ullinj me Bërthamë', category: 'Ullinj dhe Vaj Ulliri', img: 'products/ullinj.jpg' },
  { id: 33, name: 'Ullinj të Konservuar', category: 'Ullinj dhe Vaj Ulliri', img: 'products/ullinjv.jpg' },
  { id: 34, name: 'Ulli i Zi', category: 'Ullinj dhe Vaj Ulliri', img: 'products/ulliv.jpg' },
  { id: 35, name: 'Vaj Ulliri Sidnej', category: 'Ullinj dhe Vaj Ulliri', img: 'products/vajsv.jpg' },
  { id: 36, name: 'Vaj Ulliri Ekstra', category: 'Ullinj dhe Vaj Ulliri', img: 'products/vajekstrav.jpg' },
];

function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-300 text-dark-gray px-1 rounded font-bold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Të gjitha');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'Të gjitha' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 font-sans bg-soft-white">
      {/* Header */}
      <section className="bg-white py-24 border-b border-soft-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-dark-gray mb-8 tracking-tight"
          >
            Koleksioni <span className="text-primary">Jonë</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-gray/60 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Nga fushat e rrethuara nga dielli të Beratit në tryezën tuaj. Zbuloni gamën tonë të konservave autentike shqiptare, të punuara me dorë.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-18 z-40 bg-white/80 backdrop-blur-md border-b border-soft-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* Category Scroll Container */}
          <div className="relative w-full lg:w-auto">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white border border-gray-200 z-10 lg:hidden"
            >
              <ChevronLeft size={20} className="text-dark-gray" />
            </button>
            <div ref={categoryRef} className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar scrollbar-hide w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-soft-white text-dark-gray/50 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white border border-gray-200 z-10 lg:hidden"
            >
              <ChevronRight size={20} className="text-dark-gray" />
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-dark-gray/40" size={20} />
            <input
              type="text"
              placeholder="Kërkoni në koleksionin tonë..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-3.5 bg-soft-white border-none rounded-full text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 min-h-[70vh] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className="group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-linear-to-br from-slate-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 [image-rendering:auto] select-none"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8">
                      <motion.button 
                        onClick={() => setSelectedProduct(product)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-dark-gray px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md"
                      >
                        Shikim i Shpejtë
                      </motion.button>
                    </div>
                  </div>
                  <div className="space-y-2 text-center pt-6">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] block">
                      <HighlightMatch text={product.category} query={searchQuery} />
                    </span>
                    <h4 className="text-2xl font-display font-bold text-dark-gray group-hover:text-primary transition-colors tracking-tight leading-tight">
                      <HighlightMatch text={product.name} query={searchQuery} />
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32"
            >
              <div className="text-slate-200 mb-6 flex justify-center mx-auto w-24 h-24 bg-slate-100/50 rounded-2xl p-6">
                <Search size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-display font-bold text-dark-gray mb-3">Nuk u gjet asnjë produkt</h3>
              <p className="text-xl text-dark-gray/60 font-light max-w-md mx-auto">Provoni të rregulloni kërkimin ose filtrat e kategorive.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
            onClick={(e) => e.target === e.currentTarget && setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute -top-4 -right-4 z-20 w-16 h-16 bg-white shadow-2xl rounded-3xl flex items-center justify-center text-dark-gray hover:bg-primary hover:text-white transition-all border-4 border-white"
              >
                <Filter size={24} className="rotate-45" />
              </button>
              
              <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto shrink-0">
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover [image-rendering:auto] select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6">{selectedProduct.category}</span>
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-dark-gray mb-8 tracking-tight leading-tight">{selectedProduct.name}</h2>
                <div className="text-4xl font-display font-bold text-primary mb-10 opacity-0">
                  Contact for Pricing
                </div>
                <p className="text-xl text-dark-gray/80 leading-relaxed mb-12 font-light max-w-lg">
                  {selectedProduct.name} jonë përgatitet duke përdorur receta tradicionale nga Berati. Ne zgjedhim vetëm perimet më të mira në kulmin e pjekjes së tyre për të siguruar një shije autentike.
                </p>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 text-lg font-bold text-dark-gray">
                    <ShoppingBag size={24} className="text-primary" />
                    <span>Disponueshëm për Shitje me Shumicë dhe Pakicë</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg font-bold text-dark-gray">
                    <Filter size={24} className="text-primary" />
                    <span>Cilësi e Certifikuar HACCP & ISO</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-linear-to-r from-primary to-red-600 text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:from-red-600 hover:to-red-700 transition-all duration-300 backdrop-blur-md border-2 border-white/20"
                >
                  Kërkoni për Shpërndarje
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

