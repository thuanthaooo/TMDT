import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { SITE } from '../data/site';


export default function Navbar() {
  const { count } = useCart();
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
    <div className="site-nav-wrap flex justify-center relative z-50">
      <div className="site-nav w-full relative flex items-center">
        {/* Logo */}
        <Link to="/" aria-current={isActive('/') ? 'page' : undefined} className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/logo/emblem-flour.png"
            alt="Tam Khang – Bánh In Huế"
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
          />
          <img
            src="/assets/logo/wordmark.png"
            alt=""
            className="h-4 hidden sm:block object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] text-nau-dam ml-auto font-medium">
          <Link to="/" aria-current={isActive('/') ? 'page' : undefined} className="relative flex items-center hover:text-do transition-colors">
            Trang chủ
          </Link>
          <Link to="/cau-chuyen" aria-current={isActive('/cau-chuyen') ? 'page' : undefined} className="relative flex items-center hover:text-do transition-colors">
            Câu chuyện
          </Link>
          <Link to="/bo-suu-tap" aria-current={isActive('/bo-suu-tap') ? 'page' : undefined} className="relative flex items-center hover:text-do transition-colors">
            Bộ sưu tập
          </Link>
          <Link to="/qua-tang" aria-current={isActive('/qua-tang') ? 'page' : undefined} className="relative flex items-center hover:text-do transition-colors">
            Quà tặng
          </Link>
          {SITE.workshop.enabled && (
            <Link to="/workshop" aria-current={isActive('/workshop') ? 'page' : undefined} className="relative flex items-center hover:text-do transition-colors">
              Workshop
            </Link>
          )}
        </nav>

        <Link to="/gio-hang" className="header-cart" aria-label={`Giỏ hàng, ${count} sản phẩm`} aria-current={isActive('/gio-hang') ? 'page' : undefined}><ShoppingBag size={23} /><span aria-hidden="true">{count}</span></Link>
        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-nau-dam hover:text-do"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-kem-nhat rounded-2xl shadow-lg border border-[#E6D5AE] p-3 z-20 lg:hidden flex flex-col gap-2">
            <Link to="/" aria-current={isActive('/') ? 'page' : undefined} className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Trang chủ</Link>
            <Link to="/cau-chuyen" aria-current={isActive('/cau-chuyen') ? 'page' : undefined} className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Câu chuyện</Link>
            <Link to="/bo-suu-tap" aria-current={isActive('/bo-suu-tap') ? 'page' : undefined} className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Bộ sưu tập</Link>
            <Link to="/qua-tang" aria-current={isActive('/qua-tang') ? 'page' : undefined} className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Quà tặng</Link>
            {SITE.workshop.enabled && (
              <Link to="/workshop" aria-current={isActive('/workshop') ? 'page' : undefined} className="px-4 py-3 font-medium text-nau-dam hover:bg-white rounded-xl">Workshop</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
