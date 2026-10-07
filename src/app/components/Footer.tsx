import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { SITE } from '../data/site';
import Pending from './Pending';

export default function Footer() {
  return (
    <footer className="bg-nau-dam text-kem pt-16 pb-8 border-t-4 border-do">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/assets/logo/wordmark.png" alt="Tam Khang" className="h-6 brightness-0 invert" />
            </Link>
            <p className="text-[14px] text-kem/80 leading-relaxed mb-6">
              {SITE.slogan}. {SITE.description}
            </p>
            <div className="flex gap-4">
              {SITE.social.facebook ? (
                <a href={SITE.social.facebook} target="_blank" rel="noreferrer" className="text-kem/60 hover:text-white"><Facebook size={20} /></a>
              ) : null}
              {SITE.social.instagram ? (
                <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="text-kem/60 hover:text-white"><Instagram size={20} /></a>
              ) : null}
              {/* Tiktok icon missing in standard lucide, just text if needed, but omitted for now if not provided */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3 text-[14px] text-kem/80">
              <li><Link to="/cau-chuyen" className="hover:text-white transition-colors">Câu chuyện Tam Khang</Link></li>
              <li><Link to="/bo-suu-tap" className="hover:text-white transition-colors">Bộ sưu tập bánh in</Link></li>
              <li><Link to="/qua-tang" className="hover:text-white transition-colors">Quà tặng & Đặt hàng</Link></li>
              {SITE.workshop.enabled && (
                <li><Link to="/workshop" className="hover:text-white transition-colors">Workshop trải nghiệm</Link></li>
              )}
              <li><Link to="/lien-he" className="hover:text-white transition-colors">Hỗ trợ & Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl text-white mb-6">Thông tin liên hệ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[14px] text-kem/80">
              <div className="flex gap-3">
                <Phone size={18} className="shrink-0 mt-0.5 text-vang" />
                <div>
                  <div className="font-medium text-white mb-1">Hotline / Zalo</div>
                  <a href={SITE.phoneHref} className="hover:text-white transition-colors block">{SITE.phone}</a>
                  {SITE.zalo ? (
                    <a href={SITE.zalo} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Nhắn tin Zalo</a>
                  ) : <div className="mt-1"><Pending /></div>}
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-vang" />
                <div>
                  <div className="font-medium text-white mb-1">Cửa hàng</div>
                  {SITE.address || <Pending />}
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-vang" />
                <div>
                  <div className="font-medium text-white mb-1">Giờ mở cửa</div>
                  {SITE.hours || <Pending />}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="shrink-0 mt-0.5 text-vang" />
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  {SITE.email ? <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a> : <Pending />}
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="text-center text-[13px] text-kem/50 border-t border-kem/10 pt-8">
          &copy; {new Date().getFullYear()} Tam Khang – Bánh In Huế. Bản quyền thuộc về chủ thương hiệu.
        </div>
      </div>
    </footer>
  );
}
