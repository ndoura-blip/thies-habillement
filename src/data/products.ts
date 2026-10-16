export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  available: boolean;
  isPlaceholder?: boolean;
}

export const categories = [
  'Tous',
  'Ensembles traditionnels',
  'Bazin cousu',
  'Tenues de cérémonie',
  'Modèles brodés',
  'Sur mesure',
];

export const products: Product[] = [
  {
    id: 'ensemble-traditionnel-01',
    name: 'Ensemble Traditionnel Homme',
    category: 'Ensembles traditionnels',
    price: 45000,
    image: 'https://images.pexels.com/photos/35277319/pexels-photo-35277319.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Ensemble traditionnel homme, coupe soignée et tissu de qualité. Idéal pour les occasions quotidiennes et les rencontres.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Blanc', 'Bleu'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'bazin-cousu-01',
    name: 'Bazin Cousu Élégance',
    category: 'Bazin cousu',
    price: 65000,
    image: 'https://images.pexels.com/photos/39731536/pexels-photo-39731536.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Bazin cousu avec finitions soignées. Tissu bazin de qualité, coupe ajustée pour un style affirmé.",
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Lavande', 'Bordeaux', 'Noir'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'tenue-ceremonie-01',
    name: 'Tenue de Cérémonie Prestige',
    category: 'Tenues de cérémonie',
    price: 85000,
    image: 'https://images.pexels.com/photos/37227477/pexels-photo-37227477.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Tenue de cérémonie pour vos grands événements. Élégance et raffinement pour les occasions solennelles.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc', 'Or', 'Vert'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'modele-brode-01',
    name: 'Modèle Brodé Classique',
    category: 'Modèles brodés',
    price: 70000,
    image: 'https://images.pexels.com/photos/33837884/pexels-photo-33837884.png?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Modèle brodé avec motifs soignés. Les broderies apportent une touche distinctive à cette tenue élégante.",
    sizes: ['M', 'L', 'XL'],
    colors: ['Ivoire', 'Bleu nuit'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'ensemble-traditionnel-02',
    name: 'Ensemble Traditionnel Moderne',
    category: 'Ensembles traditionnels',
    price: 50000,
    image: 'https://images.pexels.com/photos/30729642/pexels-photo-30729642.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Ensemble traditionnel revisité avec une coupe moderne. Confort et style pour le quotidien comme pour les sorties.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris', 'Marron', 'Noir'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'bazin-cousu-02',
    name: 'Bazin Cousu Raffiné',
    category: 'Bazin cousu',
    price: 60000,
    image: 'https://images.pexels.com/photos/33844622/pexels-photo-33844622.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Bazin cousu dans un tissu riche et noble. Une pièce qui allie tradition sénégalaise et élégance contemporaine.",
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Bleu nuit', 'Bordeaux'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'tenue-ceremonie-02',
    name: 'Tenue de Cérémonie Royale',
    category: 'Tenues de cérémonie',
    price: 95000,
    image: 'https://images.pexels.com/photos/39043850/pexels-photo-39043850.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Tenue de cérémonie d'exception pour les événements d'envergure. Présence et distinction garanties.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Bordeaux', 'Or'],
    available: true,
    isPlaceholder: true,
  },
  {
    id: 'modele-brode-02',
    name: 'Modèle Brodé Contemporain',
    category: 'Modèles brodés',
    price: 75000,
    image: 'https://images.pexels.com/photos/35193995/pexels-photo-35193995.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    description: "Modèle brodé à l'esprit contemporain. Les motifs sont subtils, la coupe est moderne, le résultat est unique.",
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanc', 'Vert émeraude'],
    available: false,
    isPlaceholder: true,
  },
];

export const heroImages = [
  'https://images.pexels.com/photos/33363197/pexels-photo-33363197.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  'https://images.pexels.com/photos/35277319/pexels-photo-35277319.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  'https://images.pexels.com/photos/39043850/pexels-photo-39043850.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  'https://images.pexels.com/photos/37227477/pexels-photo-37227477.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  'https://images.pexels.com/photos/39731536/pexels-photo-39731536.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
  'https://images.pexels.com/photos/30729642/pexels-photo-30729642.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
];

export const craftImages = [
  {
    src: 'https://images.pexels.com/photos/6276040/pexels-photo-6276040.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Le Tissu',
    description: "Le choix du tissu est la première étape. Bazin, pagne, soie — chaque matière est sélectionnée pour son tombé et sa qualité.",
  },
  {
    src: 'https://images.pexels.com/photos/4935559/pexels-photo-4935559.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'La Coupe',
    description: "La coupe donne vie au vêtement. Précise, ajustée, elle respecte votre morphologie et sublima votre silhouette.",
  },
  {
    src: 'https://images.pexels.com/photos/11076482/pexels-photo-11076482.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Les Broderies',
    description: "Les broderies apportent le caractère. Motifs discrets ou couvrants, elles font la différence entre un beau vêtement et une pièce qui se remarque.",
  },
  {
    src: 'https://images.pexels.com/photos/7498815/pexels-photo-7498815.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Les Finitions',
    description: "Les finitions révèlent le savoir-faire. Coutures nettes, ourlets soignés, détails invisibles — c'est là que se reconnaît le travail bien fait.",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
};

export const WHATSAPP_NUMBER = '221776172203';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppOrderUrl(
  items: { name: string; quantity: number; price: number; selectedSize?: string; selectedColor?: string }[],
  customerInfo?: { name?: string; phone?: string; address?: string; city?: string; country?: string }
): string {
  let msg = 'Bonjour THIÈS HABILLEMENT,\n\nJe souhaite commander :\n\n';
  items.forEach((item, i) => {
    msg += `${i + 1}. ${item.name}`;
    if (item.selectedSize) msg += ` — Taille: ${item.selectedSize}`;
    if (item.selectedColor) msg += ` — Couleur: ${item.selectedColor}`;
    msg += ` — Qté: ${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
  });

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  msg += `\nTotal: ${formatPrice(total)}\n`;

  if (customerInfo) {
    if (customerInfo.name) msg += `\nNom: ${customerInfo.name}`;
    if (customerInfo.phone) msg += `\nTéléphone: ${customerInfo.phone}`;
    if (customerInfo.address) msg += `\nAdresse: ${customerInfo.address}`;
    if (customerInfo.city) msg += `\nVille: ${customerInfo.city}`;
    if (customerInfo.country) msg += `\nPays: ${customerInfo.country}`;
  }

  msg += '\n\nMerci de me confirmer la disponibilité et les modalités de livraison.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildWhatsAppBespokeUrl(data: {
  name: string;
  phone: string;
  outfitType: string;
  model: string;
  color: string;
  size: string;
  date: string;
  budget: string;
  message: string;
}): string {
  let msg = 'Bonjour THIÈS HABILLEMENT,\n\nJe souhaite une demande de devis sur mesure :\n\n';
  msg += `Nom: ${data.name}\n`;
  msg += `Téléphone / WhatsApp: ${data.phone}\n`;
  msg += `Type de tenue: ${data.outfitType}\n`;
  if (data.model) msg += `Modèle / style souhaité: ${data.model}\n`;
  if (data.color) msg += `Couleur préférée: ${data.color}\n`;
  if (data.size) msg += `Taille / mesures: ${data.size}\n`;
  if (data.date) msg += `Date souhaitée: ${data.date}\n`;
  if (data.budget) msg += `Budget indicatif: ${data.budget} FCFA\n`;
  if (data.message) msg += `Message: ${data.message}\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
