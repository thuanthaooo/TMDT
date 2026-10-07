# Tam Khang – Bánh In Huế · Brief nội dung website

> Dành cho Google Antigravity. Toàn bộ copy là **bản nháp** để chủ thương hiệu chỉnh sửa.
> Mục nào ghi **[CẦN XÁC NHẬN]** là thông tin chưa có trong bộ nhận diện. Agent **không được tự bịa** (giá, nguyên liệu, địa chỉ, số điện thoại…), hãy để placeholder dễ thấy trên giao diện.

---

## 0. Cách dùng với Antigravity

Prompt kỹ thuật và thiết kế nằm trong **PROMPT.md** (cùng thư mục). File này (BRIEF.md) là nguồn **nội dung chữ** của từng trang. Khi dùng, chỉ cần nói với agent:

> Đọc PROMPT.md và BRIEF.md, sau đó làm theo. Cho tôi xem Implementation Plan trước khi code.

---

## 1. Thương hiệu

| Mục | Nội dung |
|---|---|
| Tên | **Tam Khang** |
| Dòng phụ | **Bánh In Huế** |
| Slogan chính | Tinh hoa bánh in Huế, trao gửi phúc lộc thọ |
| Slogan phụ | Gìn giữ hương vị truyền thống, lan tỏa giá trị văn hóa Việt qua từng chiếc bánh in tinh tế |
| Tagline ngắn (thẻ, tag) | Tinh hoa bánh in Huế, trao gửi từ tâm |
| Cảm giác thương hiệu | Truyền thống, thủ công, tinh tế, sang trọng, hợp làm quà tặng |
| Giọng văn | Trang trọng nhưng ấm áp, giàu hình ảnh, câu ngắn. Xưng "chúng tôi", gọi khách là "bạn" hoặc "quý khách" |

**Ý nghĩa logo** (lấy từ bộ nhận diện): chữ "in" cách điệu ở trung tâm tạo dấu ấn riêng cho bánh in Huế. Viền bột bao quanh gợi hình bột bánh, nguyên liệu cốt lõi. Họa tiết mây và hoa văn lấy cảm hứng từ văn hóa Huế. Tổng thể tròn đầy, tinh tế, mang tinh thần truyền thống pha nét hiện đại.

---

## 2. Nhận diện hình ảnh

### Màu sắc

```css
:root {
  --do-truyen-thong: #BE3232; /* nút chính, điểm nhấn */
  --xanh-ngoc-tram:  #2E6E5A; /* nền khối tối, chi tiết */
  --vang-kim:        #D4A760; /* viền, đường kẻ, icon */
  --kem-nga:         #F5EBD4; /* nền chính */
  --nau-vang:        #8B5E3C; /* tiêu đề, chữ nhấn */
}
```

Màu nhận diện từng dòng bánh (gợi ý, lấy gần đúng theo ảnh bao bì):
- **Lộc**: hồng phấn (~`#E9A9A5`)
- **Phúc**: xanh sage nhạt (~`#B9CDB8`)
- **Thọ**: vàng kem (~`#E8CE8E`)

### Font
- **Tiêu đề (serif sang trọng, gần với font logo):** Cormorant Garamond hoặc Playfair Display (Google Fonts, hỗ trợ tiếng Việt).
- **Nội dung và dòng phụ (sans-serif thanh lịch, dễ đọc):** Be Vietnam Pro.

### Họa tiết và linh vật
- Họa tiết: mây, hoa sen, hạc, rồng, trâu, hoa văn bốn cánh (trong logo).
- Linh vật theo dòng bánh **[CẦN XÁC NHẬN]**: bộ nhận diện đang chưa thống nhất. Trên bánh, Phúc là nai và Lộc là chim phượng. Trên hộp, Phúc là trâu và Lộc là rồng. Thọ là hạc ở cả hai.

### Cách dùng logo
- Header: logo ngang (biểu tượng + chữ).
- Favicon: biểu tượng tròn (không chữ).
- Nền đỏ hoặc xanh đậm: dùng logo âm bản.
- Đóng dấu, tem: logo tròn.

### Phong cách ảnh
Bột bánh mịn, ánh nắng xuyên cửa sổ, hoa đào, gỗ, giấy mỹ thuật màu kem. Ảnh cận cảnh hoa văn in nổi trên bánh.

---

## 3. Sitemap và nội dung từng trang

**Menu:** Trang chủ · Câu chuyện · Bộ sưu tập · Quà tặng · Workshop · Liên hệ · [nút] Đặt hàng

### 3.1 Trang chủ

