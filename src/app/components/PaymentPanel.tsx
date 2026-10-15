import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, CreditCard, Loader2, QrCode, RefreshCw, ShieldCheck, X } from 'lucide-react';
import { money } from './CartContext';

export type PaymentView = 'pending' | 'checking' | 'success' | 'failed' | 'expired';
type Props = { method: string; amount: number; name: string; address: string; onBack: () => void; initialView?: PaymentView };

export default function PaymentPanel({ method, amount, name, address, onBack, initialView = 'pending' }: Props) {
  const [view, setView] = useState<PaymentView>(initialView);
  const [seconds, setSeconds] = useState(900);
  const [checked, setChecked] = useState(false);
  const provider = method === 'stripe' ? 'Stripe' : method === 'momo' ? 'MoMo' : 'VNPAY';
  // Presentation only: never mark an order paid from a client-side interaction.
  // The success view is only mounted by the separate design-preview page.
  useEffect(() => {
    if (view !== 'pending') return;
    const expiresAt = Date.now() + seconds * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((expiresAt - Date.now()) / 1000));
      setSeconds(remaining);
      if (!remaining) setView('expired');
    }, 1000);
    return () => window.clearInterval(timer);
    // Start a new countdown only when the displayed payment state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);
  useEffect(() => {
    if (view !== 'checking') return;
    const timer = window.setTimeout(() => { setChecked(true); setView('pending'); }, 1200);
    return () => window.clearTimeout(timer);
  }, [view]);

  if (view === 'success') return <section className="checkout-card payment-result"><span className="payment-result-icon success"><Check size={34} /></span><p className="checkout-eyebrow">CẢM ƠN BẠN ĐÃ CHỌN TAM KHANG</p><h2>Thanh toán thành công</h2><p>Món quà của bạn sẽ được chuẩn bị bằng tất cả sự chu đáo.</p><dl className="payment-receipt"><div><dt>Đã thanh toán</dt><dd>{money(amount)}</dd></div><div><dt>Phương thức</dt><dd>{provider}</dd></div><div><dt>Người nhận</dt><dd>{name}</dd></div><div><dt>Giao đến</dt><dd>{address}</dd></div></dl><Link to="/bo-suu-tap" className="checkout-primary">Tiếp tục khám phá<ArrowRight size={18} /></Link></section>;
  if (view === 'failed' || view === 'expired') return <section className="checkout-card payment-result"><span className="payment-result-icon failed">{view === 'expired' ? <Clock size={32} /> : <X size={32} />}</span><h2>{view === 'expired' ? 'Phiên thanh toán đã hết hạn' : 'Thanh toán chưa hoàn tất'}</h2><p>{view === 'expired' ? 'Bạn có thể tạo phiên mới để tiếp tục. Những món quà đã chọn vẫn được giữ trong giỏ.' : 'Giao dịch chưa thành công. Vui lòng thử lại hoặc chọn phương thức thanh toán khác.'}</p><button className="checkout-primary" onClick={() => { setSeconds(900); setChecked(false); setView('pending'); }}><RefreshCw size={17} />Thử thanh toán lại</button><button className="checkout-secondary" onClick={onBack}>Chọn phương thức khác</button></section>;

  return <section className="checkout-card payment-session">
    <div className="payment-provider"><span className={method}>{provider}</span><span><ShieldCheck size={15} />Thanh toán trực tuyến</span></div>
    <h2>{method === 'stripe' ? 'Thanh toán bằng thẻ quốc tế' : 'Quét mã để gửi trao món quà'}</h2>
    <p className="payment-intro">{method === 'stripe' ? 'Tiếp tục đến trang thanh toán để nhập thông tin thẻ và xác thực giao dịch.' : `Mở ${method === 'momo' ? 'ví MoMo' : 'ứng dụng ngân hàng'}, chọn quét QR và kiểm tra số tiền trước khi thanh toán.`}</p>
    <div className="payment-amount"><small>Số tiền thanh toán</small><strong>{money(amount)}</strong></div>
    {method === 'stripe' ? <div className="payment-card-art"><CreditCard size={42} strokeWidth={1} /><span>VISA <i>Mastercard</i></span><small>Thông tin thẻ được nhập tại Stripe</small></div> : <div className="payment-qr" aria-label="Vị trí hiển thị mã QR thanh toán"><QrCode size={176} strokeWidth={.85} /><span>{provider}</span></div>}
    <div className="payment-time"><Clock size={15} />Phiên thanh toán còn <b>{Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}</b></div>
    <p className="payment-live" role="status"><Loader2 size={17} className={view === 'checking' ? 'animate-spin' : ''} />{view === 'checking' ? 'Đang kiểm tra giao dịch…' : checked ? 'Chưa nhận được xác nhận thanh toán' : 'Chờ xác nhận thanh toán'}</p>
    {checked && <p className="payment-intro">Nếu bạn đã thanh toán, vui lòng chờ xác nhận trước khi thử lại.</p>}
    <button className="checkout-primary" disabled={view === 'checking'} onClick={() => setView('checking')}>{method === 'stripe' ? 'Tiếp tục đến Stripe' : 'Kiểm tra trạng thái'}<ArrowRight size={17} /></button>
    <button className="checkout-secondary" onClick={onBack}>Đổi phương thức thanh toán</button>
  </section>;
}
