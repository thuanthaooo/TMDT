import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { PRODUCTS } from '../data/products';

type Item = { slug: string; quantity: number };
const CartContext = createContext<{ items: Item[]; count: number; add: (slug: string) => void; update: (slug: string, quantity: number) => void }>({ items: [], count: 0, add: () => {}, update: () => {} });
export const demoPrice = 150000;
export const money = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      const data: unknown = JSON.parse(localStorage.getItem('tam-khang-cart') || '[]');
      if (!Array.isArray(data)) return [];
      return PRODUCTS.flatMap(p => {
        const item = data.find(i => i && i.slug === p.slug && Number.isInteger(i.quantity) && i.quantity > 0);
        return item ? [{ slug: p.slug, quantity: Math.min(item.quantity, 99) }] : [];
      });
    } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem('tam-khang-cart', JSON.stringify(items)); } catch { /* Cart remains usable without storage. */ } }, [items]);
  const add = (slug: string) => {
    if (!PRODUCTS.some(p => p.slug === slug)) return;
    setItems(previous => previous.some(i => i.slug === slug) ? previous.map(i => i.slug === slug ? { ...i, quantity: Math.min(99, i.quantity + 1) } : i) : [...previous, { slug, quantity: 1 }]);
  };
  const update = (slug: string, quantity: number) => {
    if (!Number.isFinite(quantity)) return;
    setItems(previous => quantity <= 0 ? previous.filter(i => i.slug !== slug) : previous.map(i => i.slug === slug ? { ...i, quantity: Math.min(99, Math.floor(quantity)) } : i));
  };
  return <CartContext.Provider value={{ items, count: items.reduce((sum, i) => sum + i.quantity, 0), add, update }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
