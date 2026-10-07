import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X, Phone } from 'lucide-react';
import { SITE } from '../data/site';
import { PRODUCTS } from '../data/products';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4 relative z-50">
      <div className="bg-kem-nhat/95 backdrop-blur rounded-full shadow-sm border border-[#E6D5AE] pl-2 pr-2 py-2 w-full max-w-[940px] relative flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/logo/emblem.png"
            alt="Tam Khang – Bánh In Huế"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <img
            src="/assets/logo/wordmark.png"
            alt=""
            className="h-4 hidden sm:block object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] text-nau-dam ml-8">
          <Link to="/" className="relative flex items-center hover:text-do transition-colors">
            {isActive('/') && <span className="absolute -left-3 w-1.5 h-1.5 bg-do rounded-full"></span>}
            Trang chủ
          </Link>
          <Link to="/cau-chuyen" className="relative flex items-center hover:text-do transition-colors">
            {isActive('/cau-chuyen') && <span className="absolute -left-3 w-1.5 h-1.5 bg-do rounded-full"></span>}
            Câu chuyện
          </Link>
          <div className="group relative flex items-center cursor-pointer hover:text-do transition-colors">
            <span className="flex items-center gap-1 text-do">
              Bộ sưu tập <ChevronDown size={14} className="stroke-[3.5]" />
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-kem opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2">
              {PRODUCTS.map(p => (
                <Link key={p.slug} to={`/bo-suu-tap/${p.slug}`} className="px-4 py-2 hover:bg-kem-nhat hover:text-do text-nau-dam transition-colors">
                  {p.name}
                </Link>
              ))}
              <div className="h-px bg-kem mx-4 my-1"></div>
              <Link to="/bo-suu-tap" className="px-4 py-2 hover:bg-kem-nhat hover:text-do text-nau-dam transition-colors">
                Xem tất cả
              </Link>
            </div>
          </div>
          <Link to="/qua-tang" className="relative flex items-center hover:text-do transition-colors">
            {isActive('/qua-tang') && <span className="absolute -left-3 w-1.5 h-1.5 bg-do rounded-full"></span>}
            Quà tặng
          </Link>
          {SITE.workshop.enabled && (
            <Link to="/workshop" className="relative flex items-center hover:text-do transition-colors">
              {isActive('/workshop') && <span className="absolute -left-3 w-1.5 h-1.5 bg-do rounded-full"></span>}
              Workshop
            </Link>
          )}
          <Link to="/lien-he" className="relative flex items-center hover:text-do transition-colors">
            {isActive('/lien-he') && <span className="absolute -left-3 w-1.5 h-1.5 bg-do rounded-full"></span>}
            Liên hệ
          </Link>
        </nav>

        {/* Right Cluster */}
        <div className="ml-auto flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            aria-label="Gọi Tam Khang"
            title={SITE.phone || "Gọi Tam Khang"}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-kem-nhat text-do transition-colors border border-kem"
          >
            <Phone size={18} />
          </a>
          <Link
            to="/qua-tang#dat-hang"
            className="flex items-center gap-2 bg-do text-white rounded-full pl-4 pr-1.5 py-1.5 hover:bg-red-800 transition-colors"
          >
            <span className="text-[14px] font-medium hidden sm:block">Đặt hộp quà</span>
            <span className="text-[14px] font-medium sm:hidden block">Đặt hàng</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ChevronRight size={16} />
            </div>
          </Link>
          <button
            className="lg:hidden p-2 text-nau-dam hover:text-do"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-kem-nhat rounded-2xl shadow-lg border border-[#E6D5AE] p-3 z-20 lg:hidden flex flex-col gap-2">
            <Link to="/" className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Trang chủ</Link>
            <Link to="/cau-chuyen" className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Câu chuyện</Link>
            <div className="px-4 py-2 font-medium text-do">Bộ sưu tập</div>
            <div className="flex flex-col ml-4 border-l-2 border-[#E6D5AE] pl-2">
              {PRODUCTS.map(p => (
                <Link key={p.slug} to={`/bo-suu-tap/${p.slug}`} className="px-4 py-2 text-nau-dam hover:bg-white rounded-xl">{p.name}</Link>
              ))}
              <Link to="/bo-suu-tap" className="px-4 py-2 text-nau-dam hover:bg-white rounded-xl">Xem tất cả</Link>
            </div>
            <Link to="/qua-tang" className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Quà tặng</Link>
            {SITE.workshop.enabled && (
              <Link to="/workshop" className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Workshop</Link>
            )}
            <Link to="/lien-he" className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Liên hệ</Link>
          </div>
        )}
      </div>
    </div>
  );
}
