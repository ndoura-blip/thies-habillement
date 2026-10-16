import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, MessageCircle } from 'lucide-react';
import { products, categories, formatPrice, type Product, WHATSAPP_LINK } from '@/data/products';
import { useCart } from '@/context/CartContext';

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous' ? products : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(rootRef.current?.querySelectorAll('.coll-heading') || [], { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: rootRef.current, start: 'top 70%' } });
      gsap.fromTo(rootRef.current?.querySelectorAll('.product-card') || [], { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: rootRef.current?.querySelector('.product-grid'), start: 'top 75%' } });
    }, rootRef);
    return () => ctx.revert();
  }, [activeCategory]);

  const handleAdd = (product: Product, size?: string, color?: string) => { addItem(product, size, color); };

  return (
    <section ref={rootRef} id="collections" className="relative bg-th-ivory py-24 md:py-32 px-6 md:px-12" data-section-theme="light">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <p className="coll-heading text-[10px] tracking-[0.4em] uppercase text-th-red mb-4">Chapitre II</p>
          <h2 className="coll-heading font-serif text-4xl md:text-6xl text-th-ink tracking-tight">Nos Collections</h2>
          <p className="coll-heading mt-6 text-sm md:text-base text-th-ink/50 max-w-xl mx-auto font-light leading-relaxed">
            Des tenues pour chaque occasion. Bazin cousu, ensembles traditionnels, tenues de cérémonie et modèles brodés.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase rounded-full font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-th-red text-white' : 'bg-th-ink/5 text-th-ink/60 hover:bg-th-ink/10'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product) => (<ProductCard key={product.id} product={product} onAdd={handleAdd} />))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-th-ink/40 mb-3">Vous ne trouvez pas ce que vous cherchez ? Contactez-nous directement.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-th-red text-white text-xs tracking-wider uppercase font-semibold rounded-full hover:bg-th-burgundy transition-colors">
            <MessageCircle size={16} /> Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product, size?: string, color?: string) => void }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

  const handleMouseEnter = () => {
    if (imageRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(imageRef.current, { scale: 1.06, duration: 0.8, ease: 'power3.out' });
    }
  };
  const handleMouseLeave = () => { if (imageRef.current) { gsap.to(imageRef.current, { scale: 1, duration: 0.8, ease: 'power3.out' }); } };
  const handleAddClick = () => { onAdd(product, selectedSize, selectedColor); };

  return (
    <div className="product-card group relative bg-th-white rounded-2xl overflow-hidden border border-th-ink/8 hover-lift" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="aspect-[3/4] overflow-hidden bg-th-ink/5 relative">
        <img ref={imageRef} src={product.image} alt={product.name} className="w-full h-full object-cover will-change-transform" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-th-ink/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 bg-th-white/90 backdrop-blur-md text-th-red rounded-full">{product.category}</span>
        {!product.available && <span className="absolute top-4 right-4 text-[9px] tracking-wider uppercase px-3 py-1.5 bg-th-ink/80 text-th-ivory rounded-full">Indisponible</span>}
        <button onClick={handleAddClick} disabled={!product.available}
          className="absolute bottom-4 right-4 w-12 h-12 bg-th-red text-white rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-th-burgundy shadow-lg disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Ajouter au panier">
          <Plus size={20} />
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-th-ink leading-tight">{product.name}</h3>
        <p className="text-xs text-th-ink/50 mt-2 line-clamp-2 font-light leading-relaxed">{product.description}</p>
        {product.sizes.length > 0 && (
          <div className="mt-3">
            <p className="text-[10px] uppercase tracking-wider text-th-ink/40 mb-1.5">Tailles</p>
            <div className="flex gap-1.5 flex-wrap">
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${selectedSize === size ? 'bg-th-red text-white border-th-red' : 'border-th-ink/15 text-th-ink/60 hover:border-th-red'}`}>{size}</button>
              ))}
            </div>
          </div>
        )}
        {product.colors.length > 0 && (
          <div className="mt-2">
            <p className="text-[10px] uppercase tracking-wider text-th-ink/40 mb-1.5">Couleurs</p>
            <div className="flex gap-1.5 flex-wrap">
              {product.colors.map((color) => (
                <button key={color} onClick={() => setSelectedColor(color)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${selectedColor === color ? 'bg-th-red text-white border-th-red' : 'border-th-ink/15 text-th-ink/60 hover:border-th-red'}`}>{color}</button>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-bold text-th-ink tracking-wide">{formatPrice(product.price)}</span>
        </div>
        <button onClick={handleAddClick} disabled={!product.available}
          className="w-full mt-3 py-2.5 border border-th-red/30 text-th-red text-xs tracking-[0.12em] uppercase rounded-full hover:bg-th-red hover:text-white transition-all duration-400 disabled:opacity-30 disabled:cursor-not-allowed">
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
}
