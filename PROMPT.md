# Tam Khang – Bánh In Huế · Prompt cho Antigravity

> **Cách dùng:** giải nén bộ kit, mở thư mục trong Antigravity, chọn Planning mode, rồi gửi một câu cho agent:
> *"Đọc PROMPT.md và BRIEF.md, sau đó làm theo. Cho tôi xem Implementation Plan trước khi code."*
>
> Phần dưới viết bằng tiếng Anh để agent hiểu chính xác (giống template gốc). Nội dung hiển thị trên website là tiếng Việt.

---

## 1. Goal

Build a **complete, multi-page, fully responsive website** for **"Tam Khang – Bánh In Huế"**, a premium gift confectionery selling Huế "bánh in" (molded cakes) in three lines: **Phúc, Lộc, Thọ**.

Reuse the **visual system of the hero template** (rounded hero frame, floating pill navbar, centered headline, preview tray that bleeds off the bottom edge), re-skinned for this brand, then extend it into a full site.

- Stack: **Vite + React + TypeScript + Tailwind CSS + react-router-dom + lucide-react**
- UI language: **Vietnamese** (`<html lang="vi">`)
- All page copy lives in `BRIEF.md`. Hero, navbar, product cards and footer copy is in this file.
- **Never invent facts.** Prices, flavors, ingredients, shelf life, shop address, email, opening hours, Zalo, social links, and the workshop schedule / price / capacity / booking method are unknown. Store them as `null` in the data files and render a visible muted chip `[Cập nhật]` wherever they would appear. The **phone number** and the **workshop facts** are provided (see section 8).

## 2. Assets (already in `/public/assets`)

| File | Use |
|---|---|
| `logo/emblem.png` | Round emblem. Navbar, footer, story page. Transparent, already corrected to a true circle. |
| `logo/wordmark.png` | "TAM KHANG" gold wordmark. Navbar (≥ sm) and footer. Transparent. |
| `logo/logo-stack.png` | Full vertical lockup (emblem + name + "BÁNH IN HUẾ"). Story page, CTA band. Transparent. |
| `logo/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Favicons and web manifest. |
| `images/hero-bot-banh.webp` | **Static hero background** (flour with soft leaf shadows). Replaces the video. |
| `images/banh-phuc-loc-tho.webp` | Photo of the three cakes on flour. Home "ba lời chúc" section, collection page header. |
| `images/hop-phuc-loc-tho.webp` | Photo of the three boxes. Gift section and gifts page. |
| `images/hop-phuc.webp`, `hop-loc.webp`, `hop-tho.webp` | One box per product. Product cards and detail pages. |
| `images/og-image.jpg` | Open Graph / social share image (1200×630). |

Rules: use **only** these images. No video, no Unsplash, no remote images, no placeholder photo services. If a section needs a photo that does not exist, use a solid `kem` block with the Phúc/Lộc/Thọ tint and a short caption. Do not create new logo files and do not re-add a checkerboard.

## 3. Design tokens

Extend `tailwind.config` (or `@theme`) with these names and use them everywhere. Do not introduce other colors.

| Token | Hex | Use |
|---|---|---|
| `kem` | `#F5EBD4` | Page background (replaces `#ededed`) |
| `kem-nhat` | `#FBF6EA` | Navbar pill, preview tray, light cards (replaces `#f5f2ee` / white) |
| `do` | `#BE3232` | Primary accent (replaces orange `#ef4d23`) |
| `xanh` | `#2E6E5A` | Dark sections, Phúc accent |
| `vang` | `#D4A760` | Hairlines, icons, dividers |
| `nau` | `#8B5E3C` | Secondary text |
| `nau-dam` | `#4A2E1B` | Headings, body text, dark CTA (replaces `#0b0f1a`) |

Product accents: **Phúc** `#2E6E5A` on tint `#DCE8DC` · **Lộc** `#BE3232` on tint `#F6DAD7` · **Thọ** `#B8863A` on tint `#F3E4BC`.

### Fonts (`/src/styles/fonts.css`)

Import from Google Fonts with `display=swap`:
- **Cormorant Garamond**: 500, 600 + italic 500 (headings, product names, italic accent)
- **Be Vietnam Pro**: 400, 500, 600 (body, UI)

Both fully support Vietnamese diacritics. This replaces Inter and Instrument Serif from the template, which may not render stacked Vietnamese diacritics (ế, ượ, ữ…) well. `body { font-family: 'Be Vietnam Pro', system-ui, sans-serif }` and a `.font-heading` utility for Cormorant.

