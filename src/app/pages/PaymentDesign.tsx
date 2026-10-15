import { useState } from 'react';
import PaymentPanel, { PaymentView } from '../components/PaymentPanel';

// An isolated design review surface. These states do not mutate orders or carts.
export default function PaymentDesign() {
  const [view, setView] = useState<PaymentView>('pending');
  const [method, setMethod] = useState('vnpay');
  const states: { id: PaymentView; label: string }[] = [{ id: 'pending', label: 'Chờ thanh toán' }, { id: 'success', label: 'Thành công' }, { id: 'failed', label: 'Thất bại' }, { id: 'expired', label: 'Hết hạn' }];
  return <div className="payment-design"><header><h1>Các màn hình thanh toán</h1><p>Bản thiết kế giao diện, không tạo giao dịch.</p></header><div className="payment-design-controls"><label>Phương thức<select value={method} onChange={e => setMethod(e.target.value)}><option value="vnpay">VNPAY</option><option value="momo">MoMo</option><option value="stripe">Stripe</option></select></label><div>{states.map(s => <button key={s.id} aria-pressed={view === s.id} onClick={() => setView(s.id)}>{s.label}</button>)}</div></div><PaymentPanel key={`${view}-${method}`} initialView={view} method={method} amount={330000} name="Nguyễn An" address="12 Kim Long, Phường Kim Long, Huế" onBack={() => setView('pending')} /></div>;
}
