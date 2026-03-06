# Conserve Natural Forests - Project Notes

## Overview

เว็บไซต์ Conserve Natural Forests (CNF) - องค์กรไม่แสวงหากำไรด้านการอนุรักษ์ป่า ตั้งอยู่ที่อำเภอปาย จ.แม่ฮ่องสอน
กำลังย้ายจาก **WordPress (Divi Theme)** มาเป็น **React + Vite + Tailwind CSS v4**

---

## Tech Stack

| เทคโนโลยี | เวอร์ชัน | หมายเหตุ |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 7 | Build tool |
| Tailwind CSS | 4 | Utility-first CSS (ใช้ระบบ CSS Layers) |
| react-router-dom | latest | Client-side routing |
| Font: Lato | - | ใช้กับ heading, ปุ่ม, เมนู |
| Font: Open Sans | - | ใช้กับ body text ทั่วไป |

---

## เครื่องมือ

### SingleFile Cleaner (`tools/singlefile-cleaner.html`)

เครื่องมือ HTML แบบเปิดในเบราว์เซอร์ ใช้ทำความสะอาดไฟล์ที่บันทึกด้วย SingleFile extension
เพื่อลดขนาดจาก 4-5MB เหลือ ~100-200KB ให้อ่านโครงสร้างได้ง่าย

**วิธีใช้:**
1. เปิดไฟล์ `tools/singlefile-cleaner.html` ในเบราว์เซอร์
2. ลาก .html ที่ได้จาก SingleFile มาวาง
3. เลือก option ที่ต้องการลบ (base64 images/fonts, scripts, SVG, etc.)
4. กด Download HTML ที่ cleaned แล้วนำไปวางในโฟลเดอร์ `old/`

**ตัวเลือกที่ลบได้:**
- base64 images (แทนด้วย waiting.jpg)
- base64 fonts
- `<script>` ทั้งหมด
- inline SVG
- YouTube iframe srcdoc
- element ที่ซ่อน (sf-hidden, display:none)
- HTML comments
- --sf-img CSS variables

---

## โครงสร้างโฟลเดอร์

```
conservenaturalforests/
├── index.html                  # HTML entry point + Google Fonts
├── package.json
├── vite.config.js
├── PROJECT_NOTES.md            # ไฟล์นี้
│
├── tools/
│   └── singlefile-cleaner.html # เครื่องมือลดขนาดไฟล์ SingleFile
│
├── old/                        # ไฟล์เว็บเดิมจาก WordPress (SingleFile - cleaned)
│   ├── Home - Conserve Natural Forests.html
│   ├── Contact - Conserve Natural Forests.html
│   └── extracted_key_styles.css  # CSS ที่ดึงจากต้นฉบับ (Home)
│
├── public/
│   └── waiting.jpg             # placeholder สำหรับรูปทั้งหมด (ใส่เอง)
│
└── src/
    ├── main.jsx                # React entry point
    ├── index.css               # Tailwind config + custom styles (@layer base/components)
    ├── App.jsx                 # Router setup + Layout (ซ่อน shared Footer ในหน้าที่มี footer เอง)
    │
    ├── components/
    │   ├── shared/             # ส่วนที่ใช้ร่วมกันทุกหน้า
    │   │   ├── Header.jsx      # เมนูด้านบน (fixed, เปลี่ยนสีตอน scroll)
    │   │   └── Footer.jsx      # ด้านล่าง (4 คอลัมน์ + copyright) - ใช้กับหน้าทั่วไป
    │   │
    │   └── home/               # Components เฉพาะหน้า Home (บางตัวใช้ร่วมกับหน้าอื่นได้)
    │       ├── HeroSlider.jsx          # สไลด์โชว์ 5 ภาพ (auto-play 6.5 วินาที)
    │       ├── WelcomeSection.jsx      # ข้อความต้อนรับ + ปุ่ม ABOUT US
    │       ├── VideosSection.jsx       # YouTube 2 คลิป
    │       ├── PrioritiesSection.jsx   # OUR PRIORITIES - 5 หัวข้อสลับซ้ายขวา
    │       ├── NetworkSection.jsx      # OUR NETWORK - โลโก้พาร์ทเนอร์ 4 อัน (ใช้ในหน้า Contact ด้วย)
    │       ├── ContactDonateSection.jsx # ฟอร์มติดต่อ + Donate CTA (parallax bg)
    │       └── InstagramSection.jsx    # Instagram feed placeholder (เฉพาะหน้า Home)
    │
    └── pages/
        ├── Home.jsx            # หน้าแรก (รวม components จาก home/)
        ├── Contact.jsx         # หน้าติดต่อ (มี footer ของตัวเอง พร้อม Newsletter form)
        ├── Internship.jsx      # หน้าสมัครฝึกงาน (Hero, Intro, FAQ toggles, Apply form)
        ├── VisitUs.jsx         # หน้าเยี่ยมชม (Hero, About, Parallax info, Reviews slider, Booking form, Contact+Donate)
        ├── Donate.jsx          # หน้าบริจาค (Hero, Project Cards, Mitigation, Restoration Sites, Carbon Footprint, Donation Calculator, Contact form+QR, Network)
        └── about-us/           # โฟลเดอร์สำหรับหน้าย่อย About Us (ยังว่าง)
```

