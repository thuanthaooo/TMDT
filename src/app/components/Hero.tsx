import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="brand-hero" aria-labelledby="hero-title">
      <div className="brand-hero-panel">
        <Navbar />
        <div className="brand-hero-content">
          <div className="brand-hero-photo">
            <img
              src="/assets/images/hop-phuc-loc-tho.webp"
              alt="Bộ quà bánh in Tam Khang Phúc, Lộc, Thọ"
              width={1200} height={900}
              {...{ fetchpriority: 'high' }}
              decoding="async"
            />
          </div>
          <div className="brand-hero-copy">
            <p className="brand-hero-eyebrow">Tam Khang · Bánh in Huế<span aria-hidden="true" /></p>
            <h1 id="hero-title">Tinh hoa<br /><span>bánh in Huế</span></h1>

            <p className="brand-hero-description">
              Gìn giữ hương vị truyền thống,<br />
              lan tỏa giá trị văn hoá Việt<br />
              qua từng chiếc bánh in tinh tế.
            </p>
            <div className="brand-hero-actions">
              <Link className="brand-hero-primary" to="/qua-tang">Khám phá bộ quà <ArrowRight size={19} aria-hidden="true" /></Link>
              <Link className="brand-hero-story" to="/cau-chuyen">Câu chuyện Tam Khang <ArrowRight size={19} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
