import PaymentPanel from '../components/PaymentPanel';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShoppingBag, Minus, Plus, Trash2, Gift, Truck, CreditCard, QrCode, Wallet, LockKeyhole } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart, demoPrice, money } from '../components/CartContext';

const methods = [
  { id: 'vnpay', name: 'VNPAY', detail: 'Quét QR qua ứng dụng ngân hàng', icon: QrCode },
  { id: 'momo', name: 'Ví MoMo', detail: 'Thanh toán bằng ví điện tử MoMo', icon: Wallet },
  { id: 'stripe', name: 'Thẻ quốc tế', detail: 'Visa, Mastercard qua Stripe', icon: CreditCard },
];

export default function Checkout({ cartOnly = false }: { cartOnly?: boolean }) {
  const { items, count, update } = useCart();
  const [method, setMethod] = useState('vnpay');
  const [gift, setGift] = useState(false);
  const [review, setReview] = useState(false);

  const [details, setDetails] = useState({ name: '', phone: '', email: '', city: '', ward: '', address: '', message: '', note: '' });
  const subtotal = count * demoPrice;
  const shipping = count ? 30000 : 0;

  const submit = (event: FormEvent) => { event.preventDefault(); setReview(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const fields = [
    { key: 'name', label: 'Họ và tên', placeholder: 'Tên người nhận', auto: 'name' },
    { key: 'phone', label: 'Số điện thoại', placeholder: 'Số điện thoại nhận hàng', auto: 'tel' },
    { key: 'email', label: 'Email', placeholder: 'Email nhận thông tin đơn hàng', auto: 'email' },
    { key: 'city', label: 'Tỉnh / Thành phố', placeholder: 'Ví dụ: Thành phố Huế', auto: 'address-level1' },
    { key: 'ward', label: 'Phường / Xã', placeholder: 'Phường / Xã nhận hàng', auto: 'address-level2' },
    { key: 'address', label: 'Địa chỉ cụ thể', placeholder: 'Số nhà, tên đường…', auto: 'street-address' },
  ] as const;

  return <div className={`checkout-page ${cartOnly ? "cart-page" : ""}`}>
    {!cartOnly && <Link to="/gio-hang" className="checkout-back"><ArrowLeft size={16} />Quay lại giỏ hàng</Link>}
    <header className="checkout-heading"><p className="checkout-eyebrow">TAM KHANG · MÓN QUÀ TỪ TÂM</p><h1>{cartOnly ? 'Giỏ hàng của bạn' : review ? 'Hoàn tất món quà của bạn' : 'Gửi trao một lời chúc'}</h1><p>{cartOnly ? 'Một chút ngọt lành, gửi đến người bạn thương.' : 'Điền thông tin để món quà được gửi đến đúng người, đúng nơi.'}</p></header>
    {!count ? <section className="checkout-empty"><div className="cart-empty-message"><ShoppingBag size={22} strokeWidth={1.5} /><div><h2>Bạn chưa có sản phẩm nào trong giỏ</h2><p>Bạn có thể thêm bánh từ mục Bộ sưu tập.</p></div></div></section> :
    <div className="checkout-grid">
      <div>
        {cartOnly ? <section className="checkout-card"><h2><ShoppingBag size={21} />Món quà đã chọn <small>{count} hộp</small></h2>{items.map(item => {
          const p = PRODUCTS.find(p => p.slug === item.slug)!;
          return <article className="cart-product" key={item.slug}><img src={p.image} alt={`Hộp ${p.name}`} /><div className="cart-product-info"><h3>Hộp bánh {p.name}</h3><p>{p.meaning}</p><strong>{money(demoPrice)}</strong><div className="cart-quantity"><button aria-label={`Giảm số lượng ${p.name}`} disabled={item.quantity <= 1} onClick={() => update(item.slug, item.quantity - 1)}><Minus size={14} /></button><span aria-label={`Số lượng ${p.name}`}>{item.quantity}</span><button aria-label={`Tăng số lượng ${p.name}`} disabled={item.quantity >= 99} onClick={() => update(item.slug, item.quantity + 1)}><Plus size={14} /></button></div></div><button className="cart-remove" aria-label={`Xoá hộp ${p.name}`} onClick={() => update(item.slug, 0)}><Trash2 size={17} /></button></article>;
        })}<Link className="checkout-back" to="/bo-suu-tap"><Plus size={16} />Thêm một món quà</Link></section> :
        review ? <PaymentPanel method={method} amount={subtotal + shipping} name={details.name} address={`${details.address}, ${details.ward}, ${details.city}`} onBack={() => setReview(false)} /> :
        <form id="checkout-form" onSubmit={submit}>
          <section className="checkout-card"><h2><Truck size={22} />Thông tin giao hàng</h2><div className="checkout-fields">{fields.map(f => <label key={f.key} className={f.key === 'address' || f.key === 'email' ? 'checkout-full' : ''}>{f.label} <span>*</span><input required maxLength={f.key === 'address' ? 250 : 100} minLength={f.key === 'phone' ? 9 : 2} pattern={f.key === 'phone' ? '[+0-9 ()-]{9,20}' : f.key === 'email' ? undefined : '.*\\S.*'} autoComplete={f.auto} type={f.key === 'email' ? 'email' : f.key === 'phone' ? 'tel' : 'text'} placeholder={f.placeholder} value={details[f.key]} onChange={e => setDetails({ ...details, [f.key]: e.target.value })} /></label>)}</div><label className="checkout-note">Ghi chú giao hàng <span>(không bắt buộc)</span><textarea rows={2} maxLength={500} placeholder="Điều bạn muốn Tam Khang lưu ý…" value={details.note} onChange={e => setDetails({ ...details, note: e.target.value })} /></label></section>
          <section className="checkout-card"><label className="checkout-gift"><Gift size={23} /><span><strong>Gửi thêm một lời chúc</strong><small>Viết lời nhắn dành riêng cho người nhận</small></span><input type="checkbox" checked={gift} onChange={e => setGift(e.target.checked)} /></label>{gift && <label className="checkout-note">Lời nhắn trên thiệp<textarea maxLength={250} rows={3} placeholder="Chúc bạn bình an, đủ đầy và nhiều niềm vui…" value={details.message} onChange={e => setDetails({ ...details, message: e.target.value })} /></label>}</section>
          <section className="checkout-card"><h2><CreditCard size={22} />Phương thức thanh toán</h2><p className="checkout-muted">Thanh toán trực tuyến trước khi giao hàng.</p><fieldset className="payment-options"><legend className="sr-only">Chọn phương thức thanh toán</legend>{methods.map(m => <label key={m.id} className={`payment-option ${method === m.id ? 'is-selected' : ''}`}><input type="radio" name="payment" value={m.id} checked={method === m.id} onChange={() => setMethod(m.id)} /><span className={`payment-icon ${m.id}`}><m.icon size={24} /></span><span><strong>{m.name}</strong><small>{m.detail}</small></span>{m.id === 'vnpay' && <em>Ưu tiên</em>}</label>)}</fieldset><p className="payment-hint"><LockKeyhole size={16} />Thông tin thẻ được nhập tại cổng thanh toán.</p></section>
        </form>}
      </div>
      <aside className="checkout-summary"><p className="checkout-eyebrow">GÓI GHÉM YÊU THƯƠNG</p><h2>{cartOnly ? 'Tóm tắt thanh toán' : 'Đơn hàng của bạn'}{!cartOnly && <span> ({count})</span>}</h2>{!cartOnly && items.map(item => { const p = PRODUCTS.find(p => p.slug === item.slug)!; return <div className="summary-product" key={p.slug}><div><img src={p.image} alt={`Hộp ${p.name}`} /><span>{item.quantity}</span></div><p><strong>Hộp {p.name}</strong><small>Hộp 3 bánh · {p.meaning}</small></p><b>{money(demoPrice * item.quantity)}</b></div>; })}<div className="summary-totals"><p><span>Tạm tính</span><b>{money(subtotal)}</b></p><p><span>Phí giao hàng</span><b>{money(shipping)}</b></p><p className="summary-total"><span>Tổng cộng</span><b>{money(subtotal + shipping)}</b></p><small>Đơn vị thanh toán: VND</small></div>{cartOnly ? <Link className="checkout-primary" to="/thanh-toan">Tiến hành thanh toán<ArrowRight size={18} /></Link> : !review && <button className="checkout-primary" type="submit" form="checkout-form">Xác nhận & thanh toán<ArrowRight size={18} /></button>}<p className="summary-footer"><Gift size={18} />Gói trọn lời chúc Phúc · Lộc · Thọ</p></aside>
    </div>}
  </div>;
}
