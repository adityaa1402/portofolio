# 📘 Panduan Lengkap Pembuatan Website Portofolio Pribadi
**Aditya Saputra — Siswa Kelas XII Rekayasa Perangkat Lunak (RPL) SMKN 20 Jakarta**

Dokumen ini disusun sebagai panduan belajar komprehensif agar Anda dapat memahami arsitektur, struktur kode, dan cara kerja setiap baris kode pada website portofolio pribadi Anda. Website ini dibangun murni menggunakan **HTML5 semantik, CSS3 modern, dan Vanilla JavaScript (ES6+)**, tanpa bantuan framework seperti Bootstrap, Tailwind, React, ataupun backend server.

---

## 📑 Daftar Isi
1. [Konsep & Arsitektur Website](#1-konsep--arsitektur-website)
2. [Struktur File dan Folder](#2-struktur-file-dan-folder)
3. [Bedah Kode index.html (Struktur Halaman)](#3-bedah-kode-indexhtml-struktur-halaman)
4. [Bedah Kode style.css (Desain & Tata Letak)](#4-bedah-kode-stylecss-desain--tata-letak)
5. [Bedah Kode script.js (Interaktivitas & Logika)](#5-bedah-kode-scriptjs-interaktivitas--logika)
6. [Panduan Kustomisasi di Masa Depan](#6-panduan-kustomisasi-di-masa-depan)
7. [Panduan Meng-onlinekan Website (Hosting Gratis)](#7-panduan-meng-onlinekan-website-hosting-gratis)

---

## 1. Konsep & Arsitektur Website

### Mengapa Vanilla Web Development?
Sebagai siswa kejuruan Rekayasa Perangkat Lunak (RPL), memahami dasar teknologi web (HTML, CSS, JS murni) adalah keterampilan yang sangat krusial. Keunggulannya:
- **Performa Instan:** Waktu muat (*load time*) sangat cepat karena browser tidak perlu mengunduh library atau framework besar.
- **Tanpa Build Tools:** Tidak memerlukan Node.js, Webpack, npm, atau kompilator. Cukup klik ganda pada `index.html` dan website langsung berjalan di browser apa pun.
- **Struktur Bersih & Mandiri:** Mudah dipelihara, dipahami, dan diedit kapan saja tanpa takut error dependensi package yang kedaluwarsa.

### Filosofi Desain: Premium Dark Engineering Aesthetic
Desain ini mengadopsi tema gelap tingkat lanjut (*dark aesthetic*) yang biasa digunakan pada produk-produk developer modern (seperti Linear, Supabase, Raycast, dan GitHub):
- **Warna Dasar:** Bukan hitam pekat polos (`#000000`), melainkan **Deep Obsidian Navy (`#080d1a`)** yang dipadukan dengan permukaan kartu **Slate Navy (`#0e1726` / `#0f192d`)**.
- **Aksen Presisi:** **Electric Blue (`#3b82f6`)** dan **Ice Cyan (`#38bdf8`)** yang tajam untuk teks penting dan penanda status.
- **Latar Belakang Bertekstur:** Grid teknis halus 32px yang memberikan kesan modern dan rapi.

---

## 2. Struktur File dan Folder

```text
Portofolio Aditya/
│
├── index.html              # Berkas utama: kerangka semantik HTML5
├── style.css               # Desain visual: CSS variabel, layout grid/flexbox, efek interaksi
├── script.js               # Logika: drawer navigasi, scroll progress, scrollspy, modal popup
├── PANDUAN_PEMBUATAN.md    # Berkas dokumentasi & panduan belajar ini
│
└── assets/
    └── images/
        ├── aditya-profile.jpg       # Foto resmi almamater Aditya Saputra
        ├── profile-placeholder.svg  # Alternatif avatar vektor monogram
        ├── project-hiking.svg       # Mockup UI Website Penyewaan Alat Hiking
        ├── project-1.svg            # Mockup UI Personal Portfolio Website
        ├── project-2.svg            # Mockup UI Web Galeri Sekolah SMKN 20 Jakarta
        └── project-3.svg            # Mockup UI Website Simulasi Bank Syariah
```

---

## 3. Bedah Kode `index.html` (Struktur Halaman)

File `index.html` tersusun atas elemen semantik HTML5. Berikut adalah bagian-bagian pentingnya:

### 1. Bagian `<head>`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Memastikan website tampil proporsional pada layar ponsel pintar dan tablet.
- Google Fonts: Memuat dua jenis font:
  - **Inter:** Font modern tanpa kait (*sans-serif*) dengan keterbacaan tinggi untuk isi teks.
  - **JetBrains Mono:** Font monospace yang memberikan kesan developer/teknis pada badge, tanggal, dan tag teknologi.
- Font Awesome CDN: Menyediakan ikon vektor ringan (WhatsApp, Envelope, Location, Code, dll).

### 2. Header & Navbar (`<header class="navbar">`)
- **Logo Inisial:** Menggunakan badge monogram `AS` dan teks `Aditya.dev`.
- **Menu Navigasi:** Berisi tautan internal (`#home`, `#about`, `#skills`, `#projects`, `#education`, `#contact`).
- **Tombol Hamburger (`.menu-toggle`):** Terdiri dari tiga baris `<span>` yang akan berubah menjadi tanda silang (`X`) di layar smartphone.

### 3. Hero Section (`<section id="home">`)
- Bagian perkenalan utama.
- **Status Badge:** Menampilkan badge `Kelas XII Rekayasa Perangkat Lunak • SMKN 20 Jakarta` dengan lampu hijau (*status dot*) berkedip halus.
- **Nama & Profesi:** `Aditya Saputra` dengan sub-judul `Junior Web Developer & Siswa RPL`.
- **Tombol CTA:** *"Lihat Proyek & Karya"* (menggulir ke `#projects`) dan *"Hubungi Saya"* (menggulir ke `#contact`).
- **Statistik Cepat:** Menampilkan 3 metrik ringkas: `XII RPL` (Kelas & Jurusan), `SMKN 20` (Sekolah Kejuruan), dan `4+` (Proyek Web Selesai).
- **Kartu Foto Profil:** Memuat foto resmi almamater Anda dari `assets/images/aditya-profile.jpg`.

### 4. About Me (`<section id="about">`)
- Menampilkan narasi resmi profil Anda sesuai CV.
- **Kartu Pengalaman Organisasi OSIS:** Kotak khusus yang menyoroti pengalaman kepemimpinan Anda saat pernah menjabat sebagai **Ketua Seksi Bidang Tata Tertib dan Lingkungan Hidup — OSIS SMKN 20 Jakarta**.
- **Kartu Fakta Diri:** Informasi cepat mengenai sekolah, kelas, kejuruan, dan domisili di Jakarta Selatan.

### 5. Skills Section (`<section id="skills">`)
Dibagi secara terstruktur tanpa persentase arbitrer yang tidak realistis:
1. **Hard Skills — Web & Database:** HTML, CSS, JavaScript, MySQL, PHP, Laravel.
2. **Hard Skills — Tools & AI:** ChatGPT, Gemini, Microsoft Office, VS Code, Git.
3. **Soft Skills:** Manajemen Waktu, Kolaborasi Tim, Problem Solving.
4. **Karakter & Etika Belajar:** Jiwa Kepemimpinan dan *Continuous Learning*.

### 6. Projects Section (`<section id="projects">`)
Grid 2×2 berisi 4 proyek nyata:
1. **Website Penyewaan Alat Hiking / Naik Gunung** *(Proyek Baru)*
2. **Web Galeri Sekolah SMKN 20 Jakarta**
3. **Website Simulasi Bank Syariah**
4. **Personal Portfolio Website**

> **Penting Mengenai Tombol Proyek:**
> Setiap kartu proyek memiliki tombol `<button class="btn-project">` yang dilengkapi atribut HTML5 kustom (`data-name`, `data-category`, `data-desc`, `data-features`, `data-tech`). Nilai atribut ini akan dibaca secara dinamis oleh JavaScript saat tombol diklik untuk menampilkan modal penjelasan lengkap tanpa perlu tautan GitHub eksternal.

### 7. Education Section (`<section id="education">`)
Timeline vertikal berurutan:
- **SMK Negeri 20 Jakarta** (2024 – 2027) — Kelas XII RPL
- **SMPN 13 Jakarta** (2021 – 2024)
- **SDN CIPETE UTARA 011** (2016 – 2021)

### 8. Contact Section (`<section id="contact">`)
Bagian ini bersih dari formulir input pesan yang rumit, dan digantikan dengan **4 Kartu Kontak Langsung**:
1. **WhatsApp / Telepon:** Tombol langsung menuju `https://wa.me/6283878849317`.
2. **Alamat Email:** Tombol `mailto:adityasaputra140209@gmail.com`.
3. **Instagram:** Tautan ke profil `@dityxv._`.
4. **Alamat Domisili:** Keterangan domisili resmi di Cipete Utara, Kebayoran Baru, Jakarta Selatan.

### 9. Project Detail Modal (`#projectModal`)
Kotak dialog pop-up yang tersembunyi secara default. Saat pengguna mengklik salah satu proyek, modal ini akan muncul dengan animasi transisi yang mulus.

---

## 4. Bedah Kode `style.css` (Desain & Tata Letak)

### 1. Sistem CSS Variables (`:root`)
Variabel CSS memungkinkan kita mengubah skema warna secara terpusat:
```css
:root {
  --bg-main: #080d1a;       /* Latar utama */
  --bg-card: #0f192d;       /* Warna kartu */
  --primary-blue: #3b82f6;  /* Biru elektrik utama */
  --accent-cyan: #38bdf8;   /* Biru es terang */
  --text-primary: #f8fafc;  /* Teks putih terang */
  --text-secondary: #94a3b8;/* Teks abu-abu sekunder */
}
```
Jika di masa depan Anda ingin mengubah warna biru menjadi warna lain (misalnya hijau emerald `#10b981`), Anda hanya perlu mengganti nilai `--primary-blue` di baris ini saja.

### 2. Pola Latar Belakang (Technical Grid)
Pola grid dihasilkan murni dari CSS tanpa file gambar berat:
```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: -1;
}
```

### 3. Glassmorphism pada Navbar
Navbar menggunakan teknik transparansi dengan efek blur latar belakang:
```css
.navbar {
  background-color: rgba(8, 13, 26, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
```

### 4. Responsivitas (Media Queries `@media`)
CSS mengatur breakpoint agar layout menyesuaikan layar:
- Layar Besar (Desktop): Grid proyek 2 kolom (`repeat(2, 1fr)`).
- Layar Kecil (Mobile `< 768px`):
  - Menu navbar disembunyikan dan diubah menjadi slide drawer vertikal.
  - Tombol hamburger dimunculkan (`display: flex`).
  - Grid proyek dan kontak otomatis menjadi 1 kolom penuh agar mudah dibaca di ponsel.

---

## 5. Bedah Kode `script.js` (Interaktivitas & Logika)

JavaScript pada website ini ditulis menggunakan paradigma Vanilla JavaScript tanpa library tambahan:

### 1. Tahun Otomatis di Footer
```javascript
if (yearVal) {
  yearVal.textContent = new Date().getFullYear();
}
```
Fungsi ini otomatis mengambil tahun berjalan dari sistem peramban. Saat berganti tahun, angka hak cipta otomatis terbarui tanpa perlu diedit manual.

### 2. Menu Hamburger Mobile
```javascript
menuToggle.addEventListener('click', () => {
  const isOpen = navLinksContainer.classList.toggle('open');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
```
Fungsi `classList.toggle('open')` bertugas menambah atau menghapus class `open` pada menu saat tombol hamburger diklik.

### 3. Indikator Progres Scroll
```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }
});
```
Menghitung persentase scroll pengguna dari atas ke bawah layar dan mengaplikasikannya ke properti lebar (`style.width`) pada garis biru di atas navbar.

### 4. Scrollspy (Menu Navigasi Aktif)
Fungsi ini memeriksa posisi setiap section saat digulir. Jika bagian tertentu sedang terlihat di layar, tautan menu yang bersesuaian otomatis diberi class `.active` (garis bawah biru menyala).

### 5. IntersectionObserver (Animasi Kemunculan Halus)
```javascript
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
});
```
Menggunakan API modern browser yang jauh lebih hemat baterai dan ringan daripada pemantau scroll tradisional. Elemen yang memiliki class `.fade-in` akan mendapatkan class `.visible` begitu memasuki layar.

### 6. Modal Detail Proyek Dinamis
```javascript
function openModal(data) {
  modalHeadline.textContent = data.name;
  modalCat.textContent = data.category;
  modalText.textContent = data.desc;
  
  // Memecah teks fitur dengan simbol pipa (|)
  modalFeaturesList.innerHTML = '';
  if (data.features) {
    const items = data.features.split('|');
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.trim();
      modalFeaturesList.appendChild(li);
    });
  }
  projectModal.classList.add('open');
}
```
Fungsi ini sangat modular. Satu jendela modal dapat menampilkan informasi proyek yang berbeda-beda cukup dengan membaca data dari tombol yang ditekan pengguna.

---

## 6. Panduan Kustomisasi di Masa Depan

### A. Cara Menambah Proyek Baru
1. Buka `index.html` dan cari tag `<div class="projects-grid">`.
2. Salin salah satu blok `<article class="project-card fade-in">` dan tempelkan di bawahnya.
3. Ubah nama, deskripsi, tag, dan gambar proyek:
   ```html
   <article class="project-card fade-in">
     <div class="project-media">
       <img src="assets/images/nama-gambar-anda.jpg" alt="Preview Proyek Baru" loading="lazy" />
       <span class="project-tag">Kategori Baru</span>
     </div>
     <div class="project-content">
       <h3 class="project-name">Nama Proyek Anda</h3>
       <p class="project-desc">Deskripsi singkat proyek.</p>
       <div class="tech-chips">
         <span class="chip">HTML</span>
         <span class="chip">Laravel</span>
       </div>
       <div class="project-btns">
         <button type="button" class="btn btn-outline btn-sm btn-block btn-project"
           data-name="Nama Proyek Anda"
           data-category="Kategori Proyek"
           data-desc="Penjelasan lengkap latar belakang proyek ini."
           data-features="Fitur 1 yang dibuat|Fitur 2 yang dibuat|Fitur 3 yang dibuat"
           data-tech="PHP, MySQL, Laravel">
           <i class="fa-solid fa-circle-info"></i> Lihat Detail &amp; Fitur Proyek
         </button>
       </div>
     </div>
   </article>
   ```

### B. Cara Mengganti Foto Profil
1. Letakkan foto terbaru Anda (disarankan rasio persegi 1:1) di folder `assets/images/`, misalnya dengan nama `aditya-baru.jpg`.
2. Buka `index.html` pada bagian `<div class="profile-card">`, lalu ubah atribut `src`:
   ```html
   <img src="assets/images/aditya-baru.jpg" alt="Foto Resmi Aditya Saputra" id="profileImg" />
   ```

### C. Cara Mengubah Nomor WhatsApp atau Email
Cukup lakukan pencarian (*Find & Replace* atau `Ctrl + F`) pada `index.html`:
- Nomor WhatsApp: ganti `0838-7884-9317` dan link `https://wa.me/6283878849317`.
- Email: ganti `adityasaputra140209@gmail.com`.

---

## 7. Panduan Meng-onlinekan Website (Hosting Gratis)

Website statis ini dapat di-onlinekan secara gratis dalam hitungan menit menggunakan layanan penyedia hosting modern:

### Opsi 1: GitHub Pages (Paling Direkomendasikan untuk Siswa RPL)
1. Buat repositori baru di akun [GitHub](https://github.com) Anda (misalnya dengan nama `portofolio-aditya`).
2. Unggah seluruh file (`index.html`, `style.css`, `script.js`, dan folder `assets`).
3. Masuk ke menu **Settings** pada repositori GitHub tersebut.
4. Klik tab **Pages** di menu sebelah kiri.
5. Pada bagian **Build and deployment**, pilih branch `main` (atau `master`) dan folder `/ (root)`, lalu klik **Save**.
6. Dalam 1-2 menit, website Anda sudah aktif dan dapat diakses publik di URL:  
   `https://username-anda.github.io/portofolio-aditya/`

### Opsi 2: Vercel / Netlify
1. Buka [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
2. Hubungkan dengan akun GitHub Anda atau cukup lakukan *Drag & Drop* (tarik folder `Portofolio Aditya` langsung ke dashboard Vercel/Netlify).
3. Website akan langsung terbit dengan sertifikat SSL gratis (HTTPS).

---

*Selamat belajar dan mengembangkan portofolio Anda, Aditya! Semoga sukses dalam menempuh kelas XII RPL di SMKN 20 Jakarta dan persiapan menuju dunia industri.* 🚀

