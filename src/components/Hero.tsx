import { motion } from 'framer-motion';
import CrystalScene from './CrystalScene';
import { company } from '../data/content';

const words = ['AI-Powered', 'Brilliance', 'for', 'Telco', 'Transformation'];

export default function Hero() {
  return (
    <section id="home" className="hero-shell relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 crystal-grid opacity-50" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-[1.08fr_.92fr] md:px-8">
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-6">
            Singapore-founded digital transformation partner · Since {company.founded}
          </motion.div>
          <h1 className="text-balance font-display text-6xl font-black leading-[0.9] tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
            {words.map((word, index) => (
              <motion.span
                className="mr-4 inline-block"
                key={word}
                initial={{ opacity: 0, y: 48, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="mt-7 max-w-2xl text-xl leading-8 text-ink/70 md:text-2xl"
          >
            {company.tagline} We help telecom operators cut cost, save energy, predict faults, and modernize operations with tailored AI, OSS, SAP, and CX solutions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="liquid-button primary" href="#contact">Start a transformation</a>
            <a className="liquid-button" href="#solutions">Explore solutions</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 1 }} className="scene-card relative h-[520px] min-h-[420px] overflow-hidden rounded-[2.25rem] border border-white/55 bg-ink shadow-glass">
          <CrystalScene />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/25 bg-white/12 p-4 text-white backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyanite">Live intelligence layer</p>
            <p className="mt-2 text-sm text-white/75">Network signals · Energy patterns · Maintenance risk · Customer operations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
