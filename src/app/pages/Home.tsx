import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, MessageCircle, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import CollectionPreview from '../components/CollectionPreview';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import { SITE } from '../data/site';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Bộ sưu tập Phúc Lộc Thọ */}
      <section className="bg-kem pt-14 sm:pt-20 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <CollectionPreview />
        </div>
      </section>

      {/* Sections after hero */}
      <main className="bg-kem pt-8 sm:pt-12 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
          {/* 2. Ba lời chúc */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl sm:text-4xl text-nau-dam mb-8">Ba lời chúc từ tâm</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#2E6E5A' }}></div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-1" style={{ color: '#2E6E5A' }}>Phúc</h3>
                    <p className="text-nau">Bình an, may mắn. Sắc xanh dịu gửi lời chúc bình an đến mái ấm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#BE3232' }}></div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-1" style={{ color: '#BE3232' }}>Lộc</h3>
                    <p className="text-nau">Tài lộc, thịnh vượng. Sắc hồng may mắn gửi lời chúc hanh thông, đủ đầy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#B8863A' }}></div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-1" style={{ color: '#B8863A' }}>Thọ</h3>
                    <p className="text-nau">Sức khỏe, trường thọ. Sắc vàng ấm áp gửi lời chúc khỏe mạnh, bền lâu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full aspect-square rounded-3xl overflow-hidden">
              <img src="/assets/images/banh-phuc-loc-tho.webp" alt="Ba loại bánh in Phúc Lộc Thọ" className="w-full h-full object-cover" />
            </div>
          </section>

          {/* 3. Quà tặng */}
          <section className="bg-white rounded-[3rem] p-8 sm:p-12 border border-[#E6D5AE] shadow-sm flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/assets/images/hop-phuc-loc-tho.webp" alt="Hộp quà Tam Khang" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="font-heading text-3xl sm:text-4xl text-nau-dam mb-6">Quà tặng, gói trọn tấm lòng</h2>
              <p className="text-[15px] text-nau leading-relaxed mb-8">
                Hộp giấy cao cấp, khay đựng ba chiếc bánh, mỗi bánh một túi riêng. Kèm túi giấy, thiệp và tag, tem niêm phong mang dấu logo Tam Khang.
              </p>
              <Link to="/qua-tang" className="inline-flex items-center gap-3 bg-nau-dam text-kem-nhat rounded-full px-6 py-3 text-[14px] font-medium hover:bg-black transition-colors">
                Xem các lựa chọn quà tặng
              </Link>
            </div>
          </section>

          {/* 4. Workshop teaser */}
          {SITE.workshop.enabled && (
            <section className="workshop-banner" aria-labelledby="workshop-banner-title">
              <div className="workshop-banner-photo">
                <img src="/assets/images/workshop-banh-trang.png" alt="Người thợ ép bánh in trắng ngà với hoa văn Phúc, Lộc, Thọ trong khuôn gỗ" loading="lazy" width={1536} height={1024} />
              </div>
              <div className="workshop-banner-copy">
                <Leaf className="workshop-banner-leaf workshop-banner-leaf-top" aria-hidden="true" />
                <Leaf className="workshop-banner-leaf workshop-banner-leaf-bottom" aria-hidden="true" />
                <p className="workshop-banner-eyebrow">Workshop<span aria-hidden="true" /></p>
                <h2 id="workshop-banner-title">Tự tay làm bánh,<br />mang về một nét Huế</h2>
                <p className="workshop-banner-description">
                  Trải nghiệm quy trình làm bánh in truyền thống, tự tay tạo nên những chiếc bánh mang đậm dấu ấn văn hoá Huế.
                </p>
                <Link to="/workshop" className="workshop-banner-link">
                  Khám phá workshop <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </section>
          )}

          {/* 5. Câu chuyện */}
          <section className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <img src="/assets/logo/emblem-flour.png" alt="Tam Khang" className="w-20 h-20 mb-8 object-contain" />
            <h2 className="font-heading text-3xl sm:text-4xl text-nau-dam mb-6">Câu chuyện Tam Khang</h2>
            <p className="text-[15px] text-nau leading-relaxed mb-8">
              Tam Khang bắt đầu từ một khuôn bánh và một nắm bột mịn. Mỗi chiếc bánh in được ép khuôn, in nổi những họa tiết quen thuộc của xứ Huế...
            </p>
            <Link to="/cau-chuyen" className="text-[14px] font-medium text-nau-dam underline underline-offset-4 decoration-nau/30 hover:decoration-nau transition-colors px-2 py-2">
              Đọc tiếp câu chuyện
            </Link>
          </section>

          {/* 6. Hỏi đáp */}
          <section className="flex flex-col items-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-nau-dam mb-10 text-center">Câu hỏi thường gặp</h2>
            <Faq />
          </section>

          {/* 7. CTA band */}
          <section className="bg-xanh rounded-[3rem] p-10 sm:p-16 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
            {/* Pattern overlay hint */}
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/hero-bot-banh.webp')] mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 mb-8 flex flex-col items-center gap-3">
                <img src="/assets/logo/emblem-flour.png" alt="Tam Khang" className="w-32 h-32 object-contain" />
                <img src="/assets/logo/wordmark.png" alt="" className="w-full h-auto brightness-0 invert" />
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl text-white mb-10">Gửi một lời chúc phúc lộc thọ</h2>
              <Link to="/qua-tang#dat-hang" className="inline-flex items-center gap-3 bg-do text-white rounded-full px-10 py-4 text-[15px] font-medium hover:bg-red-800 transition-colors shadow-xl">
                Đặt hàng ngay
              </Link>
            </div>
          </section>
          
        </div>
      </main>

      <Footer />

      {/* Floating Buttons Mobile */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden">
        {SITE.zalo && (
          <a href={SITE.zalo} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 text-[#0068FF]">
            <MessageCircle size={24} />
          </a>
        )}
        <a href={SITE.phoneHref} className="w-12 h-12 rounded-full bg-do text-white shadow-xl flex items-center justify-center">
          <Phone size={24} />
        </a>
      </div>
    </>
  );
}
