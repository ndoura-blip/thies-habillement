import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroImages } from '@/data/products';
import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRollRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      const titleEl = titleRef.current;
      if (titleEl) {
        const text = titleEl.textContent || '';
        titleEl.innerHTML = text
          .split('')
          .map((c) => `<span class="inline-block" style="opacity:0; transform: translateY(60%) rotate(8deg);">${c === ' ' ? '&nbsp;' : c}</span>`)
          .join('');

        gsap.to(titleEl.querySelectorAll('span'), {
          opacity: 1, y: 0, rotation: 0, duration: 1.2, stagger: 0.03, ease: 'power4.out', delay: 0.3,
        });
      }

      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 });
      }

      if (scrollHintRef.current) {
        gsap.to(scrollHintRef.current, { y: 12, repeat: -1, yoyo: true, duration: 1.5, ease: 'sine.inOut' });
      }

      if (rootRef.current) {
        gsap.to(rootRef.current.querySelectorAll('.hero-parallax'), {
          yPercent: -20, opacity: 0.3, ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }

      if (imageRollRef.current) {
        gsap.to(imageRollRef.current, { yPercent: -50, duration: 30, repeat: -1, ease: 'none' });
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleScrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={rootRef} id="hero" className="relative h-screen min-h-[700px] bg-th-ink overflow-hidden" data-section-theme="dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-th-red/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-th-burgundy/8 rounded-full blur-[100px]" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-[30%] hidden lg:block overflow-hidden opacity-25">
        <div ref={imageRollRef} className="flex flex-col">
          {[...heroImages, ...heroImages].map((src, i) => (
            <div key={i} className="w-full h-[50vh] flex-shrink-0 px-8 py-4">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-th-ink/40">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-th-ink via-transparent to-th-ink pointer-events-none" />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[30%] hidden lg:block overflow-hidden opacity-25">
        <div className="flex flex-col animate-roll">
          {[...heroImages].reverse().map((src, i) => (
            <div key={i} className="w-full h-[50vh] flex-shrink-0 px-8 py-4">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-th-ink/40">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-th-ink via-transparent to-th-ink pointer-events-none" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="hero-parallax text-[10px] md:text-xs tracking-[0.4em] uppercase text-th-red mb-6 font-medium">
          Partenaire des grandes marques · Thiès, Sénégal
        </p>
        <h1 ref={titleRef} className="hero-parallax font-serif text-[10vw] md:text-[7vw] lg:text-[5.5vw] leading-[1] tracking-tight text-th-ivory">
          L'élégance sénégalaise, autrement.
        </h1>
        <p ref={subtitleRef} className="hero-parallax max-w-xl text-sm md:text-base text-th-ivory/50 font-light leading-relaxed mt-8">
          Des tenues de caractère, des détails soignés et un style qui vous ressemble.
        </p>
        <div className="hero-parallax flex flex-col sm:flex-row gap-4 mt-10">
          <button onClick={() => handleScrollTo('#collections')} className="px-8 py-4 bg-th-red text-white text-sm tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-th-burgundy transition-all duration-500">
            Découvrir les collections
          </button>
          <button onClick={() => handleScrollTo('#sur-mesure')} className="px-8 py-4 border border-th-ivory/30 text-th-ivory text-sm tracking-[0.12em] uppercase font-medium rounded-full hover:bg-th-ivory hover:text-th-ink transition-all duration-500">
            Créer ma tenue sur mesure
          </button>
        </div>
      </div>

      <div ref={scrollHintRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-th-ivory/40 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
        <ChevronDown size={20} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-3 border-t border-th-ivory/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-[10px] tracking-[0.3em] uppercase text-th-ivory/30 mx-8">
              Ensembles traditionnels · Bazin cousu · Tenues de cérémonie · Sur mesure · Thiès, Sénégal · {''}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
