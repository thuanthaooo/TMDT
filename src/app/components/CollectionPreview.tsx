import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CollectionPreview() {
  return (
    <div className="px-3 sm:px-4 relative z-10 -mb-16 sm:-mb-24 mt-8 sm:mt-12 w-full">
      <div className="bg-kem-nhat rounded-[2rem] sm:rounded-3xl p-4 sm:p-6 w-full max-w-[920px] mx-auto shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PRODUCTS.map(product => (
            <Link
              key={product.slug}
              to={`/bo-suu-tap/${product.slug}`}
              className="bg-white rounded-2xl p-4 block hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading text-2xl font-semibold" style={{ color: product.accent }}>
                  {product.name}
                </h3>
                <span className="text-[13px] text-nau">Hộp 3 bánh</span>
              </div>
              
              {/* Image */}
              <div 
                className="aspect-[4/5] rounded-xl overflow-hidden mb-4 flex-shrink-0"
                style={{ backgroundColor: product.tint }}
              >
                <img
                  src={product.image}
                  alt={`Hộp bánh ${product.name}`}
                  className="w-full h-full object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col">
                <p className="text-[15px] font-medium text-nau-dam mb-1">{product.meaning}</p>
                <p className="text-[13px] text-nau line-clamp-2 mb-4">{product.tagline}</p>
                
                {/* Footer */}
                <div className="mt-auto flex items-center justify-between text-[14px] font-medium" style={{ color: product.accent }}>
                  <span>Xem chi tiết</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: product.accent }}>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
