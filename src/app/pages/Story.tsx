import Pending from '../components/Pending';

export default function Story() {
  return (
    <div className="pb-20 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <img
          src="/assets/logo/emblem.png"
          alt="Tam Khang Emblem"
          className="w-24 h-24 mx-auto mb-8 object-contain"
        />
        <h1 className="font-heading text-4xl sm:text-5xl text-nau-dam mb-6">
          Câu chuyện Tam Khang
        </h1>
        <p className="text-[17px] text-nau-dam leading-relaxed max-w-2xl mx-auto">
          Tam Khang bắt đầu từ một khuôn bánh và một nắm bột mịn. Mỗi chiếc bánh in được ép khuôn, in nổi những họa tiết quen thuộc của xứ Huế: áng mây, đóa sen, cánh hạc… Chúng tôi giữ lại hương vị xưa và làm mới cách trao gửi, để mỗi hộp bánh là một lời chúc phúc, lộc, thọ.
        </p>
      </div>

      <div className="space-y-16">
        {/* Ý nghĩa tên gọi */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm text-center">
          <h2 className="font-heading text-3xl text-nau-dam mb-4">Ý nghĩa tên "Tam Khang"</h2>
          <div className="text-nau leading-relaxed">
            <Pending />
            <p className="mt-4 text-[14px] italic text-gray-500">
              (Gợi ý: Gắn "Tam" (ba) với ba lời chúc Phúc – Lộc – Thọ, và "Khang" mang nghĩa an khang, khỏe mạnh.)
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
