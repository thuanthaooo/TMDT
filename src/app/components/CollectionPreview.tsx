import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CollectionPreview() {
  return (
    <div className="w-full">
      <div className="bg-kem-nhat/95 backdrop-blur-sm rounded-[2rem] sm:rounded-3xl p-4 sm:p-6 w-full max-w-[960px] mx-auto shadow-sm border border-[#E9DDBF]/60">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PRODUCTS.map(product => (
            <Link
              key={product.slug}
              to={`/bo-suu-tap/${product.slug}`}
              className="bg-white rounded-2xl p-4 block hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-center mb-3">
                <h3 className="font-heading text-2xl font-semibold text-center" style={{ color: product.accent }}>
                  {product.name}
                </h3>
              </div>
              
              {/* Image */}
              <div 
                className="aspect-[4/5] rounded-xl overflow-hidden mb-4 flex-shrink-0 relative"
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
                <div className="mt-auto flex items-center justify-between text-[14px] font-medium pt-2 border-t border-kem/60" style={{ color: product.accent }}>
                  <span>Xem chi tiết</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform" style={{ backgroundColor: product.accent }}>
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