**Hero**
- H1: **Tinh hoa bánh in Huế, trao gửi phúc lộc thọ**
- Dòng phụ: Gìn giữ hương vị truyền thống, lan tỏa giá trị văn hóa Việt qua từng chiếc bánh in tinh tế.
- Nút: `Khám phá bộ sưu tập` · `Đặt hộp quà`
- Hình: ba chiếc bánh Phúc – Lộc – Thọ trên nền bột bánh.

**Ba chiếc bánh, ba lời chúc** (3 thẻ, mỗi thẻ một màu nhấn)
- **Phúc**: Bình an, may mắn. *Sắc xanh dịu gửi lời chúc bình an đến mái ấm.*
- **Lộc**: Tài lộc, thịnh vượng. *Sắc hồng may mắn gửi lời chúc hanh thông, đủ đầy.*
- **Thọ**: Sức khỏe, trường thọ. *Sắc vàng ấm áp gửi lời chúc khỏe mạnh, bền lâu.*
- Mỗi thẻ có nút `Xem chi tiết`. Hương vị từng bánh: **[CẦN XÁC NHẬN]**.

**Vì sao chọn Tam Khang** (4 điểm, icon nhỏ hoa văn vàng kim)
1. Nguyên liệu chọn lọc từ thiên nhiên
2. Hương vị truyền thống đậm đà Huế
3. Thủ công tinh xảo, gói trọn tình bánh Việt
4. Thích hợp làm quà tặng ý nghĩa

**Quà tặng: Gói trọn tấm lòng**
- Mô tả: Hộp giấy cao cấp, khay đựng ba chiếc bánh, mỗi bánh một túi riêng. Kèm túi giấy, thiệp và tag, tem niêm phong mang dấu logo Tam Khang.
- Hình: hộp, túi giấy, tag, thiệp. Nút `Xem các lựa chọn quà tặng`.

**Workshop** (khối ngắn)
- Tiêu đề: Tự tay làm chiếc bánh in của riêng bạn
- Mô tả: Workshop 60 – 90 phút tại làng bánh Kim Long: nghe nghệ nhân kể chuyện, tự ép khuôn và mang về hộp bánh do chính tay bạn làm. Nút `Xem workshop`.

**CTA cuối trang:** *Gửi một lời chúc phúc lộc thọ.* Nút `Đặt hàng ngay`.

**Chân trang:** logo âm bản, slogan phụ, địa chỉ, điện thoại, email, mạng xã hội, liên kết nhanh.

### 3.2 Câu chuyện Tam Khang

**Bản nháp:**
> Tam Khang bắt đầu từ một khuôn bánh và một nắm bột mịn. Mỗi chiếc bánh in được ép khuôn, in nổi những họa tiết quen thuộc của xứ Huế: áng mây, đóa sen, cánh hạc… Chúng tôi giữ lại hương vị xưa và làm mới cách trao gửi, để mỗi hộp bánh là một lời chúc phúc, lộc, thọ.

Cần bổ sung **[CẦN XÁC NHẬN]**: ai sáng lập, vì sao làm bánh in, công thức hoặc gia đình nào gắn với thương hiệu, năm thành lập.

**Các khối trên trang:**
1. Câu chuyện (đoạn trên và ảnh người làm bánh nếu có).
2. **Ý nghĩa logo**: ảnh logo kèm chú thích (chữ "in" cách điệu, viền bột bánh, họa tiết mây, hoa văn Huế).
3. **Ý nghĩa tên Tam Khang** **[CẦN XÁC NHẬN]**: gợi ý gắn "Tam" (ba) với ba lời chúc Phúc – Lộc – Thọ.
4. **Họa tiết trên bao bì**: giải nghĩa mây, sen, hạc, rồng, trâu.

### 3.3 Bộ sưu tập (Phúc – Lộc – Thọ)

**Trang danh sách:** 3 thẻ lớn (ảnh bánh + ảnh hộp, tên, ý nghĩa một dòng, giá, nút `Đặt hàng`). Có thể thêm thẻ **Combo Phúc – Lộc – Thọ** **[CẦN XÁC NHẬN]**.

**Trang chi tiết mỗi dòng bánh** (dùng chung một template):
- Tên, ý nghĩa lời chúc, linh vật và họa tiết trên bánh.
- Hương vị: **[CẦN XÁC NHẬN]**
- Nguyên liệu: **[CẦN XÁC NHẬN]**
- Quy cách: hộp 3 bánh; khối lượng: **[CẦN XÁC NHẬN]**
- Giá: **[CẦN XÁC NHẬN]**
- Hạn dùng: **[CẦN XÁC NHẬN]**
- Bộ ảnh: bánh, hộp (mặt trước, mặt sau, mở hộp), cận cảnh hoa văn.
- Nút `Đặt hàng` · `Chat Zalo` · sản phẩm gợi ý kèm.