Typography rules: sentence case everywhere (no all-caps eyebrow labels), body line length under 75 characters, serif headings with slightly looser line-height than the sans body.

## 4. Page frame (Home)

- Outer wrapper: `min-h-screen w-full bg-kem p-3 sm:p-4`
- Hero container (clips everything inside): `relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#E9DDBF] rounded-2xl sm:rounded-3xl`
- **Background image, not video.** Remove every `<video>` and all video attributes. Use:
  ```tsx
  <img
    src="/assets/images/hero-bot-banh.webp"
    alt=""
    width={1920} height={1280}
    fetchPriority="high" decoding="async"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />
  ```
- Overlay above the image: `absolute inset-0 bg-kem-nhat/20`
- Foreground wrapper: `relative z-10`
- Add `<link rel="preload" as="image" href="/assets/images/hero-bot-banh.webp">` in `index.html`.

## 5. Navbar (floating pill, hamburger below `lg`)

Use `lg` (not `md`) as the desktop breakpoint, because there are six links.

- Wrapper: `flex justify-center pt-4 sm:pt-6 px-3 sm:px-4`
- Pill: `bg-kem-nhat/95 backdrop-blur rounded-full shadow-sm border border-[#E6D5AE] pl-2 pr-2 py-2 w-full max-w-[940px] relative`
- **Logo (left, shrink-0, links to `/`):** `emblem.png` at `w-8 h-8 sm:w-9 sm:h-9 object-contain`, plus `wordmark.png` at `h-4` shown from `sm` up. Alt text: "Tam Khang – Bánh In Huế". Replaces the orange flower SVG.
- **Desktop links** (`hidden lg:flex gap-6 text-[14px] text-nau-dam`):
  "Trang chủ" (active link gets a 1.5px `do` dot before it) · "Câu chuyện" · "Bộ sưu tập" (colored `do`, with `ChevronDown` 3.5, opens a small dropdown: Phúc / Lộc / Thọ / "Xem tất cả") · "Quà tặng" · "Workshop" (hide if `SITE.workshop.enabled` is false) · "Liên hệ"
- **Right cluster (`ml-auto`):**
  - `Phone` icon button (hidden on mobile). `href={SITE.phoneHref}`, with `aria-label="Gọi Tam Khang"` and the number in the tooltip. Replaces `ShoppingCart`.
  - `do` rounded-full button: "Đặt hộp quà" (desktop) / "Đặt hàng" (mobile), with a `bg-white/20` inner circle holding `ChevronRight`. Links to `/qua-tang#dat-hang`.
- **Mobile:** `Menu`/`X` hamburger (`lg:hidden`). Open panel: `absolute top-full left-2 right-2 mt-2 bg-kem-nhat rounded-2xl shadow-lg border border-[#E6D5AE] p-3 z-20`, same items listed vertically (product links indented under "Bộ sưu tập"). `useState` toggles it. Close on route change and on `Escape`.
- On pages other than Home, render the same navbar over a plain `kem` background, no hero frame.

## 6. Hero content (Home, centered)

Container: `flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center`

- **Badge:** `inline-flex items-center gap-2 bg-kem-nhat rounded-full px-4 py-1.5 shadow-sm text-[13px]`, a `do` dot + "Tam Khang · Bánh In Huế"
- **H1** (`.font-heading`, inline style `fontSize: clamp(40px, 8vw, 80px); lineHeight: 1.05; fontWeight: 500; letterSpacing: -0.01em`, `mt-5 sm:mt-6 max-w-4xl text-nau-dam`):
  `Tinh hoa ` + `<span className="italic text-do">bánh in Huế</span>` + `, trao gửi phúc lộc thọ`
- **Subtitle** (`mt-4 sm:mt-6 text-nau px-2 max-w-xl`, `fontSize: clamp(14px, 3.5vw, 17px)`):
  "Gìn giữ hương vị truyền thống, lan tỏa giá trị văn hóa Việt qua từng chiếc bánh in tinh tế."
- **CTA row** (`mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4`):
  - Primary: `inline-flex items-center gap-3 bg-nau-dam text-kem-nhat rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px]`, "Khám phá bộ sưu tập" + `w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15` holding `ChevronRight` (4×4). Links to `/bo-suu-tap`.
  - Secondary: text link with underline, "Xem hộp quà tặng", links to `/qua-tang`.

