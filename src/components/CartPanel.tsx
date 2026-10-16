import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, buildWhatsAppOrderUrl } from '@/data/products';

interface CartPanelProps {
  onCheckout?: () => void;
}

export default function CartPanel({ onCheckout }: CartPanelProps) {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  const whatsappUrl = buildWhatsAppOrderUrl(items);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-th-ink/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[440px] bg-th-ivory shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-th-ink/10">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-th-ink" />
            <span className="font-serif text-lg tracking-wide text-th-ink">
              Votre Panier
            </span>
            {totalItems > 0 && (
              <span className="text-xs bg-th-red text-white font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-th-ink/5 hover:bg-th-ink/10 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={18} className="text-th-ink" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hidden">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 rounded-full bg-th-ink/5 flex items-center justify-center">
                <ShoppingBag size={32} className="text-th-ink/30" />
              </div>
              <p className="font-serif text-xl text-th-ink/60">Votre panier est vide</p>
              <p className="text-sm text-th-ink/40 max-w-[260px]">
                Découvrez nos collections et ajoutez vos tenues préférées.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 bg-th-red text-white text-xs tracking-wider uppercase rounded-full hover:bg-th-burgundy transition-colors"
              >
                Voir les collections
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-5 border-b border-th-ink/10 last:border-0"
                >
                  <div className="w-20 h-28 rounded-lg overflow-hidden bg-th-ink/5 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-th-red font-medium">
                        {item.category}
                      </p>
                      <h4 className="font-serif text-base text-th-ink mt-1 leading-tight">
                        {item.name}
                      </h4>
                      {item.selectedSize && (
                        <p className="text-xs text-th-ink/50 mt-0.5">Taille: {item.selectedSize}</p>
                      )}
                      {item.selectedColor && (
                        <p className="text-xs text-th-ink/50">Couleur: {item.selectedColor}</p>
                      )}
                      <p className="text-sm text-th-ink/60 mt-1">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-th-ink/5 rounded-full px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-th-ink hover:text-th-red transition-colors"
                          aria-label="Diminuer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-th-ink w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-th-ink hover:text-th-red transition-colors"
                          aria-label="Augmenter"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-th-ink/30 hover:text-th-red transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-th-ink/10 bg-th-white/50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-th-ink/60 tracking-wide">Sous-total</span>
              <span className="font-serif text-2xl text-th-ink">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-th-ink/40 mb-4">
              Livraison confirmée selon votre zone. Le total définitif sera communiqué par WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-th-red text-white rounded-full text-sm tracking-[0.15em] uppercase font-semibold hover:bg-th-burgundy transition-all duration-500 flex items-center justify-center gap-3 mb-2"
            >
              <MessageCircle size={18} />
              Commander sur WhatsApp
            </a>
            <button
              onClick={() => {
                closeCart();
                onCheckout?.();
              }}
              className="w-full py-3 border border-th-ink/15 text-th-ink/70 text-xs tracking-[0.15em] uppercase rounded-full hover:bg-th-ink hover:text-th-ivory transition-all duration-500"
            >
              Voir le récapitulatif
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
