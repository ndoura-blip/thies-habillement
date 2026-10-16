import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-th-ink border-t border-th-ivory/10 px-6 md:px-12 py-16" data-section-theme="dark">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-th-ivory tracking-wide mb-2">
              THIÈS HABILLEMENT
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-th-red mb-4 font-medium">
              Partenaire des grandes marques
            </p>
            <p className="text-sm text-th-ivory/40 font-light leading-relaxed max-w-md">
              Boutique de mode à Thiès. Ensembles traditionnels homme, bazin cousu, tenues de cérémonie
              et confection sur mesure. Pour le Sénégal et la diaspora.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-th-red mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+221776172203" className="flex items-center gap-3 text-sm text-th-ivory/50 hover:text-th-ivory transition-colors">
                <Phone size={15} className="text-th-red" />
                +221 77 617 22 03
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-th-ivory/50 hover:text-th-ivory transition-colors">
                <MessageCircle size={15} className="text-th-red" />
                WhatsApp
              </a>
              <div className="flex items-start gap-3 text-sm text-th-ivory/50">
                <MapPin size={15} className="text-th-red mt-0.5" />
                Nguinth, Thiès, face École ACAPES, 21111, Sénégal
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-th-red mb-4">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'Collections', target: '#collections' },
                { label: 'Sur-mesure', target: '#sur-mesure' },
                { label: 'Notre univers', target: '#notre-univers' },
                { label: 'Contact', target: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.target}
                  className="block text-sm text-th-ivory/50 hover:text-th-ivory transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-th-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-th-ivory/30">
            © 2026 THIÈS HABILLEMENT — Partenaire des grandes marques. Tous droits réservés.
          </p>
          <p className="text-xs text-th-ivory/30">
            Nguinth, Thiès, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}
