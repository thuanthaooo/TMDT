import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="w-24 h-24 mb-8">
        <img src="/assets/logo/emblem-flour.png" alt="Tam Khang" className="w-full h-full object-contain opacity-50" />
      </div>
      <h1 className="font-heading text-6xl text-nau-dam mb-4">404</h1>
      <p className="text-xl text-nau mb-8">Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-nau-dam text-kem-nhat px-8 py-3 rounded-full hover:bg-black transition-colors"
      >
        <Home size={18} />
        Về trang chủ
      </Link>
    </div>
  );
}
