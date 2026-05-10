import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Contact, GlobalReach, Impact, Solutions, WhyCrystal } from './components/Sections';
import { useLenis } from './hooks/useLenis';
import { company } from './data/content';

gsap.registerPlugin(ScrollTrigger);

function useScrollStorytelling() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(el, { y: 54, autoAlpha: 0, filter: 'blur(12px)' }, {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
        gsap.fromTo(el, { x: -44, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
        gsap.fromTo(el, { x: 44, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } });
      });

      gsap.utils.toArray<HTMLElement>('.counter').forEach((el) => {
        const raw = Number(el.dataset.value || 0);
        const suffix = el.textContent?.replace(/[0-9]/g, '') || '';
        const counter = { value: 0 };

        gsap.to(counter, {
          value: raw,
          duration: 1.7,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = `${Math.round(counter.value)}${suffix}`; },
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

export default function App() {
  useLenis();
  useScrollStorytelling();

  return (
    <main className="min-h-screen overflow-hidden bg-glacier text-ink selection:bg-cyanite/30 selection:text-ink">
      <Navbar />
      <Hero />
      <Impact />
      <Solutions />
      <WhyCrystal />
      <GlobalReach />
      <Contact />
      <footer className="border-t border-white/10 bg-ink px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-black tracking-[0.16em]">CRYSTAL TECHNOLOGY SERVICES</p>
            <p className="mt-2 text-sm text-white/55">{company.legalName} · Founded {company.founded}</p>
          </div>
          <div className="text-sm text-white/55 md:text-right">
            <p>{company.address}</p>
            <a className="text-cyanite" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
