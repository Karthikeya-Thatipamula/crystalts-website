import { motion, useScroll, useTransform } from 'framer-motion';
import { company } from '../data/content';

const links = ['Impact', 'Solutions', 'Why CrystalTS', 'Reach', 'Contact'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 90], ['blur(14px)', 'blur(28px)']);
  const opacity = useTransform(scrollY, [0, 90], [0.58, 0.92]);

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6" style={{ backdropFilter: blur }}>
      <motion.nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/45 bg-white/60 px-4 py-3 shadow-glass md:px-5"
        style={{ opacity }}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="CrystalTS home">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-cyanite/50 bg-ink shadow-crystal">
            <span className="absolute inset-0 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg,transparent,#67e8f9,#8b5cf6,transparent)] opacity-70" />
            <svg viewBox="0 0 44 44" className="relative h-7 w-7 fill-none stroke-white" aria-hidden="true">
              <path d="M22 4 37 13v18L22 40 7 31V13L22 4Z" strokeWidth="2" />
              <path d="M22 4v36M7 13l30 18M37 13 7 31" strokeWidth="1.25" opacity=".72" />
            </svg>
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-sm font-black tracking-[0.22em] text-ink">CRYSTALTS</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/55">Liquid intelligence</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <a href={`mailto:${company.email}`} className="magnetic-button rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-crystal transition hover:-translate-y-0.5 hover:bg-midnight">
          Get In Touch
        </a>
      </motion.nav>
    </motion.header>
  );
}
