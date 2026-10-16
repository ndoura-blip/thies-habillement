import { useEffect, useState } from 'react';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { WHATSAPP_LINK } from '@/data/products';

interface HeaderProps {
  activeSection: 'dark' | 'light';
}

export default function Header({ activeSection }: HeaderProps) {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = activeSection === 'light';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', target: '#hero' },
    { label: 'Collections', target: '#collections' },
    { label: 'Sur-mesure', target: '#sur-mesure' },
    { label: 'Notre univers', target: '#notre-univers' },
    { label: 'Contact', target: '#contact' },
  ];

  const handleNavClick = (target: string) => {
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = isLight ? 'text-th-ink' : 'text-th-ivory';
  const mutedColor = isLight ? 'text-th-ink/70' : 'text-th-ivory/70';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? isLight
              ? 'bg-th-ivory/80 glass-blur shadow-[0_1px_30px_rgba(0,0,0,0.06)]'
              : 'bg-th-ink/70 glass-blur'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <span
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-700 ${textColor}`}
            >
              THIÈS
            </span>
            <span
              className={`hidden sm:block text-[10px] tracking-[0.25em] uppercase font-medium transition-colors duration-700 text-th-red`}
            >
              Habillement
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className={`text-xs tracking-[0.12em] uppercase font-medium transition-all duration-300 hover:opacity-100 ${mutedColor} hover:${textColor}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 text-xs font-medium bg-th-red text-white hover:bg-th-burgundy"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle size={15} />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <button
              onClick={openCart}
              className={`relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-500 ${
                isLight
                  ? 'bg-th-ink text-th-ivory hover:bg-th-red'
                  : 'bg-th-ivory/10 text-th-ivory hover:bg-th-ivory/20 border border-th-ivory/20'
              }`}
              aria-label="Panier"
            >
              <ShoppingBag size={16} />
              <span className="text-xs tracking-wider font-medium hidden sm:inline">Panier</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-th-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden transition-colors duration-700 ${textColor}`}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            isLight ? 'bg-th-ivory' : 'bg-th-ink'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className={`font-serif text-2xl tracking-wide ${textColor}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-th-red text-white rounded-full text-sm font-medium"
          >
            <MessageCircle size={18} />
            Nous écrire sur WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
