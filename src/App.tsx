import { useEffect, useRef, useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import CartPanel from '@/components/CartPanel';
import Hero from '@/components/sections/Hero';
import Collections from '@/components/sections/Collections';
import BrandStory from '@/components/sections/BrandStory';
import CraftDetails from '@/components/sections/CraftDetails';
import BespokeTailoring from '@/components/sections/BespokeTailoring';
import TrustContact from '@/components/sections/TrustContact';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

function AppContent() {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-theme]');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-section-theme');
            if (theme === 'light' || theme === 'dark') {
              setActiveTheme(theme);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach((sec) => observerRef.current?.observe(sec));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleCheckoutScroll = () => {
    document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-th-ink">
      <Header activeSection={activeTheme} />
      <main>
        <Hero />
        <Collections />
        <BrandStory />
        <CraftDetails />
        <BespokeTailoring />
        <TrustContact />
        <FinalCTA />
      </main>
      <Footer />
      <CartPanel onCheckout={handleCheckoutScroll} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