### 3.4 Quà tặng và đặt hàng

**Các lựa chọn:**
1. Hộp bánh lẻ (Phúc, Lộc hoặc Thọ).
2. Bộ ba Phúc – Lộc – Thọ **[CẦN XÁC NHẬN]**.
3. Hộp quà kèm túi giấy, thiệp, tag **[CẦN XÁC NHẬN]**.
4. Gift card (quà tặng từ tâm) **[CẦN XÁC NHẬN]**.
5. Đặt số lượng lớn, quà tặng doanh nghiệp.

**Lời nhắn trên thiệp** (gợi ý copy cho các mẫu thiệp):
- Thiệp cảm ơn: *Cảm ơn. Vì đã đồng hành cùng Tam Khang.*
- Thiệp chúc tặng: *Thân tặng* (kèm vài dòng để viết tay hoặc nhập lời nhắn).

**Cách đặt hàng:** **[CẦN XÁC NHẬN]** (Zalo, điện thoại hay form trên web?).

**Form đặt hàng gợi ý:** Họ tên · Số điện thoại · Sản phẩm · Số lượng · Ngày cần nhận · Địa chỉ nhận · Lời nhắn in trên thiệp · Ghi chú.

### 3.5 Workshop trải nghiệm tại làng bánh Kim Long

*(Thông tin do chủ thương hiệu cung cấp. Dòng "Tương tự làm gốm mang về" trong tài liệu gốc là ghi chú tham chiếu nội bộ, không đưa lên website.)*

- **Tiêu đề:** Workshop trải nghiệm tại làng bánh Kim Long
- **Dòng phụ:** Tự tay làm bánh in Huế, mang về hộp quà do chính bạn tạo tác.

**Thông tin nhanh**
- **Địa điểm:** Nhà vườn / cơ sở liên kết làng nghề bánh in Kim Long, TP. Huế
- **Thời lượng:** 60 – 90 phút / ca trải nghiệm
- **Mang về:** 01 hộp quà 8 hoặc 16 bánh in do chính tay bạn làm, kèm chứng nhận trải nghiệm văn hóa

**Quy trình tham gia** (đây là trình tự thật nên dùng số thứ tự)
1. Nghe nghệ nhân kể chuyện về bánh in tiến vua và văn hóa cúng Tết.
2. Tự tay phối trộn bột đậu xanh chuẩn tỉ lệ sấy khô.
3. Chọn bộ khuôn gỗ truyền thống, tự tay ép nén bánh.
4. Trải nghiệm công đoạn sấy nhiệt nhẹ và gói giấy bóng ngũ sắc.
5. Thưởng thức bánh nóng mới ra lò cùng trà sen / trà cung đình tại chỗ.

**Thành phẩm mang về:** Mỗi khách tự đóng gói 01 hộp quà 8 hoặc 16 bánh in do chính tay mình tạo tác, mang về làm kỷ niệm hoặc tặng người thân (kèm chứng nhận trải nghiệm văn hóa).

**Đăng ký:** nút `Gọi đăng ký` (+84 3334 333 333) và form ngắn gồm Họ tên, Số điện thoại, Ngày mong muốn, Số người, Ghi chú.

**Còn thiếu [CẦN XÁC NHẬN]:** lịch các ca, giá, số người mỗi ca, độ tuổi tham gia (trẻ em có được không), cách đăng ký và đặt cọc, địa chỉ cụ thể của nhà vườn, chính sách đổi hoặc hủy lịch, lưu ý dị ứng.

**Hình:** chưa có ảnh workshop. Trang tạm dùng ảnh ba chiếc bánh, nên bổ sung ảnh nghệ nhân, bộ khuôn gỗ, giấy bóng ngũ sắc, hộp bánh tự đóng gói.

### 3.6 Bảo quản và hỏi đáp

**Hướng dẫn bảo quản** (theo thiệp thương hiệu, cần chủ cửa hàng duyệt lại):
- Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
- Giữ kín sau khi mở hộp.
- Ngon nhất trong khoảng **[7–14 ngày, CẦN XÁC NHẬN]** kể từ ngày sản xuất.