## 7. Collection preview tray (replaces the dashboard)

Delete `DashboardPreview.tsx` and `Gauge.tsx`. Create `CollectionPreview.tsx`.

- Outer: `px-3 sm:px-4`
- Tray: `bg-kem-nhat rounded-3xl p-4 sm:p-6 w-full max-w-[920px] mx-auto`
- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4`
- **Three product cards**, order Phúc → Lộc → Thọ, each `bg-white rounded-2xl p-4`, each links to `/bo-suu-tap/:slug`:
  1. Header row: product name in the product accent (`.font-heading`, 24px, weight 600) on the left, "Hộp 3 bánh" (13px, `text-nau`) on the right.
  2. Image container `aspect-[4/5] rounded-xl overflow-hidden` with the product tint as background; `hop-*.webp` with `object-cover object-top`.
  3. Meaning line (15px): the `meaning` field. Below it the one-line `tagline` (13px, `text-nau`).
  4. Footer: "Xem chi tiết" + a circle with `ChevronRight` filled with the product accent.
- Whole hero (image + content + tray) is clipped together by the rounded container, so the cards **bleed off the bottom edge**, exactly like the template.

## 8. Data files (single source of truth)

`src/app/data/site.ts`
```ts
export const SITE = {
  name: "Tam Khang",
  fullName: "Tam Khang – Bánh In Huế",
  slogan: "Tinh hoa bánh in Huế, trao gửi phúc lộc thọ",
  description: "Gìn giữ hương vị truyền thống, lan tỏa giá trị văn hóa Việt qua từng chiếc bánh in tinh tế.",
  phone: "+84 3334 333 333" as string | null,   // display format
  phoneHref: "tel:+843334333333",                // use for every tel: link
  zalo: null as string | null,
  email: null as string | null,
  address: null as string | null,
  hours: null as string | null,
  social: { facebook: null, instagram: null, tiktok: null } as Record<string, string | null>,
  workshop: { enabled: true },    // facts provided by the owner, see WORKSHOP
};
```

`src/app/data/products.ts`
```ts
export const PRODUCTS = [
  { slug: "phuc", name: "Phúc", meaning: "Bình an, may mắn",
    tagline: "Sắc xanh dịu gửi lời chúc bình an đến mái ấm.",
    accent: "#2E6E5A", tint: "#DCE8DC", image: "/assets/images/hop-phuc.webp",
    mascot: null, flavor: null, ingredients: null, weight: null, price: null, shelfLife: null },
  { slug: "loc", name: "Lộc", meaning: "Tài lộc, thịnh vượng",
    tagline: "Sắc hồng may mắn gửi lời chúc hanh thông, đủ đầy.",
    accent: "#BE3232", tint: "#F6DAD7", image: "/assets/images/hop-loc.webp",
    mascot: null, flavor: null, ingredients: null, weight: null, price: null, shelfLife: null },
  { slug: "tho", name: "Thọ", meaning: "Sức khỏe, trường thọ",
    tagline: "Sắc vàng ấm áp gửi lời chúc khỏe mạnh, bền lâu.",
    accent: "#B8863A", tint: "#F3E4BC", image: "/assets/images/hop-tho.webp",
    mascot: "Hạc", flavor: null, ingredients: null, weight: null, price: null, shelfLife: null },
] as const;
```

`src/app/data/workshop.ts` (facts provided by the owner; keep wording as is)
```ts
export const WORKSHOP = {
  title: "Workshop trải nghiệm tại làng bánh Kim Long",
  subtitle: "Tự tay làm bánh in Huế, mang về hộp quà do chính bạn tạo tác.",
  location: "Nhà vườn / cơ sở liên kết làng nghề bánh in Kim Long, TP. Huế",
  duration: "60 – 90 phút / ca trải nghiệm",
  takeaway:
    "Mỗi khách tự đóng gói 01 hộp quà 8 hoặc 16 bánh in do chính tay mình tạo tác, mang về làm kỷ niệm hoặc tặng người thân (kèm chứng nhận trải nghiệm văn hóa).",
  steps: [
    { icon: "BookOpen", text: "Nghe nghệ nhân kể chuyện về bánh in tiến vua và văn hóa cúng Tết." },
    { icon: "Wheat",    text: "Tự tay phối trộn bột đậu xanh chuẩn tỉ lệ sấy khô." },
    { icon: "Stamp",    text: "Chọn bộ khuôn gỗ truyền thống, tự tay ép nén bánh." },
    { icon: "Flame",    text: "Trải nghiệm công đoạn sấy nhiệt nhẹ và gói giấy bóng ngũ sắc." },
    { icon: "Coffee",   text: "Thưởng thức bánh nóng mới ra lò cùng trà sen / trà cung đình tại chỗ." },
  ],
  // unknown: render <Pending /> wherever shown
  schedule: null, price: null, capacity: null, minAge: null, booking: null, exactAddress: null,
} as const;
```
The "bột đậu xanh" in step 2 describes the workshop activity only. Do not present it as an ingredient of the Phúc / Lộc / Thọ products.

Create one tiny component `<Pending />` that renders the muted chip `[Cập nhật]`. Use it for every `null` value. Mascots for Phúc and Lộc are intentionally `null` (the brand deck is inconsistent: deer vs buffalo, phoenix vs dragon).

## 9. Routes and pages

Use `react-router-dom`. Add `<ScrollToTop />`, per-page `document.title` ("Tên trang | Tam Khang – Bánh In Huế") and meta description.

| Route | Page | Source of copy |
|---|---|---|
| `/` | Home: hero (sections 4–7), then the sections in 10 | This file + `BRIEF.md` §3.1 |
| `/cau-chuyen` | Story: story text, meaning of the logo (use `logo-stack.png`), meaning of the name, packaging motifs | `BRIEF.md` §3.2 |
| `/bo-suu-tap` | Collection: header with `banh-phuc-loc-tho.webp`, three large product cards | `BRIEF.md` §3.3 |
| `/bo-suu-tap/:slug` | Product detail (shared template, driven by `PRODUCTS`) | `BRIEF.md` §3.3 |
| `/qua-tang` | Gifts + order form (anchor `#dat-hang`) | `BRIEF.md` §3.4 |
| `/workshop` | Workshop (enabled). Data from `WORKSHOP`, layout below, copy in `BRIEF.md` §3.5. If `SITE.workshop.enabled` is ever set to false, redirect to `/` and hide every workshop link | `BRIEF.md` §3.5 |
| `/lien-he` | Care guide, FAQ, contact, map placeholder | `BRIEF.md` §3.6, §3.7 |
| `*` | Friendly 404 with a link home | n/a |

