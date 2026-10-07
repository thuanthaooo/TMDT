import { useState } from 'react';
import { Copy, MessageCircle, CheckCircle } from 'lucide-react';
import { SITE } from '../data/site';
import Pending from './Pending';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    date: '',
    address: '',
    message: '',
    note: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9+]{9,15}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Số điện thoại không hợp lệ';
    if (!formData.product.trim()) newErrors.product = 'Vui lòng chọn sản phẩm';
    if (!formData.quantity.trim()) newErrors.quantity = 'Vui lòng nhập số lượng';
    if (!formData.date.trim()) newErrors.date = 'Vui lòng chọn ngày nhận';
    if (!formData.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ nhận';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const msg = `*ĐẶT HÀNG TAM KHANG*
- Họ tên: ${formData.name}
- SĐT: ${formData.phone}
- Sản phẩm: ${formData.product}
- Số lượng: ${formData.quantity}
- Ngày nhận: ${formData.date}
- Địa chỉ: ${formData.address}
- Lời nhắn thiệp: ${formData.message || 'Không có'}
- Ghi chú: ${formData.note || 'Không có'}`;
      setSubmittedMessage(msg);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    if (submittedMessage) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (submittedMessage) {
    return (
      <div className="bg-kem-nhat rounded-2xl p-6 sm:p-8 border border-[#E6D5AE] animate-in fade-in slide-in-from-bottom-4">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="text-xanh" size={24} />
          <h3 className="font-heading text-2xl text-nau-dam">Thông tin đã sẵn sàng</h3>
        </div>
        <p className="text-nau mb-6 text-[15px]">Vui lòng sao chép nội dung bên dưới và gửi cho chúng tôi qua Zalo để hoàn tất đặt hàng.</p>
        
        <div className="bg-white p-4 rounded-xl text-nau-dam whitespace-pre-wrap text-[14px] font-mono border border-gray-200 mb-6">
          {submittedMessage}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-nau-dam text-kem-nhat font-medium hover:bg-black transition-colors"
          >
            <Copy size={18} />
            {copied ? 'Đã sao chép' : 'Sao chép nội dung'}
          </button>
          {SITE.zalo ? (
            <a 
              href={SITE.zalo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium hover:bg-gray-50 transition-colors"
            >
              <MessageCircle size={18} className="text-[#0068FF]" />
              Gửi qua Zalo
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium opacity-50">
              <MessageCircle size={18} />
              Gửi qua Zalo <Pending />
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setSubmittedMessage(null)}
          className="mt-6 text-sm text-nau underline hover:text-do w-full text-center"
        >
          Sửa lại thông tin
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Họ tên *</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.name ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all`}
          />
          {errors.name && <p className="text-do text-xs mt-1.5">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Số điện thoại *</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.phone ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all`}
          />
          {errors.phone && <p className="text-do text-xs mt-1.5">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Sản phẩm quan tâm *</label>
          <select 
            value={formData.product}
            onChange={(e) => setFormData({...formData, product: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.product ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all text-nau-dam`}
          >
            <option value="">Chọn sản phẩm</option>
            <option value="Hộp Phúc">Hộp Phúc</option>
            <option value="Hộp Lộc">Hộp Lộc</option>
            <option value="Hộp Thọ">Hộp Thọ</option>
            <option value="Bộ ba Phúc Lộc Thọ">Bộ ba Phúc Lộc Thọ</option>
            <option value="Quà tặng doanh nghiệp">Quà tặng doanh nghiệp (số lượng lớn)</option>
          </select>
          {errors.product && <p className="text-do text-xs mt-1.5">{errors.product}</p>}
        </div>

        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Số lượng *</label>
          <input 
            type="number" 
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.quantity ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all`}
          />
          {errors.quantity && <p className="text-do text-xs mt-1.5">{errors.quantity}</p>}
        </div>

        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Ngày cần nhận *</label>
          <input 
            type="date" 
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.date ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all text-nau-dam`}
          />
          {errors.date && <p className="text-do text-xs mt-1.5">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Địa chỉ nhận hàng *</label>
          <input 
            type="text" 
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            placeholder="Số nhà, đường, quận, thành phố"
            className={`w-full px-4 py-2.5 rounded-xl border ${errors.address ? 'border-do bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} outline-none focus:ring-2 focus:ring-do/20 transition-all`}
          />
          {errors.address && <p className="text-do text-xs mt-1.5">{errors.address}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Lời nhắn in trên thiệp</label>
          <textarea 
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="VD: Chúc mừng năm mới, vạn sự như ý..."
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all resize-none"
          ></textarea>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Ghi chú thêm</label>
          <textarea 
            rows={2}
            value={formData.note}
            onChange={(e) => setFormData({...formData, note: e.target.value})}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button 
          type="submit"
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-do text-white font-medium hover:bg-red-800 transition-colors"
        >
          Hoàn tất biểu mẫu
        </button>
      </div>
    </form>
  );
}