**Hỏi đáp gợi ý** (chủ cửa hàng điền câu trả lời):
- Bánh in Huế là gì? Khác gì các loại bánh khác?
- Một hộp có mấy bánh? Có thể chọn lẫn các dòng không?
- Có giao hàng toàn quốc không? Phí giao hàng?
- Có nhận in lời nhắn lên thiệp hoặc tag riêng không?
- Có nhận đơn số lượng lớn cho doanh nghiệp không?
- Workshop kéo dài bao lâu? *Mỗi ca trải nghiệm kéo dài 60 – 90 phút.*
- Làm bánh xong có mang về được không? *Có. Mỗi khách tự đóng gói 01 hộp quà 8 hoặc 16 bánh in do chính tay mình làm, kèm chứng nhận trải nghiệm văn hóa.*

### 3.7 Liên hệ

- **Điện thoại:** +84 3334 333 333 (link `tel:+843334333333`)
- **Địa điểm workshop:** Nhà vườn / cơ sở liên kết làng nghề bánh in Kim Long, TP. Huế (địa chỉ cụ thể **[CẦN XÁC NHẬN]**)
- Zalo, địa chỉ cửa hàng, email, giờ mở cửa, mạng xã hội: **[CẦN XÁC NHẬN]**
- Lưu ý: địa chỉ 123 Nguyễn Huệ và số 0909 123 456 trên thẻ chi nhánh trong bộ nhận diện là dữ liệu mẫu, không dùng.
- Bản đồ nhúng và form liên hệ ngắn.

---

## 4. SEO

- **Title:** Tam Khang – Bánh In Huế | Quà tặng phúc lộc thọ
- **Meta description:** Tam Khang gìn giữ tinh hoa bánh in Huế qua ba dòng bánh Phúc – Lộc – Thọ. Hộp quà thủ công, sang trọng, trọn vẹn tấm lòng.
- **Từ khóa:** bánh in Huế, quà tặng Huế, bánh in làm quà, đặc sản Huế, quà biếu Tết
- **Open Graph:** ảnh ba bánh Phúc – Lộc – Thọ trên nền bột bánh.
- **Favicon:** biểu tượng tròn của logo.

## 5. Gợi ý trải nghiệm

- Header cố định, nút Zalo và gọi điện nổi trên mobile.
- Hiệu ứng nhẹ (mây trôi, bột bánh mờ dần). Tôn trọng `prefers-reduced-motion`.
- Ảnh WebP, lazy-load, có thuộc tính `alt` tiếng Việt.
- Ngôn ngữ chính: tiếng Việt. Có thể thêm bản tiếng Anh sau.

## 6. Asset đã chuẩn bị sẵn (thư mục `public/assets`)

Logo đã được tách nền thật, chỉnh lại thành hình tròn đúng tỉ lệ và nén nhẹ cho web.

- `logo/emblem.png`, `logo/wordmark.png`, `logo/logo-stack.png`
- `logo/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`
- `images/hero-bot-banh.webp` (ảnh nền hero), `banh-phuc-loc-tho.webp`, `hop-phuc-loc-tho.webp`
- `images/hop-phuc.webp`, `hop-loc.webp`, `hop-tho.webp`, `og-image.jpg`

Ảnh sản phẩm được cắt từ file PDF nhận diện nên chỉ phù hợp làm ảnh tạm. Khi có ảnh chụp thật hoặc file gốc từ Canva, thay vào cùng tên file là xong. Còn thiếu: ảnh workshop, ảnh thiệp/tag/túi giấy, họa tiết SVG (mây, sen, hạc).

---

## 7. Checklist cần xác nhận

Đã có:
- [x] Workshop: nội dung, địa điểm, thời lượng, quy trình, thành phẩm mang về
- [x] Số điện thoại: +84 3334 333 333

Còn thiếu:
- [ ] Số điện thoại: kiểm tra lại số chữ số (xem ghi chú bên dưới)
- [ ] Workshop: lịch các ca, giá, số người mỗi ca, độ tuổi, cách đăng ký, địa chỉ cụ thể
- [ ] Linh vật từng dòng bánh (nai hay trâu cho Phúc; rồng hay phượng cho Lộc)
- [ ] Ý nghĩa tên "Tam Khang" và câu chuyện thương hiệu
- [ ] Hương vị, nguyên liệu, khối lượng, giá, hạn dùng từng dòng bánh
- [ ] Có bán combo, gift card, đơn doanh nghiệp không
- [ ] Cách đặt hàng và giao hàng (Zalo, form, ship toàn quốc?)
- [ ] Zalo, địa chỉ cửa hàng, email, giờ mở cửa, mạng xã hội, tên miền thật

> Ghi chú số điện thoại: +84 3334 333 333 có 10 chữ số sau +84, trong khi số di động Việt Nam thường có 9 chữ số sau +84 (ví dụ +84 333 433 333).