**Workshop page layout (`/workshop`).**
1. Header: `WORKSHOP.title` as H1 (`.font-heading`), `WORKSHOP.subtitle` below, and `banh-phuc-loc-tho.webp` as the image (no workshop photos exist yet; leave a code comment `TODO: replace with workshop photo`). Buttons: primary "Gọi đăng ký" (`href={SITE.phoneHref}`, `Phone` icon) and secondary "Gửi yêu cầu đăng ký" (scrolls to the form).
2. Three fact tiles with lucide icons: `MapPin` Địa điểm, `Clock` Thời lượng, `Gift` Mang về. Values come from `WORKSHOP.location`, `.duration`, and a short version of `.takeaway`.
3. "Quy trình tham gia": the five steps as a vertical timeline. This content is a genuine sequence, so numbering is appropriate. Use the icon named in each step (`BookOpen`, `Wheat`, `Stamp`, `Flame`, `Coffee`), a thin `vang` connector line, and `kem-nhat` cards.
4. "Thành phẩm mang về": the `.takeaway` sentence, with a highlighted chip "Kèm chứng nhận trải nghiệm văn hóa".
5. "Thông tin đăng ký" panel listing Lịch các ca, Giá, Số người mỗi ca, Độ tuổi tham gia, Cách đăng ký, Địa chỉ cụ thể. Render each with `<Pending />` until the owner fills it in.
6. Registration form, same no-backend pattern as the order form. Fields: Họ tên, Số điện thoại, Ngày mong muốn, Số người, Ghi chú. After validation show the composed message with "Sao chép nội dung", "Gọi ngay" (tel link) and "Gửi qua Zalo" (only if `SITE.zalo` exists).

**Order form (no backend).** Fields: Họ tên, Số điện thoại, Sản phẩm, Số lượng, Ngày cần nhận, Địa chỉ nhận, Lời nhắn in trên thiệp, Ghi chú. On submit, validate and show the composed message with two actions: "Sao chép nội dung" and "Gửi qua Zalo" (only if `SITE.zalo` exists; otherwise show `<Pending />`). Labels above inputs, clear error text under the field, no `<form>` submit navigation.

## 10. Home sections after the hero

