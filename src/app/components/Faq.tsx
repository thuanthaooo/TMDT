import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Pending from './Pending';

const FAQS = [
  {
    q: "Bánh in Huế là gì? Khác gì các loại bánh khác?",
    a: <Pending />
  },
  {
    q: "Một hộp có mấy bánh? Có thể chọn lẫn các dòng không?",
    a: <Pending />
  },
  {
    q: "Có giao hàng toàn quốc không? Phí giao hàng?",
    a: <Pending />
  },
  {
    q: "Có nhận in lời nhắn lên thiệp hoặc tag riêng không?",
    a: <Pending />
  },
  {
    q: "Có nhận đơn số lượng lớn cho doanh nghiệp không?",
    a: <Pending />
  },
  {
    q: "Workshop kéo dài bao lâu?",
    a: "Mỗi ca trải nghiệm kéo dài 60 – 90 phút."
  },
  {
    q: "Làm bánh xong có mang về được không?",
    a: "Có. Mỗi khách tự đóng gói 01 hộp quà 8 hoặc 16 bánh in do chính tay mình làm, kèm chứng nhận trải nghiệm văn hóa."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="bg-white rounded-2xl border border-kem overflow-hidden transition-all duration-200 shadow-sm">
              <button
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-do"
              >
                <span className="font-medium text-nau-dam pr-4">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-nau shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 sm:p-6 pt-0 text-nau text-[15px] leading-relaxed border-t border-kem mx-5 sm:mx-6 px-0">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
