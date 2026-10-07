import OrderForm from '../components/OrderForm';
import Pending from '../components/Pending';

export default function Gifts() {
  return (
    <div className="pb-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam mb-6">
          Quà tặng, gói trọn tấm lòng
        </h1>
        <p className="text-[17px] text-nau leading-relaxed">
          Hộp giấy cao cấp, khay đựng ba chiếc bánh, mỗi bánh một túi riêng. Kèm túi giấy, thiệp và tag, tem niêm phong mang dấu logo Tam Khang.
        </p>
      </div>

      <div className="mb-16">
        <div className="w-full h-[50vh] min-h-[300px] rounded-3xl overflow-hidden relative mb-12">
          <img
            src="/assets/images/hop-phuc-loc-tho.webp"
            alt="Hộp quà Phúc Lộc Thọ"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="font-heading text-3xl text-nau-dam mb-6">Các lựa chọn quà tặng</h2>
          <ul className="space-y-4 text-nau">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
              <div>
                <strong>Hộp bánh lẻ:</strong> Phúc, Lộc hoặc Thọ.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
              <div>
                <strong>Bộ ba Phúc – Lộc – Thọ:</strong> <Pending />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
              <div>
                <strong>Hộp quà hoàn chỉnh:</strong> kèm túi giấy, thiệp, tag <Pending />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
              <div>
                <strong>Gift card (quà tặng từ tâm):</strong> <Pending />
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-vang mt-2 flex-shrink-0"></span>
              <div>
                <strong>Đặt số lượng lớn:</strong> Dành cho quà tặng doanh nghiệp, đối tác.
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-heading text-3xl text-nau-dam mb-6">Gợi ý lời nhắn trên thiệp</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-kem shadow-sm">
              <h3 className="font-medium text-nau-dam mb-2">Thiệp cảm ơn</h3>
              <p className="text-nau italic">"Cảm ơn. Vì đã đồng hành cùng Tam Khang."</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-kem shadow-sm">
              <h3 className="font-medium text-nau-dam mb-2">Thiệp chúc tặng</h3>
              <p className="text-nau italic">"Thân tặng..."</p>
              <p className="text-[13px] text-gray-500 mt-2">(Không gian để viết tay hoặc in lời nhắn riêng của bạn)</p>
            </div>
          </div>
        </div>
      </div>

      <div id="dat-hang" className="scroll-mt-32 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl text-center text-nau-dam mb-8">Đặt hộp quà</h2>
        <p className="text-center text-nau mb-8">Vui lòng điền thông tin để chúng tôi chuẩn bị món quà chu đáo nhất.</p>
        <OrderForm />
      </div>
    </div>
  );
}
