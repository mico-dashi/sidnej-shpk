import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'E ardhmja e Bujqësisë së Qëndrueshme',
    excerpt: 'Si bujqësia rigjeneruese po ndryshon mënyrën se si mendojmë për sigurinë ushqimore dhe shëndetin e tokës.',
    category: 'Qëndrueshmëria',
    author: 'Dr. Elena Rossi',
    date: '15 Mars, 2026',
    readTime: '8 min lexim',
    img: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Vjelja e Pranverës: 5 Recetat kryesore sezonale',
    excerpt: 'Të freskëta, vibruese dhe të mbushura me lëndë ushqyese. Zbuloni recetat tona të preferuara për sezonin e pranverës.',
    category: 'Receta',
    author: 'Chef Marcus Thorne',
    date: '10 Mars, 2026',
    readTime: '12 min lexim',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Kuptimi i Certifikimeve Organike',
    excerpt: 'Çfarë do të thonë vërtet ato etiketa? Një udhëzues gjithëpërfshirës për kuptimin e standardeve ushqimore.',
    category: 'Edukim',
    author: 'Sarah Jenkins',
    date: '5 Mars, 2026',
    readTime: '6 min lexim',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Arti i Vajit të Ullirit të Shtypur në të Ftohtë',
    excerpt: 'Një zhytje e thellë në metodat tradicionale që përdorim për të nxjerrë vajin më të pastër nga ullinjtë tanë.',
    category: 'Prodhimi',
    author: 'Antonio Moretti',
    date: '28 Shkurt, 2026',
    readTime: '10 min lexim',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Trendet Globale të Ushqimit për t\'u Ndjekur në 2026',
    excerpt: 'Nga inovacionet me bazë bimore te ushqimet funksionale, ja çfarë po i jep formë industrisë.',
    category: 'Industria',
    author: 'Michael Chen',
    date: '20 Shkurt, 2026',
    readTime: '7 min lexim',
    img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Ndërtimi i Zinxhirëve të Furnizimit Rezistent',
    excerpt: 'Si sigurojmë cilësi dhe disponueshmëri të qëndrueshme në një klimë globale gjithnjë në ndryshim.',
    category: 'Logjistika',
    author: 'Linda Wu',
    date: '15 Shkurt, 2026',
    readTime: '9 min lexim',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="pt-20 font-sans bg-soft-white">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-soft-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >
              Njohuri dhe Trashëgimi
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-bold text-dark-gray leading-[0.9] tracking-tighter"
            >
              Ditari i <br />
              <span className="text-primary italic">Sidnej</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-gray/60 leading-relaxed max-w-2xl font-light"
            >
              Duke eksploruar traditat e pasura kulinarisë së Beratit dhe të ardhmen e prodhimit autentik të ushqimit shqiptar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-dark-gray min-h-[500px] flex items-end"
          >
            <div className="absolute inset-0">
              <img
                src={posts[0].img}
                alt={posts[0].title}
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray/20 to-transparent" />
            </div>
            <div className="relative z-10 p-8 md:p-16 max-w-3xl space-y-6">
              <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Artikull i Sugjeruar
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2"><User size={16} /> {posts[0].author}</div>
                <div className="flex items-center gap-2"><Calendar size={16} /> {posts[0].date}</div>
                <div className="flex items-center gap-2"><Clock size={16} /> {posts[0].readTime}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-dark-gray/40 text-xs font-medium">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-dark-gray leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-gray/70 line-clamp-2 font-light">
                    {post.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      Lexo Artikullin <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border-2 border-soft-white hover:border-primary hover:text-primary rounded-full font-bold transition-all shadow-sm">
              Ngarko më shumë Artikuj
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
