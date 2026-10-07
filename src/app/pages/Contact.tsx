import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SITE } from '../data/site';
import Faq from '../components/Faq';
import Pending from '../components/Pending';

export default function Contact() {
  return (
    <div className="pb-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam mb-6">Liên hệ & Hỗ trợ</h1>
        <p className="text-[17px] text-nau leading-relaxed">
          Tam Khang luôn sẵn sàng lắng nghe và hỗ trợ bạn. Vui lòng tham khảo các câu hỏi thường gặp hoặc liên hệ trực tiếp với chúng tôi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Thông tin liên hệ</h2>
            <div className="space-y-6 bg-white p-8 rounded-3xl border border-kem shadow-sm">
              <div className="flex gap-4">
                <Phone className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Điện thoại</h3>
                  <a href={SITE.phoneHref} className="text-nau hover:text-do transition-colors">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Zalo</h3>
                  {SITE.zalo ? (
                    <a href={SITE.zalo} target="_blank" rel="noreferrer" className="text-nau hover:text-do transition-colors">Chat Zalo</a>
                  ) : <Pending />}
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Email</h3>
                  {SITE.email ? <a href={`mailto:${SITE.email}`} className="text-nau hover:text-do transition-colors">{SITE.email}</a> : <Pending />}
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Địa chỉ cửa hàng</h3>
                  <div className="text-nau">{SITE.address || <Pending />}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Địa điểm workshop</h3>
                  <div className="text-nau">Nhà vườn / cơ sở liên kết làng nghề bánh in Kim Long, TP. Huế (<Pending />)</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-vang shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-nau-dam mb-1">Giờ mở cửa</h3>
                  <div className="text-nau">{SITE.hours || <Pending />}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Hướng dẫn bảo quản</h2>
            <div className="bg-kem-nhat p-8 rounded-3xl border border-[#E6D5AE]">
              <ul className="space-y-4 text-nau">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
                  <span>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
                  <span>Giữ kín sau khi mở hộp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
                  <span>Ngon nhất trong khoảng <Pending /> kể từ ngày sản xuất.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Placeholder & Quick Form */}
        <div className="space-y-12">
          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Bản đồ</h2>
            <div className="bg-gray-200 w-full h-[300px] rounded-3xl flex flex-col items-center justify-center text-gray-500 border border-gray-300">
              <MapPin size={48} className="mb-2 opacity-50" />
              <span>[Bản đồ nhúng Google Maps - Đang cập nhật]</span>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-nau-dam mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form className="bg-white p-8 rounded-3xl border border-kem shadow-sm space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Họ tên</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Số điện thoại hoặc Email</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all" />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-nau-dam mb-1.5">Nội dung tin nhắn</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-do/20 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="px-8 py-3 rounded-full bg-nau-dam text-white font-medium hover:bg-black transition-colors">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-kem">
        <h2 className="font-heading text-3xl text-nau-dam mb-10 text-center">Câu hỏi thường gặp</h2>
        <Faq />
      </div>
    </div>
  );
}