---

## เมนูและ Routing

```
เมนู                              URL Path                          สถานะ
─────────────────────────────────────────────────────────────────────────
Home                              /                                  ✅ เสร็จ
About Us (dropdown)               #
├── Forest Restoration            /forest-restoration                ⬜ ยังไม่ได้ทำ
├── Local Livelihoods             /local-livelihoods                 ⬜ ยังไม่ได้ทำ
├── Wildlife Conservation         /wildlife-conservation             ⬜ ยังไม่ได้ทำ
├── Ecosystem Services            /ecosystem-services                ⬜ ยังไม่ได้ทำ
│   ├── Carbon Sequestration      /ecosystem-services#carbon         ⬜ (anchor ในหน้าเดียวกัน)
│   ├── Functional Biodiversity   /ecosystem-services#biodiversity   ⬜ (anchor ในหน้าเดียวกัน)
│   └── Soil & Water              /ecosystem-services#soil           ⬜ (anchor ในหน้าเดียวกัน)
└── Our Team                      /our-team                          ⬜ ยังไม่ได้ทำ
Visit Us                          /visit-us                          ✅ เสร็จ
Apply for an Internship           /apply-for-an-internship           ✅ เสร็จ
Contact                           /contact                           ✅ เสร็จ
Donate                            /donate                            ✅ เสร็จ
```

---

## Workflow การสร้างหน้าใหม่

1. เปิดหน้าเว็บเดิมใน browser แล้วบันทึกด้วย **SingleFile** extension
2. นำไฟล์ .html ไปเปิดใน **`tools/singlefile-cleaner.html`** เพื่อลบ base64, script, font
3. Download ไฟล์ cleaned แล้ววางใน `old/`
4. Claude อ่านไฟล์ cleaned แล้วสร้าง React component ใหม่ใน `src/pages/`
5. เพิ่ม route ใน `App.jsx`

---

## หน้าที่มี Footer เฉพาะ

บางหน้ามี footer ของตัวเองที่ต่างจาก shared Footer:

| หน้า | ความแตกต่าง |
|---|---|
| **Contact** (`/contact`) | footer สี `#2b2b2b` มี Newsletter signup form (First/Last Name, Email, Subscribe) แทนที่ shared Footer สี `#222222` |

**วิธีจัดการ:** ใน `App.jsx` มี array `pagesWithOwnFooter` — หน้าในลิสต์นี้จะไม่แสดง shared Footer

---

## Design System (ค่าจาก CSS ต้นฉบับ)

### สี

| ชื่อ | ค่า | ใช้ที่ |
|---|---|---|
| Primary Green | `#78c922` | ปุ่ม, เมนู active, divider, border |
| Primary Hover | `#7edd25` | ปุ่ม hover |
| Body Text | `#666666` | ข้อความทั่วไป |
| Heading | `#333333` | หัวข้อ |
| Header BG | `rgba(43,43,43,0.68)` | เมนูบนสุด (โปร่งแสง) |
| Header Fixed | `#2b2b2b` | เมนูเมื่อ scroll ลง |
| Menu Text | `#e8e8e8` | ตัวอักษรเมนู |
| Menu Active | `#78c922` | เมนูที่เลือกอยู่ |
| Dropdown BG | `#2b2b2b` | พื้นหลัง dropdown |
| Dropdown Text | `#c1c1c1` | ตัวอักษรใน dropdown |
| Footer BG | `#222222` | พื้นหลัง footer หลัก (shared) |
| Footer Bottom | `#161616` | พื้นหลัง copyright bar |
| Contact Footer BG | `#2b2b2b` | พื้นหลัง footer หน้า Contact |
| Facebook | `#3b5998` | ไอคอน social |
| Instagram | `#ea2c59` | ไอคอน social |
| LinkedIn | `#007bb6` | ไอคอน social |
| Section BG | `#f7f7f7` | พื้นหลังส่วน Our Priorities |

