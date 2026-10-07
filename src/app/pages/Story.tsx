import Pending from '../components/Pending';

export default function Story() {
  return (
    <div className="pb-20 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <img
          src="/assets/logo/emblem.png"
          alt="Tam Khang Emblem"
          className="w-[200px] h-[200px] mx-auto mb-8 object-contain"
          style={{ width: '200px', height: '200px' }}
        />
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam mb-6">
          Câu chuyện Tam Khang
        </h1>
        <p className="text-[17px] text-nau-dam leading-relaxed max-w-2xl mx-auto">
          Tam Khang gìn giữ nghề bánh in Huế bằng sự tinh tế trong từng đường khắc. Mỗi chiếc bánh mang một lời chúc: Lộc thịnh vượng, Phúc an lành, Thọ khang kiện. Một món quà truyền thống, trao gửi bằng cả tấm lòng.
        </p>
      </div>

      <div className="space-y-16">
        {/* Ý nghĩa tên gọi */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm text-center">
          <h2 className="font-heading text-3xl text-nau-dam mb-6">Ý nghĩa tên thương hiệu</h2>
          <div className="text-nau leading-relaxed max-w-xl mx-auto flex flex-col items-center">
            <img
              src="/assets/logo/wordmark.png"
              alt="Tam Khang"
              className="h-8 sm:h-10 mx-auto mb-6 object-contain"
            />
            <p className="text-[15px] sm:text-[16px] text-nau leading-relaxed text-center">
              <span className="italic font-medium text-nau-dam">Tam (三):</span> là ba. Hợp với bộ ba Phúc, Lộc, Thọ.
              <br />
              <span className="italic font-medium text-nau-dam">Khang (康):</span> nghĩa là khỏe mạnh, bình an, yên ổn, như trong từ "an khang".
              <br />
              <span className="font-medium text-nau-dam">Tam Khang:</span> ba lời chúc về sự an khang, được gửi gắm trong mỗi hộp bánh.
            </p>
          </div>
        </section>

        {/* Ý nghĩa logo */}
        <section className="bg-kem-nhat rounded-[2rem] p-8 sm:p-12 border border-[#E6D5AE] flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/logo/logo-stack.png"
              alt="Logo Tam Khang"
              className="w-64 max-w-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl text-nau-dam mb-4">Dấu ấn thương hiệu</h2>
            <p className="text-[15px] text-nau leading-relaxed mb-4">
              Chữ "in" cách điệu ở trung tâm tạo dấu ấn riêng cho bánh in Huế. Viền bao quanh gợi hình bột bánh, nguyên liệu cốt lõi làm nên từng chiếc bánh.
            </p>
            <p className="text-[15px] text-nau leading-relaxed">
              Họa tiết mây và hoa văn lấy cảm hứng từ văn hóa Huế. Tổng thể tròn đầy, tinh tế, mang tinh thần truyền thống pha nét hiện đại.
            </p>
          </div>
        </section>

        {/* Họa tiết trên bao bì */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm">
          <h2 className="font-heading text-3xl text-nau-dam mb-8 text-center">Họa tiết & Linh vật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-vang rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-nau-dam mb-1">Mây & Hoa sen</h3>
                <p className="text-[14px] text-nau">Biểu tượng của sự thanh cao, bình yên và những giá trị truyền thống tốt đẹp của cung đình Huế.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-vang rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-nau-dam mb-1">Trâu (Phúc)</h3>
                <p className="text-[14px] text-nau">Sự hiền hòa, chăm chỉ và mong cầu một cuộc sống bình an, ấm no <Pending />.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-vang rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-nau-dam mb-1">Rồng (Lộc)</h3>
                <p className="text-[14px] text-nau">Tượng trưng cho sự thịnh vượng, uy quyền và những điều may mắn, hanh thông <Pending />.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-vang rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-nau-dam mb-1">Hạc (Thọ)</h3>
                <p className="text-[14px] text-nau">Cánh hạc vươn cao mang ý nghĩa trường thọ, sức khỏe dồi dào và sự bền bỉ qua thời gian.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
