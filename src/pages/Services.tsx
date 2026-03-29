import React from 'react';
import { motion } from 'motion/react';
import { Truck, Store, Package, BarChart3, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-20 font-sans bg-soft-white">
      {/* Hero */}
      <section className="relative py-24 bg-dark-gray text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
            alt="Logistics"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Kapacitetet e Shitjes me Shumicë dhe Eksportit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed font-light"
            >
              Sidnej Shpk është një partner i besueshëm për shitësit dhe shpërndarësit në mbarë botën. Ne ofrojmë prodhim në vëllime të larta të konservave autentike shqiptare me mbështetje të plotë për eksport.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Shërbimet Tona</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-dark-gray">Zgjidhje B2B dhe Eksporti</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Store,
                title: 'Partneritete me Shumicë',
                desc: 'Ne furnizojmë zinxhirët kryesorë të supermarketeve dhe dyqanet e specializuara ushqimore me gamën tonë të plotë të perimeve të konservuara premium.'
              },
              {
                icon: Globe2,
                title: 'Eksporti Ndërkombëtar',
                desc: 'Produktet tona janë gati për eksport, duke përmbushur të gjitha standardet ndërkombëtare të sigurisë ushqimore dhe kërkesat e etiketimit për tregjet globale.'
              },
              {
                icon: Package,
                title: 'Paketim i Personalizuar',
                desc: 'Ne ofrojmë zgjidhje fleksibël paketimi për porositë me shumicë, të përshtatura për nevojat specifike të partnerëve tanë të shpërndarjes.'
              },
              {
                icon: ShieldCheck,
                title: 'Sigurimi i Cilësisë',
                desc: 'Çdo seri i nënshtrohet testimeve rigoroze në fabrikën tonë të certifikuar për të siguruar shije dhe siguri të qëndrueshme.'
              },
              {
                icon: Truck,
                title: 'Logjistikë e Besueshme',
                desc: 'Menaxhim efikas i zinxhirit të furnizimit duke siguruar dërgimin në kohë të porosive, qofshin ato lokale apo ndërkombëtare.'
              },
              {
                icon: BarChart3,
                title: 'Mbështetje B2B',
                desc: 'Menaxhim i dedikuar i llogarisë dhe mbështetje për partnerët tanë të biznesit për të ndihmuar në rritjen e suksesit tonë të ndërsjellë.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] border border-soft-white hover:border-primary/20 hover:shadow-2xl transition-all bg-soft-white hover:bg-white"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon size={32} />
                </div>
                <h4 className="text-2xl font-display font-bold text-dark-gray mb-4">{service.title}</h4>
                <p className="text-dark-gray/70 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Process */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Procesi i Partneritetit</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-dark-gray leading-tight">Si Punojmë Së Bashku</h3>
              </div>
              
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Kërkesa Fillestare', desc: 'Kontaktoni ekipin tonë të eksportit me kërkesat tuaja dhe tregun e synuar.' },
                  { step: '02', title: 'Vlerësimi i Mostrave', desc: 'Ne ofrojmë mostra të produkteve tona për vlerësimin e cilësisë dhe shijes.' },
                  { step: '03', title: 'Personalizimi', desc: 'Diskutoni kërkesat e paketimit, etiketimit dhe vëllimit të përshtatura për nevojat tuaja.' },
                  { step: '04', title: 'Logjistika dhe Dorëzimi', desc: 'Prodhim efikas dhe dërgesë e besueshme në destinacionin tuaj.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="shrink-0 text-4xl font-black text-primary/10 group-hover:text-primary transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-dark-gray mb-2">{item.title}</h4>
                      <p className="text-dark-gray/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                alt="Warehouse logistics" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -left-12 bg-primary text-white p-12 rounded-[2.5rem] shadow-xl hidden md:block">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Pajtueshmëria e Eksportit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Vite Përvojë', value: '15+' },
              { label: 'Prodhimi Vjetor', value: '500t+' },
              { label: 'Varietete Produktesh', value: '30+' },
              { label: 'Tregje Eksporti', value: '10+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-dark-gray/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-dark-gray rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Partneriteti me Sidnej Shpk</h2>
              <p className="text-xl text-slate-400 font-light">
                Bashkohuni me rrjetin tonë në rritje të shpërndarësve ndërkombëtarë. Ne ofrojmë çmime konkurruese, furnizim të besueshëm dhe cilësi autentike.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-red-900 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/20">
                  Kërkoni Listën e Çmimeve me Shumicë
                </button>
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all">
                  Kontaktoni Ekipin e Eksportit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
