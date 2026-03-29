import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Heart, Users, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 font-sans bg-soft-white">
      {/* Header */}
      <section className="bg-dark-gray py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2000&auto=format&fit=crop"
            alt="Berat landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Trashëgimia jonë
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Duke ruajtur shijet autentike të Beratit, Shqipëri që nga viti 2008. Një udhëtim tradite, cilësie dhe përsosmërie natyrore.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Rreth Nesh</h2>
                <h3 className="text-4xl font-display font-bold text-dark-gray">TRADITA E SHTEPISE TUAJ!</h3>
              </div>
              <div className="space-y-6 text-dark-gray/70 leading-relaxed text-lg font-light">
                <p>
                  Për gjatë 15 viteve, SIDNEJ ka prodhuar një gamë të gjerë të frutave dhe perimeve të konservuara, duke vazhduar traditën e Beratit, nje qytet ne pjesen jugore te Shqiperise, përfshirë së fundmi në Listën e Trashëgimisë Botërore të UNESCO-s.
                </p>
                <p>
                  Kompania është e vendosur në zemër të Beratit ne një mjedis të virgjër larg ndotjes dhe smogut, në një peizazh harmonik, ku përbërësit themelore te produkteve tona rriten në mesin e peisazhit natyror dhe gjithe ngjyra. Të gjitha materialet e freskëta janë trajtuar me metoda tradicionale, të përpunuara menjëherë pas mbledhjes dhe të paketuara duke përdorur makineri moderne, për të siguruar cilësinë autentike dhe unike. Për të plotësuar nevojat në rritje të tregut, kompania ka krijuar një strukturë krejt të re në mënyrë që të ofrojë më shumë produkte që reflektojnë traditën e kuzhinës shqiptare. Rreth 180 produkte: ullinj, domate të përpunuara, varietetet ekstra të virgjër vaj ulliri, ullinj te mbushur, kastravec, spece marinadë, sallatë të përzier, speca të mbushur me lakër, reçel, komposto të ndryshme tradicionale. Të gjitha produktet janë të shpërndarë aktualisht në dyqane dhe supermarketet më të mira në të gjithë Shqipërinë, dhe gjithashtu eksportohen në vendet evropiane dhe me tej. Falë stafit të kualifikuar, Sidnej është në një pozitë për të përmbushur të gjitha nevojat e konsumatorëve.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-1">2008</div>
                  <div className="text-sm font-bold text-dark-gray/50 uppercase tracking-wider">Viti i Themelimit</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-primary mb-1">15+</div>
                  <div className="text-sm font-bold text-dark-gray/50 uppercase tracking-wider">Vite mjeshtërie</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=1000&auto=format&fit=crop"
                alt="Traditional ajvar production"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full items-center justify-center text-white text-center p-4 shadow-xl hidden md:flex">
                <span className="font-display font-bold text-lg">Authentic Berat Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Udhëtimi ynë</h2>
            <h3 className="text-4xl font-display font-bold text-dark-gray">Pikat kryesore të përsosmërisë</h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

            <div className="space-y-24">
              {[
                { year: '2008', title: 'Fillimi', desc: 'Sidnej Shpk është themeluar në Berat me fokus në specat tradicionalë të mbushur.' },
                { year: '2012', title: 'Zgjerimi', desc: 'Futja e Ajvarit dhe sallatave tradicionale në linjën tonë të produkteve.' },
                { year: '2016', title: 'Modernizimi', desc: 'Investime në objekte prodhimi të teknologjisë së fundit dhe certifikim HACCP.' },
                { year: '2020', title: 'Shtrirje Globale', desc: 'Kontratat e para të mëdha të eksportit u nënshkruan me distributorë evropianë.' },
                { year: '2024', title: 'Inovacioni', desc: 'Duke lançuar linja të reja produktesh organike dhe duke zgjeruar fabrikën tonë në Berat.' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Year Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center font-bold text-dark-gray text-xs shadow-lg">
                    {item.year}
                  </div>

                  <div className="flex-1 w-full md:w-1/2">
                    <div className={`p-10 rounded-[2.5rem] border border-soft-white shadow-sm hover:shadow-xl transition-all ${i % 2 === 0 ? 'bg-soft-white' : 'bg-white'}`}>
                      <div className="md:hidden text-primary font-black text-2xl mb-2">{item.year}</div>
                      <h4 className="text-2xl font-display font-bold text-dark-gray mb-4">{item.title}</h4>
                      <p className="text-dark-gray/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Procesi Ynë</h2>
            <h3 className="text-4xl font-display font-bold text-dark-gray">Nga Fusha në Kavanoz</h3>
            <p className="text-dark-gray/70 text-lg font-light">
              Ne mbajmë standardet më të larta në çdo fazë të prodhimit, duke siguruar që çdo kavanoz i produkteve Sidnej të kapë kulmin e freskisë.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Burimi Lokal',
                desc: 'Ne punojmë drejtpërdrejt me fermerët lokalë në rajonin e Beratit për të siguruar perimet më të freskëta, të rritura natyrshëm.'
              },
              {
                icon: Heart,
                title: 'Metodat Tradicionale',
                desc: 'Recetat tona bazohen në traditat e vjetra shqiptare, duke i pjekur ngadalë dhe duke i konservuar pa shtesa artificiale.'
              },
              {
                icon: Award,
                title: 'Standardet Moderne',
                desc: 'Fabrika jonë e teknologjisë së fundit është e certifikuar me HACCP dhe ISO, duke përmbushur kërkesat më të rrepta ndërkombëtare të sigurisë ushqimore.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-soft-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-display font-bold text-dark-gray mb-4">{value.title}</h4>
                <p className="text-dark-gray/70 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24 bg-dark-gray text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Vlerat Tona</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Çfarë na shtyn përpara</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: 'Cilësi pa Kompromis', desc: 'Ne kurrë nuk bëjmë lëshime. Çdo perime inspektohet, çdo kavanoz vuloset me kujdes.' },
                  { title: 'Respekti për Traditën', desc: 'Ne nderojmë recetat që kanë përcaktuar kuzhinën shqiptare për shekuj me radhë.' },
                  { title: 'Rritja e Qëndrueshme', desc: 'Ne rritemi së bashku me fermerët tanë lokalë, duke siguruar një ekosistem të shëndetshëm për Beratin.' }
                ].map((value, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-2">{value.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-light">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=600&auto=format&fit=crop" alt="Berat fields" className="rounded-3xl aspect-3/4 object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=600&auto=format&fit=crop" alt="Peppers" className="rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=600&auto=format&fit=crop" alt="Roasted peppers" className="rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1589135398309-0d44f59421b5?q=80&w=600&auto=format&fit=crop" alt="Pickles" className="rounded-3xl aspect-3/4 object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
