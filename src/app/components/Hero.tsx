import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CollectionPreview from './CollectionPreview';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-kem p-3 sm:p-4">
      {/* Hero container that clips everything inside */}
      <div className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#E9DDBF] rounded-2xl sm:rounded-3xl flex flex-col">
        
        {/* Background Image */}
        <img
          src="/assets/images/hero-bot-banh.webp"
          alt=""
          width={1920} height={1280}
          fetchPriority="high" decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-kem-nhat/20 pointer-events-none"></div>

        {/* Navbar inside Hero for the home page (floating over background) */}
        <Navbar />

        {/* Content Wrapper */}
        <div className="relative z-10 flex-1 flex flex-col justify-start items-center">
          
          <div className="flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-kem-nhat rounded-full px-4 py-1.5 shadow-sm text-[13px] text-nau-dam">
              <span className="w-1.5 h-1.5 rounded-full bg-do"></span>
              Tam Khang · Bánh In Huế
            </div>

            {/* H1 */}
            <h1 
              className="font-heading mt-5 sm:mt-6 max-w-4xl text-nau-dam"
              style={{ 
                fontSize: 'clamp(40px, 8vw, 80px)', 
                lineHeight: 1.05, 
                fontWeight: 500, 
                letterSpacing: '-0.01em' 
              }}
            >
              Tinh hoa <span className="italic text-do">bánh in Huế</span>, trao gửi phúc lộc thọ
            </h1>

            {/* Subtitle */}
            <p 
              className="mt-4 sm:mt-6 text-nau px-2 max-w-xl"
              style={{ fontSize: 'clamp(14px, 3.5vw, 17px)' }}
            >
              Gìn giữ hương vị truyền thống, lan tỏa giá trị văn hóa Việt qua từng chiếc bánh in tinh tế.
            </p>

            {/* CTA Row */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/bo-suu-tap"
                className="inline-flex items-center gap-3 bg-nau-dam text-kem-nhat rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] hover:bg-black transition-colors"
              >
                Khám phá bộ sưu tập
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <ChevronRight size={14} className="text-kem-nhat" strokeWidth={3} />
                </div>
              </Link>
              <Link 
                to="/qua-tang"
                className="text-[14px] font-medium text-nau-dam underline underline-offset-4 decoration-nau/30 hover:decoration-nau transition-colors px-2 py-2"
              >
                Xem hộp quà tặng
              </Link>
            </div>
          </div>

          {/* Collection Preview Tray bleeds off the bottom */}
          <div className="mt-auto w-full">
            <CollectionPreview />
          </div>

        </div>
      </div>
    </div>
  );
}
