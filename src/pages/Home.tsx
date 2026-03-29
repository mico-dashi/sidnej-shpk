import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Globe, Star, Award, CheckCircle2, Package, Search, ShoppingBag, Filter, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden bg-soft-white font-sans text-dark-gray">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=2000&auto=format&fit=crop"
            alt="Authentic Albanian Taste"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-tight"
          >
            Shije Autentike Shqiptare, <br />
            <span className="text-accent italic">e Punuar me Traditë</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Perime të konservuara premium të bëra në Berat duke përdorur përbërës natyralë dhe receta të testuara në kohë.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-red-900 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
            >
              Eksploro Produktet
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all"
            >
              Bëhu Partner
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="text-accent" size={32} />
              <span className="text-lg font-bold tracking-wide uppercase">15+ Vite Përvojë</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0">
              <Leaf className="text-accent" size={32} />
              <span className="text-lg font-bold tracking-wide uppercase">100% Përbërës Natyralë</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-accent" size={32} />
              <span className="text-lg font-bold tracking-wide uppercase">Prodhuar në Berat, Shqipëri</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1000&auto=format&fit=crop"
                  alt="A Tradition You Can Taste"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full z-0 blur-3xl" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full z-0 blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Trashëgimia jonë</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-dark-gray leading-tight">
                  Një Traditë që Mund ta Shijoni
                </h3>
              </div>
              <p className="text-xl text-dark-gray/70 leading-relaxed font-light">
                Sidnej Shpk prodhon perime të konservuara me cilësi të lartë për më shumë se 15 vjet.
                E vendosur në Berat, një rajon i njohur për trashëgiminë e tij të pasur bujqësore, ne kombinojmë recetat tradicionale
                me standardet moderne të prodhimit për të ofruar shije autentike në çdo tryezë.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-green-900 transition-all shadow-lg shadow-secondary/20"
              >
                Mëso më shumë <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Specialitetet Tona</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-dark-gray">Produktet Tona</h3>
            <p className="text-xl text-dark-gray/60 leading-relaxed">
              Perime të zgjedhura me kujdes, të përpunuara me saktësi për të ruajtur shijen, teksturën dhe vlerat ushqyese.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: 'Spec i Mbushur', img: '/products/specpv.jpg' },
              { name: 'Ajvar Tradicional', img: '/products/ajvarv.jpg' },
              { name: 'Ullinj te Konservuar', img: '/products/ullinjv.jpg' },
              { name: 'Vaj Ulliri Ekstra', img: '/products/vajekstrav.jpg' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 rounded-4xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-2xl font-display font-bold text-white mb-2">{cat.name}</h4>
                    <div className="w-10 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all"
            >
              Shiko Katalogun e Plotë <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Diferenca Sidnej</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-dark-gray">Pse të Zgjidhni Sidnej</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: 'Perime të freskëta të burimit lokal', desc: 'Ne bashkëpunojmë me fermerët lokalë të Beratit për të siguruar përbërësit e cilësisë më të lartë.', icon: Leaf },
                  { title: 'Receta tradicionale të ruajtura', desc: 'Metodat tona nderojnë shijen autentike të trashëgimisë kulinarisë shqiptare.', icon: Star },
                  { title: 'Teknologjia moderne e prodhimit', desc: 'Objektet e teknologjisë së fundit sigurojnë siguri dhe qëndrueshmëri në çdo kavanoz.', icon: ShieldCheck },
                  { title: 'Cilësi dhe siguri e qëndrueshme', desc: 'Kontroll rigoroz i cilësisë dhe certifikime ndërkombëtare (HACCP, ISO).', icon: CheckCircle2 },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark-gray mb-2">{item.title}</h4>
                      <p className="text-dark-gray/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <img src="/products/specpv.jpg" alt="Fresh peppers" className="rounded-4xl shadow-xl" referrerPolicy="no-referrer" />
                  <img src="/products/pjeshkevogel.jpg" alt="Ajvar preparation" className="rounded-4xl shadow-xl" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-6">
                  <img src="/products/qershivogel.jpg" alt="Roasted peppers" className="rounded-4xl shadow-xl" referrerPolicy="no-referrer" />
                  <img src="/products/portokallevogel.jpg" alt="Pickles" className="rounded-4xl shadow-xl" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-soft-white via-transparent to-transparent h-1/4 bottom-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Metoda Jonë</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-dark-gray">Nga Ferma në Kavanoz</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Lines */}
            <div className="absolute top-24 left-1/4 right-1/4 h-0.5 bg-slate-100 hidden md:block z-0" />
            
            {[
              { step: '01', title: 'Përzgjedhja', desc: 'Perime të freskëta nga ferma lokale të besuara', icon: Search },
              { step: '02', title: 'Përgatitja', desc: 'Pastruar dhe përpunuar me kujdes', icon: Filter },
              { step: '03', title: 'Paketimi', desc: 'Mbyllur për të ruajtur freskinë dhe shijen', icon: Package },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center space-y-6 group"
              >
                <div className="w-24 h-24 bg-soft-white rounded-full flex items-center justify-center text-primary mx-auto shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={40} />
                </div>
                <div className="space-y-2">
                  <span className="text-accent font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">{item.step}</span>
                  <h4 className="text-2xl font-bold text-dark-gray">{item.title}</h4>
                  <p className="text-dark-gray/60 leading-relaxed max-w-62.5 mx-auto">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
            Po kërkoni për një furnizues <br />
            <span className="text-accent italic">të besueshëm ushqimi?</span>
          </h2>
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
            Bashkëpunoni me ne dhe sillni shije autentike shqiptare në tregun tuaj.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-5 bg-accent hover:bg-yellow-700 text-white rounded-full font-bold text-xl transition-all shadow-2xl shadow-black/30"
            >
              Na Kontaktoni
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Shërbimet Tona
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
