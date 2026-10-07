import { useState } from 'react';
import { Phone, MapPin, Clock, Gift, BookOpen, Wheat, Stamp, Flame, Coffee, CheckCircle, Copy, MessageCircle } from 'lucide-react';
import { WORKSHOP } from '../data/workshop';
import { SITE } from '../data/site';
import Pending from '../components/Pending';

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Wheat, Stamp, Flame, Coffee
};

export default function Workshop() {
  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', people: '', note: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    if (!formData.date.trim()) newErrors.date = 'Vui lòng chọn ngày';
    if (!formData.people.trim()) newErrors.people = 'Vui lòng nhập số người';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const msg = `*ĐĂNG KÝ WORKSHOP TAM KHANG*
- Họ tên: ${formData.name}
- SĐT: ${formData.phone}
- Ngày mong muốn: ${formData.date}
- Số người: ${formData.people}
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

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam mb-4">{WORKSHOP.title}</h1>
        <p className="text-lg text-nau mb-8">{WORKSHOP.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 bg-nau-dam text-kem-nhat rounded-full px-6 py-2.5 font-medium hover:bg-black transition-colors">
            <Phone size={18} /> Gọi đăng ký
          </a>
          <button onClick={() => document.getElementById('dang-ky-workshop')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-transparent border-2 border-nau-dam text-nau-dam rounded-full px-6 py-2.5 font-medium hover:bg-kem-nhat transition-colors">
            Gửi yêu cầu đăng ký
          </button>
        </div>
        
        {/* TODO: replace with workshop photo */}
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden relative shadow-sm">
          <img src="/assets/images/banh-phuc-loc-tho.webp" alt="Workshop Tam Khang" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Fact tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <MapPin size={32} className="text-vang mb-4" />
          <h3 className="font-semibold text-nau-dam mb-2">Địa điểm</h3>
          <p className="text-[14px] text-nau">{WORKSHOP.location}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <Clock size={32} className="text-vang mb-4" />
          <h3 className="font-semibold text-nau-dam mb-2">Thời lượng</h3>
          <p className="text-[14px] text-nau">{WORKSHOP.duration}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <Gift size={32} className="text-vang mb-4" />
          <h3 className="font-semibold text-nau-dam mb-2">Mang về</h3>
          <p className="text-[14px] text-nau">01 hộp quà do chính tay bạn tạo tác</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Timeline */}
        <div>
          <h2 className="font-heading text-3xl text-nau-dam mb-8">Quy trình tham gia</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-vang/30">
            {WORKSHOP.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-kem bg-white text-vang shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-kem-nhat p-4 rounded-xl border border-vang/20 ml-auto md:ml-0 md:group-even:mr-auto shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-do bg-white px-2 py-0.5 rounded-full">Bước {index + 1}</span>
                    </div>
                    <p className="text-[15px] text-nau-dam">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info & Form */}
        <div className="space-y-12">
          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Thành phẩm mang về</h2>
            <div className="bg-white p-6 rounded-2xl border border-kem shadow-sm text-nau leading-relaxed">
              {WORKSHOP.takeaway}
              <div className="mt-4">
                <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-[13px] font-medium border border-green-200">
                  <CheckCircle size={14} className="mr-1.5" /> Kèm chứng nhận trải nghiệm văn hóa
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Thông tin đăng ký</h2>
            <div className="bg-white rounded-2xl border border-kem overflow-hidden">
              <div className="grid grid-cols-3 border-b border-kem p-4">
                <span className="text-nau text-[14px]">Lịch các ca</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.schedule || <Pending />}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-kem p-4 bg-gray-50">
                <span className="text-nau text-[14px]">Giá</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.price || <Pending />}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-kem p-4">
                <span className="text-nau text-[14px]">Số người mỗi ca</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.capacity || <Pending />}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-kem p-4 bg-gray-50">
                <span className="text-nau text-[14px]">Độ tuổi tham gia</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.minAge || <Pending />}</span>
              </div>
              <div className="grid grid-cols-3 border-b border-kem p-4">
                <span className="text-nau text-[14px]">Cách đăng ký</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.booking || <Pending />}</span>
              </div>
              <div className="grid grid-cols-3 p-4 bg-gray-50">
                <span className="text-nau text-[14px]">Địa chỉ cụ thể</span>
                <span className="col-span-2 font-medium text-nau-dam">{WORKSHOP.exactAddress || <Pending />}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="dang-ky-workshop" className="scroll-mt-32 max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm">
        <h2 className="font-heading text-3xl text-nau-dam mb-6 text-center">Gửi yêu cầu đăng ký</h2>
        
        {submittedMessage ? (
          <div className="bg-kem-nhat rounded-2xl p-6 border border-[#E6D5AE] text-center">
            <CheckCircle className="text-xanh mx-auto mb-4" size={32} />
            <h3 className="font-heading text-2xl text-nau-dam mb-2">Đã tạo nội dung tin nhắn</h3>
            <p className="text-nau mb-6 text-[14px]">Vui lòng sao chép và gửi cho chúng tôi qua Zalo hoặc gọi trực tiếp.</p>
            
            <div className="flex flex-col gap-3">
              <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-nau-dam text-kem-nhat font-medium hover:bg-black transition-colors">
                <Copy size={18} /> {copied ? 'Đã sao chép' : 'Sao chép nội dung'}
              </button>
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium hover:bg-gray-50 transition-colors">
                <Phone size={18} /> Gọi ngay
              </a>
              {SITE.zalo ? (
                <a href={SITE.zalo} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium hover:bg-gray-50 transition-colors">
                  <MessageCircle size={18} className="text-[#0068FF]" /> Gửi qua Zalo
                </a>
              ) : null}
            </div>
            <button onClick={() => setSubmittedMessage(null)} className="mt-6 text-sm text-nau underline hover:text-do">Sửa lại thông tin</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Họ tên *</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
              {errors.name && <p className="text-do text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Số điện thoại *</label>
              <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
              {errors.phone && <p className="text-do text-xs mt-1">{errors.phone}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Ngày mong muốn *</label>
                <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
                {errors.date && <p className="text-do text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Số người *</label>
                <input type="number" min="1" value={formData.people} onChange={e => setFormData({...formData, people: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
                {errors.people && <p className="text-do text-xs mt-1">{errors.people}</p>}
              </div>
            </div>
            <div>
              <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Ghi chú (dị ứng, yêu cầu đặc biệt...)</label>
              <textarea rows={3} value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-full bg-do text-white font-medium hover:bg-red-800 transition-colors mt-2">
              Tạo tin nhắn đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
