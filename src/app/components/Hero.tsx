import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="w-full bg-kem p-3 sm:p-4">
      {/* Hero container */}
      <div className="relative w-full min-h-[75vh] sm:min-h-[85vh] overflow-hidden bg-[#E9DDBF] rounded-2xl sm:rounded-3xl flex flex-col justify-between">
        
        {/* Background Image */}
        <img
          src="/assets/images/hero-bot-banh.webp"
          alt=""
          width={1920} height={1280}
          {...{ fetchpriority: 'high' }} decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-kem-nhat/25 pointer-events-none"></div>

        {/* Navbar inside Hero */}
        <Navbar />

        {/* Content Wrapper: 2-column layout */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-14 py-10 sm:py-16">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image hop-phuc-loc-tho */}
            <div className="w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E6D5AE]/80 bg-white/40">
                <img
                  src="/assets/images/hop-phuc-loc-tho.webp"
                  alt="Hộp bánh in Tam Khang Phúc Lộc Thọ"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Typography matching exact specs */}
            <div className="w-full flex flex-col justify-center text-left md:pl-2">
              {/* Tiêu đề: Serif (Cormorant Garamond), viết hoa toàn bộ, tracking rộng, cỡ lớn nhất, font-medium, màu đỏ nâu sẫm (maroon), 2 dòng canh trái */}
              <h1 
                className="font-heading uppercase font-medium tracking-[0.16em] sm:tracking-[0.19em] text-[#7A1F1D] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.25] text-left"
              >
                <span className="block">TINH HOA BÁNH IN HUẾ</span>
                <span className="block mt-1 sm:mt-1.5">TRAO GỬI PHÚC LỘC THỌ</span>
              </h1>

              {/* Đoạn mô tả: Serif in nghiêng kiểu thư pháp, chữ thường, cỡ nhỏ hơn nhiều, màu nhạt hơn, canh trái 3 dòng */}
              <p 
                className="font-heading italic text-[#754737] text-lg sm:text-xl lg:text-[22px] leading-[1.8] sm:leading-[1.9] text-left mt-5 sm:mt-6 max-w-md"
              >
                Gìn giữ hương vị truyền thống,<br />
                lan tỏa giá trị văn hoá Việt<br />
                qua từng chiếc bánh in tinh tế.
              </p>
            </div>

          </div>
        </div>

        {/* Subtle bottom spacing */}
        <div className="h-4 sm:h-8"></div>
      </div>
    </div>
  );
}
