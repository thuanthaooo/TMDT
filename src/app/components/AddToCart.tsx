import { Minus, Plus } from 'lucide-react';
import { useCart } from './CartContext';

export default function AddToCart({ slug, name, accent }: { slug: string; name: string; accent: string }) {
  const { items, add, update } = useCart();
  const quantity = items.find(item => item.slug === slug)?.quantity || 0;
  return quantity ? (
    <div className="inline-flex items-center justify-between rounded-full border-2 text-nau-dam min-w-[168px]" style={{ borderColor: accent }} role="group" aria-label={`Số lượng hộp ${name}`}>
      <button type="button" className="p-3 rounded-full hover:bg-kem-nhat" aria-label={`Giảm số lượng ${name}`} onClick={() => update(slug, quantity - 1)}><Minus size={18} /></button>
      <span className="px-4 font-medium tabular-nums" aria-live="polite" aria-atomic="true">{quantity}</span>
      <button type="button" className="p-3 rounded-full hover:bg-kem-nhat disabled:opacity-40" aria-label={`Tăng số lượng ${name}`} disabled={quantity >= 99} onClick={() => add(slug)}><Plus size={18} /></button>
    </div>
  ) : (
    <button type="button" onClick={() => add(slug)} className="inline-flex justify-center items-center px-6 py-2.5 rounded-full border-2 text-nau-dam font-medium hover:bg-kem-nhat transition-colors" style={{ borderColor: accent }}>Thêm vào giỏ</button>
  );
}
