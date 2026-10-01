export const products = [
  {
    id: 1,
    name: 'Ribbed Quarter-Zip Knit',
    category: 'men',
    price: 85000,
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
    description: 'A refined knit built for smart casual layering and all-day comfort.'
  },
  {
    id: 2,
    name: 'Structured Oxford Shirt',
    category: 'men',
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp tailoring and a polished finish for elevated everyday workwear.'
  },
  {
    id: 3,
    name: 'Pleated Smart Chinos',
    category: 'men',
    price: 65000,
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
    description: 'Tailored pleats, breathable fabric, and a sharp silhouette for business casual styling.'
  },
  {
    id: 4,
    name: 'Dark Leather Loafers',
    category: 'accessories',
    price: 120000,
    image:
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
    description: 'A signature leather loafer that balances understated luxury with everyday versatility.'
  },
  {
    id: 5,
    name: 'Tailored Double Blazer',
    category: 'women',
    price: 140000,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    description: 'A statement blazer with strong lines and precise tailoring for refined dressing.'
  },
  {
    id: 6,
    name: 'Fine Cashmere Crewneck',
    category: 'women',
    price: 95000,
    image:
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80',
    description: 'Ultra-soft cashmere knit with effortless polish and warm, elevated texture.'
  },
  {
    id: 7,
    name: 'Handcrafted Leather Belt',
    category: 'accessories',
    price: 35000,
    image:
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80',
    description: 'Minimal detailing and premium leather craftsmanship for a clean, classic finish.'
  },
  {
    id: 8,
    name: 'Silk Knit Business Tie',
    category: 'accessories',
    price: 25000,
    image:
      'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=600&q=80',
    description: 'A soft-touch silk tie with contemporary texture and timeless office appeal.'
  }
];

export const featuredProducts = products.slice(0, 4);

export const formatPrice = (price) => `₦${Number(price).toLocaleString()}`;
