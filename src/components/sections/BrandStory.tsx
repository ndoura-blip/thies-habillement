import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(rootRef.current?.querySelectorAll('.story-word') || [], { opacity: 0.08, y: 15 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current?.querySelector('.story-text'), start: 'top 70%', end: 'bottom 60%', scrub: 2 } });
      gsap.fromTo(rootRef.current?.querySelectorAll('.story-block') || [], { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: rootRef.current?.querySelector('.story-blocks'), start: 'top 75%' } });
      gsap.fromTo(rootRef.current?.querySelectorAll('.decor-line') || [], { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: rootRef.current, start: 'top 60%' } });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const storyText = "Le style se remarque. Le savoir-faire se ressent. Chez THIÈS HABILLEMENT, nous croyons qu'un vêtement bien choisi raconte une histoire — la vôtre.";
  const handleScrollTo = (target: string) => { document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <section ref={rootRef} id="notre-univers" className="relative bg-th-ivory py-32 md:py-48 px-6 md:px-12 overflow-hidden" data-section-theme="light">
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-th-red mb-4 font-medium">Chapitre III</p>
          <div className="decor-line w-24 h-px bg-th-ink/30 mx-auto origin-center mb-4" />
          <p className="text-xs tracking-[0.3em] uppercase text-th-ink/50 font-light">Notre Univers</p>
        </div>
        <div className="story-text max-w-4xl mx-auto text-center mb-20">
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-th-ink leading-[1.4] tracking-tight">
            {storyText.split(' ').map((word, i) => (<span key={i} className="story-word inline-block mr-[0.25em]">{word}</span>))}
          </p>
        </div>
        <div className="story-blocks grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {[
            { num: '01', title: 'Le Style', desc: "Un vêtement doit vous ressembler. Nous vous aidons à trouver la tenue qui correspond à votre personnalité et à l'occasion." },
            { num: '02', title: 'Le Détail', desc: "Les détails font la différence. Coupe, finitions, tombé du tissu — chaque élément compte pour une tenue réussie." },
            { num: '03', title: 'La Confiance', desc: "Bien habillé, on se sent bien. Nos tenues sont pensées pour vous donner assurance et présence en toutes circonstances." },
          ].map((val) => (
            <div key={val.num} className="story-block text-center md:text-left">
              <span className="font-serif text-5xl text-th-red/20 block mb-4">{val.num}</span>
              <h3 className="font-serif text-xl md:text-2xl text-th-ink mb-4 tracking-tight">{val.title}</h3>
              <p className="text-sm text-th-ink/60 leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button onClick={() => handleScrollTo('#savoir-faire')} className="px-8 py-4 bg-th-red text-white text-sm tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-th-burgundy transition-all duration-500">
            Découvrir notre univers
          </button>
        </div>
      </div>
    </section>
  );
}