Plain `kem` background, `max-w-6xl mx-auto px-4 sm:px-6`, generous vertical spacing. Keep copy from `BRIEF.md` §3.1.

1. **Vì sao chọn Tam Khang:** four points (nguyên liệu chọn lọc từ thiên nhiên · hương vị truyền thống đậm đà Huế · thủ công tinh xảo, gói trọn tình bánh Việt · thích hợp làm quà tặng ý nghĩa). Icons from lucide: `Wheat`, `Leaf`, `HandHeart`, `Gift`, line style, color `vang`.
2. **Ba lời chúc:** two columns, `banh-phuc-loc-tho.webp` (rounded-3xl) beside the Phúc / Lộc / Thọ meanings.
3. **Quà tặng, gói trọn tấm lòng:** `hop-phuc-loc-tho.webp` plus the gift description, button "Xem các lựa chọn quà tặng".
4. **Workshop teaser:** heading "Tự tay làm chiếc bánh in của riêng bạn", one line "Workshop 60 – 90 phút tại làng bánh Kim Long: nghe nghệ nhân kể chuyện, tự ép khuôn và mang về hộp bánh do chính tay bạn làm.", button "Xem workshop" linking to `/workshop`. Render only if `SITE.workshop.enabled`.
5. **Câu chuyện:** `emblem.png` with a short story excerpt and a link to `/cau-chuyen`.
6. **Hỏi đáp:** 4 FAQ items in an accessible accordion (`button` + `aria-expanded`). Answers that are unknown render `<Pending />`.
7. **CTA band:** `bg-xanh` rounded-3xl, `logo-stack.png`, heading "Gửi một lời chúc phúc lộc thọ", button "Đặt hàng ngay" (`do`).
8. **Footer:** `bg-nau-dam text-kem`, `wordmark.png` + slogan, quick links, contact block (phone shown as a `tel:` link, everything else `<Pending />` until filled), social icons only for links that exist.

Also add a floating **"Gọi"** button on mobile (bottom-right) using `SITE.phoneHref` (the phone is set, so it shows). Add a second floating **"Zalo"** button only when `SITE.zalo` exists.

## 11. Behavior and quality bar

- **No custom animations.** Only hover and focus states, the dropdown/menu toggles and the accordion. Respect `prefers-reduced-motion`.
- Visible keyboard focus (`focus-visible:ring-2 ring-do`) on every interactive element, text contrast at least AA, tap targets at least 44px on mobile.
- All images have meaningful Vietnamese `alt` text (the hero background uses `alt=""`), explicit `width`/`height`, and `loading="lazy"` below the fold.
- Navbar collapses to a hamburger below `lg`. Headline and CTA scale via `clamp()`. Tray grid steps 1 → 2 → 3 columns. No horizontal scroll at 375px.
- Page background `kem`, no pure white sections. Cards may be white or `kem-nhat`.

## 12. Meta, favicon, manifest

In `index.html`: `lang="vi"`, title "Tam Khang – Bánh In Huế | Quà tặng phúc lộc thọ", description from `SITE.description`, Open Graph and Twitter tags using `/assets/images/og-image.jpg`, `theme-color` `#F5EBD4`, icons (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`) and `site.webmanifest` using `icon-192.png` and `icon-512.png`.

## 13. File structure

```
index.html
public/assets/...                      (already provided)
src/main.tsx
src/styles/fonts.css
src/styles/index.css                   (tailwind layers + tokens)
src/app/App.tsx                        (router + layout)
src/app/data/site.ts
src/app/data/products.ts
src/app/data/workshop.ts
src/app/components/Navbar.tsx
src/app/components/Hero.tsx
src/app/components/CollectionPreview.tsx
src/app/components/ProductCard.tsx
src/app/components/Pending.tsx
src/app/components/Footer.tsx
src/app/components/Faq.tsx
src/app/components/OrderForm.tsx
src/app/pages/{Home,Story,Collection,ProductDetail,Gifts,Workshop,Contact,NotFound}.tsx
```

## 14. Working agreement for the agent

1. Read `PROMPT.md` and `BRIEF.md`, then post an **Implementation Plan** and wait for approval before coding.
2. After building, run `npm run build`, then open the dev server in the browser and take screenshots of every route at **375px, 768px and 1440px**. Fix overflow, clipped text and contrast problems before reporting.
3. In the final report, list every field still showing `[Cập nhật]` so the owner knows what to fill in.
