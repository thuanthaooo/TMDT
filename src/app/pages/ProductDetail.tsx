import { useParams, Navigate, Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SITE } from '../data/site';
import Pending from '../components/Pending';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/bo-suu-tap" replace />;
  }

  const relatedProducts = PRODUCTS.filter(p => p.slug !== product.slug);

  return (
    <div className="pb-20">
      <div className="bg-white rounded-[2rem] p-4 sm:p-8 shadow-sm mb-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[4/5] relative" style={{ backgroundColor: product.tint }}>
            <img
              src={product.image}
              alt={`Hộp bánh ${product.name}`}
              className="w-full h-full object-cover object-top mix-blend-multiply"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 flex flex-col pt-4 sm:pt-8">
            <h1 className="font-heading text-5xl font-semibold mb-2" style={{ color: product.accent }}>
              {product.name}
            </h1>
            <p className="text-xl text-nau-dam mb-6 font-medium">{product.meaning}</p>
            
            <p className="text-[15px] text-nau leading-relaxed mb-8 border-b border-kem pb-8">
              {product.tagline}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10 text-[14px]">
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Hương vị</div>
                <div className="font-medium text-nau-dam">{product.flavor || <Pending />}</div>
              </div>
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Nguyên liệu</div>
                <div className="font-medium text-nau-dam">{product.ingredients || <Pending />}</div>
              </div>
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Quy cách</div>
                <div className="font-medium text-nau-dam">Hộp 3 bánh</div>
              </div>
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Khối lượng</div>
                <div className="font-medium text-nau-dam">{product.weight || <Pending />}</div>
              </div>
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Linh vật</div>
                <div className="font-medium text-nau-dam">{product.mascot || <Pending />}</div>
              </div>
              <div>
                <div className="text-nau mb-1 text-xs uppercase tracking-wider">Hạn sử dụng</div>
                <div className="font-medium text-nau-dam">{product.shelfLife || <Pending />}</div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="mt-auto bg-kem-nhat rounded-2xl p-6 border border-[#E6D5AE]">
              <div className="flex items-end justify-between mb-6">
                <span className="text-nau text-[14px]">Giá niêm yết</span>
                <span className="text-2xl font-semibold text-nau-dam">{product.price || <Pending />}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/qua-tang#dat-hang"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: product.accent }}
                >
                  <ShoppingBag size={18} />
                  Đặt hàng
                </Link>
                {SITE.zalo ? (
                  <a
                    href={SITE.zalo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle size={18} className="text-[#0068FF]" />
                    Chat Zalo
                  </a>
                ) : (
                  <button disabled className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E6D5AE] text-nau-dam font-medium opacity-50 cursor-not-allowed">
                    <MessageCircle size={18} />
                    <Pending />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-heading text-3xl text-center text-nau-dam mb-8">Khám phá thêm</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {relatedProducts.map(p => (
            <Link key={p.slug} to={`/bo-suu-tap/${p.slug}`} className="bg-white rounded-2xl p-4 flex gap-4 items-center group hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-xl flex-shrink-0 overflow-hidden" style={{ backgroundColor: p.tint }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-1" style={{ color: p.accent }}>{p.name}</h3>
                <p className="text-[13px] text-nau line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
