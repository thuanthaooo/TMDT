import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import Pending from '../components/Pending';

export default function Collection() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam text-center mb-6">
          Bộ sưu tập
        </h1>
        <div className="w-full h-[40vh] min-h-[300px] rounded-3xl overflow-hidden relative">
          <img
            src="/assets/images/banh-phuc-loc-tho.webp"
            alt="Ba chiếc bánh Phúc Lộc Thọ"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-12 sm:gap-16">
        {PRODUCTS.map((product, index) => (
          <div 
            key={product.slug} 
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm`}
          >
            {/* Image Side */}
            <Link to={`/bo-suu-tap/${product.slug}`} className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden relative group" style={{ backgroundColor: product.tint }}>
              <img
                src={product.image}
                alt={`Hộp bánh ${product.name}`}
                className="w-full h-full object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />
            </Link>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-heading text-4xl font-semibold mb-2" style={{ color: product.accent }}>
                {product.name}
              </h2>
              <p className="text-xl text-nau-dam mb-4 font-medium">{product.meaning}</p>
              <p className="text-nau mb-6 text-[15px] leading-relaxed">
                {product.tagline}
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-xs text-nau uppercase tracking-wider mb-1">Giá</span>
                  <div className="font-semibold text-lg text-nau-dam">
                    {product.price ? product.price : <Pending />}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/bo-suu-tap/${product.slug}`}
                  className="inline-flex justify-center items-center px-6 py-2.5 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: product.accent }}
                >
                  Xem chi tiết
                </Link>
                <Link 
                  to={`/qua-tang#dat-hang`}
                  className="inline-flex justify-center items-center px-6 py-2.5 rounded-full border-2 text-nau-dam font-medium hover:bg-kem-nhat transition-colors"
                  style={{ borderColor: product.accent }}
                >
                  Đặt hàng
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
