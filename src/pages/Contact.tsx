import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Emri është i detyrueshëm';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim() || !emailRegex.test(formState.email)) {
      newErrors.email = 'Email-i nuk është i vlefshëm';
    }
    
    if (!formState.subject) {
      newErrors.subject = 'Zgjidh një subjekt';
    }
    
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      newErrors.message = 'Mesazhi duhet të ketë të paktën 10 karaktere';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setSubmitted(true);
    alert('Faleminderit për mesazhin tuaj! Ekipi ynë do t\'ju kontaktojë së shpejti.');
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 font-sans bg-soft-white">
      {/* Header */}
      <section className="bg-white py-24 border-b border-soft-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark-gray mb-6"
          >
            Na Kontaktoni
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-gray/60 max-w-2xl mx-auto font-light"
          >
            Keni një pyetje rreth produkteve tona apo jeni të interesuar për një partneritet? Ekipi ynë në Berat është këtu për t'ju ndihmuar.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-dark-gray">Informacioni i Kontaktit</h3>
                <p className="text-dark-gray/60 font-light">
                  Na kontaktoni përmes cilësdo prej këtyre kanaleve. Ne synojmë t'u përgjigjemi të gjitha kërkesave brenda 24 orëve.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: 'Na Shkruani', info: 'info@sidnej.al', sub: 'Për kërkesa të përgjithshme dhe eksporti' },
                  { icon: Phone, title: 'Na Telefononi', info: '+355 69 000 0000', sub: 'Hënë-Premte, 8 paradite - 5 pasdite' },
                  { icon: MapPin, title: 'Na Vizitoni', info: 'Lagjia "30 Vjetori"', sub: 'Berat, Shqipëri 5001' },
                  { icon: Clock, title: 'Orari i Punës', info: 'E Hënë - E Premte', sub: '08:00 PD - 05:00 MD' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-gray">{item.title}</h4>
                      <p className="text-primary font-medium">{item.info}</p>
                      <p className="text-sm text-dark-gray/40">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-soft-white">
                <h4 className="font-bold text-dark-gray mb-4 uppercase tracking-widest text-xs">Ndiqni Udhëtimin Tonë</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', url: 'https://instagram.com/sidnej.shpk' },
                    { name: 'Facebook', url: 'https://facebook.com/sidnej.shpk' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-white rounded-full text-xs font-bold text-dark-gray/60 hover:bg-primary hover:text-white transition-all border border-soft-white shadow-sm"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] shadow-2xl shadow-dark-gray/5 border border-soft-white p-10 md:p-16">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-dark-gray/30 uppercase tracking-widest ml-1">Emri i Plotë</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-8 py-5 bg-soft-white border-none rounded-3xl focus:ring-2 outline-none transition-all text-dark-gray font-medium ${
                          errors.name ? 'focus:ring-red-500' : 'focus:ring-primary'
                        }`}
                      />
                      {errors.name && <span className="text-xs text-red-500 font-bold">{errors.name}</span>}
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-dark-gray/30 uppercase tracking-widest ml-1">Adresa e Email-it</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-8 py-5 bg-soft-white border-none rounded-3xl focus:ring-2 outline-none transition-all text-dark-gray font-medium ${
                          errors.email ? 'focus:ring-red-500' : 'focus:ring-primary'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-red-500 font-bold">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-dark-gray/30 uppercase tracking-widest ml-1">Subjekti</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={`w-full px-8 py-5 bg-soft-white border-none rounded-3xl focus:ring-2 outline-none appearance-none text-dark-gray font-medium ${
                        errors.subject ? 'focus:ring-red-500' : 'focus:ring-primary'
                      }`}
                    >
                      <option value="">Zgjidhni një subjekt</option>
                      <option value="General Inquiry">Kërkesë e Përgjithshme</option>
                      <option value="Wholesale">Partneritet me Shumicë</option>
                      <option value="Export">Kërkesë Eksporti</option>
                      <option value="Media">Media dhe Shtypi</option>
                      <option value="Other">Tjetër</option>
                    </select>
                    {errors.subject && <span className="text-xs text-red-500 font-bold">{errors.subject}</span>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-dark-gray/30 uppercase tracking-widest ml-1">Mesazhi Juaj</label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Si mund t'ju ndihmojmë?"
                      className={`w-full px-8 py-5 bg-soft-white border-none rounded-3xl focus:ring-2 outline-none transition-all resize-none text-dark-gray font-medium ${
                        errors.message ? 'focus:ring-red-500' : 'focus:ring-primary'
                      }`}
                    />
                    {errors.message && <span className="text-xs text-red-500 font-bold">{errors.message}</span>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-6 rounded-3xl font-bold text-lg transition-all flex items-center justify-center gap-4 group shadow-2xl ${
                      submitted
                        ? 'bg-green-500 text-white shadow-green-500/30'
                        : 'bg-primary hover:bg-primary/90 text-white shadow-primary/30'
                    }`}
                  >
                    {submitted ? '✓ Mesazhi u Dërgua' : 'Dërgo Mesazhin'}
                    {!submitted && <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-125 relative">
        <div className="absolute inset-0 bg-soft-white">
          {/* Placeholder for actual map integration */}
          <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="text-center space-y-4">
              <MapPin size={48} className="text-primary mx-auto" />
              <h4 className="text-xl font-display font-bold text-dark-gray">Vendndodhja e Selisë në Berat</h4>
              <p className="text-dark-gray/40 font-light">Lagjia "30 Vjetori", Berat, Shqipëri</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
