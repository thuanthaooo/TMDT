export default function BrandBanner() {
  return (
    <section className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-[#E6D5AE] shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Phần ảnh: hop-phuc-loc-tho */}
        <div className="lg:col-span-6 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/11] bg-kem-nhat">
          <img
            src="/assets/images/hop-phuc-loc-tho.webp"
            alt="Ba dòng bánh in Phúc – Lộc – Thọ Tam Khang"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Phần text: ảnh image.png / banner-tinh-hoa */}
        <div className="lg:col-span-6 w-full flex flex-col justify-center items-center">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EFE2C5] shadow-sm bg-[#FAF4E5]">
            <img
              src="/assets/images/banner-tinh-hoa.svg"
              alt="Tinh hoa bánh in Huế – Trao gửi phúc lộc thọ"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
