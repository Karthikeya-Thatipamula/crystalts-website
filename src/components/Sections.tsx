import { motion } from 'framer-motion';
import CrystalScene from './CrystalScene';
import { company, focus, partners, services, stats, values } from '../data/content';

export function Impact() {
  return (
    <section id="impact" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-heading reveal-up">
          <p className="eyebrow">Transformation impact</p>
          <h2>From fragmented telecom operations to one intelligent, predictive operating model.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="glass-panel reveal-left border-rose-200/50">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-rose-500">Legacy Telecom Operations</p>
            <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] text-ink">Reactive. Expensive. Siloed.</h3>
            <ul className="mt-8 space-y-4 text-lg text-ink/65">
              <li>• Faults discovered after service impact</li>
              <li>• Rising energy usage and carbon pressure</li>
              <li>• Manual Opex reviews and disconnected systems</li>
              <li>• Customer journeys split across channels</li>
            </ul>
          </div>
          <div className="glass-panel reveal-right border-cyanite/50 bg-liquid-radial">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-600">CrystalTS AI-Powered Future</p>
            <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] text-ink">Predictive. Efficient. Sustainable.</h3>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat) => (
                <div className="rounded-3xl border border-white/60 bg-white/50 p-5 backdrop-blur-2xl" key={stat.label}>
                  <div className="counter text-4xl font-black tracking-[-0.05em] text-ink" data-value={stat.value}>{stat.value}{stat.suffix}</div>
                  <p className="mt-2 text-sm font-semibold text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-heading reveal-up text-white">
          <p className="eyebrow dark">Our solutions</p>
          <h2>AI, consulting, integration, and managed services for smarter telco operations.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="solution-card group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (index % 3) * 0.06 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="hex-icon">{String(index + 1).padStart(2, '0')}</div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyanite">{service.metric}</span>
              </div>
              <h3 className="text-2xl font-black tracking-[-0.035em]">{service.title}</h3>
              <p className="mt-4 text-white/65">{service.copy}</p>
              <p className="mt-6 translate-y-2 text-sm font-semibold text-mint opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{service.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCrystal() {
  return (
    <section id="why-crystalts" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="sticky top-28 reveal-left">
            <p className="eyebrow">Why CrystalTS</p>
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-ink md:text-7xl">Built for long-term partnership.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">Our vision is to be partners in progress with telecom organizations worldwide, delivering exceptional operational efficiency, cost optimization, and sustainable growth.</p>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div className="glass-tile reveal-up" key={stat.label}>
                  <div className="counter text-4xl font-black tracking-[-0.05em] text-ink" data-value={stat.value}>{stat.value}{stat.suffix}</div>
                  <p className="mt-2 text-sm font-bold text-ink/55">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <div className="glass-panel small reveal-up" key={value.title}>
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-ink">{value.title}</h3>
                  <p className="mt-3 text-ink/62">{value.copy}</p>
                </div>
              ))}
            </div>
            <div className="glass-panel small reveal-up">
              <p className="eyebrow">Partner ecosystem</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {partners.map((partner) => <span className="partner-pill" key={partner}>{partner}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalReach() {
  return (
    <section id="reach" className="section-pad bg-[#eefaff]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div className="section-heading reveal-left">
          <p className="eyebrow">Insights / global reach</p>
          <h2>Turning network data into boardroom clarity.</h2>
          <p className="mt-6 text-lg leading-8 text-ink/65">Crystal-Tech is a next-generation consulting and digital transformation company with a key focus on consulting services, professional services, and AI-driven solutions. Our integrated approach spans resource augmentation, managed services, and system integration.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {focus.map((item) => <span className="partner-pill bg-white/70" key={item}>{item}</span>)}
          </div>
        </div>
        <div className="scene-card h-[420px] overflow-hidden rounded-[2rem] bg-ink shadow-glass reveal-right">
          <CrystalScene compact />
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="reveal-left">
          <p className="eyebrow dark">Contact</p>
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">Let’s engineer your next efficiency curve.</h2>
          <div className="mt-8 space-y-3 text-white/70">
            <p><strong className="text-white">{company.legalName}</strong></p>
            <p>{company.address}</p>
            <p><a href={`mailto:${company.email}`} className="text-cyanite">{company.email}</a></p>
            <p>{company.ambition}</p>
          </div>
        </div>
        <form className="contact-form reveal-right" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <label>Name<input placeholder="Your name" /></label>
            <label>Email<input type="email" placeholder="you@company.com" /></label>
          </div>
          <label>Company<input placeholder="Company name" /></label>
          <label>What can we transform?<textarea placeholder="Tell us about your network, operations, cost, energy, SAP, OSS, or CX priorities." rows={5} /></label>
          <button className="liquid-button primary w-full justify-center" type="submit">Prepare EmailJS-ready enquiry</button>
          <p className="text-xs text-white/45">Static form scaffolded for EmailJS or your preferred CRM endpoint.</p>
        </form>
      </div>
    </section>
  );
}