### Typography

| ส่วน | Font | Size | Weight | อื่นๆ |
|---|---|---|---|---|
| Body | Open Sans | 14px | 500 | line-height: 1.7em, color: #666 |
| Menu | Lato | 16px | bold | uppercase, letter-spacing: 2px |
| ปุ่ม | Lato | 18-20px | 700 | uppercase, letter-spacing: 2px |
| Slide Title | Lato | 40-66px (responsive) | 700 | letter-spacing: 1px, text-shadow |
| Section Title | - | 26-30px | 300-700 | - |
| Contact Title | Open Sans | 24px | 700 | - |

### ปุ่ม (Divi Style)

ทุกปุ่มใช้ class `.btn-divi` + variant:

```
.btn-divi           = base (border #78c922, radius 6px, Lato 700, letter-spacing 2px)
.btn-divi-green     = ขอบเขียว บนพื้นขาว (color: #000, bg: transparent)
.btn-divi-white     = บนพื้นมืด (color: #fff, bg: rgba(0,0,0,0.55))
.btn-divi-dark      = เหมือน white (ใช้แทนกันได้)
```

Hover ทุกตัว: bg เปลี่ยนเป็น `#7edd25` + แสดงลูกศร `›`

### Divider

เส้นแบ่งหัวข้อ: สีเขียว `#78c922`, หนา 5px, กว้างสูงสุด 10% ของ container, อยู่กลาง

---

## รูปภาพ

- **ทุกรูปใช้ `/waiting.jpg`** เป็น placeholder
- ผู้ใช้จะใส่รูปจริงย้อนหลังเอง (รวมถึงโลโก้)
- รูปต้นฉบับอยู่ใน HTML เดิมเป็น base64 (ดึงออกมาได้ถ้าต้องการ)

---

## ⚠️ สิ่งสำคัญที่ต้องระวัง

### Tailwind CSS v4 + CSS Layers

Tailwind v4 ใช้ระบบ **CSS Cascade Layers**:

```
@layer base       ← ต่ำสุด (reset, preflight)
@layer components  ← กลาง (custom components)
@layer utilities   ← สูงสุดใน layers (Tailwind classes)
```

**กฎเหล็ก:**
1. ❌ **ห้ามเขียน CSS นอก @layer** - มันจะทับ Tailwind utilities ทั้งหมด
2. ❌ **ห้ามเขียน `* { margin: 0; padding: 0; }`** - Tailwind มีอยู่แล้วใน base
3. ✅ Base styles (body, html) → ใส่ใน `@layer base { }`
4. ✅ Custom components (.btn-divi) → ใส่ใน `@layer components { }`
5. ✅ Tailwind utility classes (py-20, gap-8) ทำงานปกติเพราะอยู่ใน `@layer utilities`

### การอ่านไฟล์ old/

ไฟล์ HTML จาก SingleFile มีขนาดใหญ่มาก (4.5MB+) เพราะฝัง base64:
- ใช้ `tools/singlefile-cleaner.html` ลดขนาดก่อนอ่าน
- หรือใช้ Node.js script ดึง content ออกมา (ลบ base64 ก่อน)
- CSS ที่ extract แล้วอยู่ที่ `old/extracted_key_styles.css`

---

## YouTube Videos (หน้า Home)

| ชื่อ | Video ID |
|---|---|
| Introduction to CNF | `u9ImqFfHe00` |
| CNF Reforestation Video | `vskkcqTAhUs` |

## Social Links

- Facebook: https://facebook.com/conservenaturalforests
- Instagram: https://instagram.com/conservenaturalforests
- LinkedIn: https://linkedin.com/company/conserve-natural-forests
- Email: info@conservenaturalforests.org

## Google Maps

Embed URL ใน Footer:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.530688187357!2d98.44596541497846!3d19.259274786983084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da87239b0caed9%3A0x87df33d7cdd6426f!2sConserve%20Natural%20Forest!5e0!3m2!1sen!2suk!4v1575918651155!5m2!1sen!2suk
```

---

## Partner Links (OUR NETWORK)

| ชื่อ | URL |
|---|---|
| Arbor Day | https://www.arborday.org/ |
| EcoMatcher | https://www.ecomatcher.com/cnf/ |
| Plant for the Planet | https://www1.plant-for-the-planet.org/conserve-natural-forests |
| One Tree Planted | https://onetreeplanted.org/ |
