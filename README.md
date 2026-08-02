<div align="center">
  <img src="logo.png" alt="BRM Logo" width="300" />
  <br/>
  <h1>Aplikasi Web BRM (Business Roadmap Model)</h1>
</div>

Aplikasi web ini merupakan halaman depan (landing page) untuk pendaftaran dan informasi terkait program **Certified Mentor for Mentor - Business Roadmap Model (Batch 8)**. Halaman ini dirancang secara modern dan responsif untuk menyajikan informasi program, manfaat, testimoni, penawaran harga, dan memfasilitasi calon peserta untuk mendaftar atau bertanya langsung ke tim Customer Service via WhatsApp.

### Informasi
Agar kode lebih rapi, modular, dan mudah dikelola, file telah dipisahkan menjadi 3 komponen utama:
- `index.html` — File kerangka utama yang mengatur tata letak HTML, struktur teks, dan gambar. File ini telah dibersihkan dari gaya visual dan logika script yang berlebihan.
- `style.css` — File khusus yang menangani gaya tampilan (desain, warna, spasi, efek bayangan, responsivitas).
- `script.js` — File logika JavaScript yang menangani interaksi pengguna seperti fungsi popup (modal), pembuatan pesan WhatsApp otomatis, sistem menu mobile, dan countdown timer.

### Uji Coba Langsung (Live Demo)
Anda dapat berinteraksi penuh dengan website dengan membuka file `index.html` menggunakan peramban web (browser) standar seperti Google Chrome, Safari, atau Microsoft Edge (klik kanan -> *Open with* -> pilih Browser). Anda sudah dapat menguji coba tombol-tombol pendaftaran untuk melihat efek popup dan pergerakan (scroll) navigasinya.

### Fitur Unggulan!
- **Popup Formulir Registrasi**: Tersedia tombol pendaftaran berdasarkan tiga pilihan paket (Early Bird, Special Price, Normal Price). Ketika diklik, modal pendaftaran akan otomatis terbuka meminta kelengkapan data *Nama Lengkap, Asal Kota, Profesi, Email Aktif, dan No. Telepon*.
- **Pengaturan Pesan WhatsApp Otomatis**: Data yang diisi pada formulir akan digenerate menjadi pesan yang terformat dan secara otomatis mengalihkan pengguna ke WhatsApp.
- **Popup Customer Service (Floating Button)**: Terdapat ikon WhatsApp mengambang di pojok layar yang akan memunculkan popup modal (form) untuk mengisi pertanyaan ke CS.
- **Penghitung Waktu Mundur (Countdown Timer)**: Menampilkan sisa waktu promo (misal: Early Bird) secara real-time berdasarkan waktu lokal pengguna.
- **Tampilan Responsif (Mobile-Friendly)**: Dibangun dengan CSS khusus yang akan otomatis menyesuaikan diri (layout grid, hamburger menu) ketika diakses melalui desktop, tablet, maupun smartphone (tanpa library berat eksternal).

### Format Pesan WhatsApp
Aplikasi ini menggunakan format template spesifik untuk mengirimkan data ke WhatsApp. 

**1. Template Pesan Pendaftaran (Registrasi)**
Bergantung pada paket yang dipilih, pesan akan bervariasi (Early Bird, Special Price, atau Normal Price). Berikut adalah contoh format pesan yang akan dihasilkan:
```text
Assalamu'alaikum Warahmatullahi Wabarakatuh 

Perkenalkan, saya [Nama Lengkap] ingin mendaftar Program BRM Batch 8 

Paket yang dipilih: [Pilihan Paket Beserta Detail dan Harga]

Berikut data saya:
1. Asal kota      : [Asal Kota]
2. Profesi        : [Profesi]
3. Email aktif    : [Email Aktif]
4. No. telepon    : [No. Telepon]

Mohon info selanjutnya untuk proses pendaftaran. Terima kasih 

Wassalamu'alaikum Warahmatullahi Wabarakatuh
```

**2. Template Pesan Tanya CS (Hubungi Kami)**
Jika pengguna menekan tombol floating WhatsApp, format pesannya adalah:
```text
Assalamu'alaikum Warahmatullahi Wabarakatuh 

Perkenalkan, saya [Nama Lengkap] dari [Asal Kota].

Saya tertarik untuk mengikuti Program BRM Batch 8, namun ada beberapa hal yang ingin saya tanyakan terlebih dahulu:
[Pertanyaan Anda]

Mohon informasinya ya Kak, agar saya bisa mempertimbangkan untuk bergabung. Terima kasih banyak sebelumnya 

Wassalamu'alaikum Warahmatullahi Wabarakatuh
```

### Instalasi & Kustomisasi
Aplikasi web ini menggunakan teknologi dasar Web Standard yaitu HTML, CSS, dan JavaScript (Vanilla). Oleh karena itu, aplikasi ini **tidak membutuhkan instalasi khusus** atau server bahasa pemrograman (seperti Node.js atau PHP) untuk dijalankan secara lokal.

Demi keamanan pada kode yang diserahkan ini, **nomor WhatsApp dan Tautan Form telah disamarkan** secara sementara menggunakan format `00000`.

**Cara Mengganti Nomor WhatsApp & Tautan:**
1. **Untuk Konfigurasi WhatsApp:** Buka file `script.js` melalui Code Editor (seperti VS Code, Sublime Text, atau Notepad).
2. Cari bagian bawah logika script (pada fungsi pengiriman WhatsApp) yang memuat link `https://wa.me/6200000000000...`
3. Ganti angka `6200000000000` dengan nomor WhatsApp CS/Admin tujuan Anda. Pastikan diawali dengan format kode negara (yaitu `62` untuk Indonesia, hindari menggunakan angka `0`).
4. Lakukan pencarian di `index.html` untuk mencari tautan alternatif pendaftaran `s.id/pendaftaran-event00000` dan juga nomor `0000-0000-0000`, ganti dengan tautan dan nomor asli Anda jika dirasa perlu di bagian footer.
5. **Simpan (Save)**. Muat ulang (Refresh) website di browser Anda, dan sistem perpesanan akan langsung tertuju ke nomor target baru.

**Cara Meluncurkan (Hosting Online):**
1. Anda bisa menggunakan layanan web hosting manapun. Untuk file statis seperti ini, Anda bahkan dapat meng-host-nya secara gratis di layanan seperti **GitHub Pages**, **Netlify**, atau **Vercel**.
2. Anda juga dapat menggunakan Control Panel (cPanel) yang ada di layanan Web Hosting konvensional.
3. Unggah (upload) ketiga file (`index.html`, `style.css`, `script.js`) ke folder root website (biasanya di `public_html`).
4. Situs web Anda akan siap online dan dapat diakses dari mana saja.

---

Besar harapan saya akan apresiasi dari Anda dengan bersedia mem-follow akun GitHub ini sebagai bentuk dukungan terhadap pengembangan proyek ini:

<a href="https://github.com/GialangCahyaPUPdite" target="_blank">
  <img src="https://img.shields.io/badge/FOLLOW_GITHUB-GIALANGCAHYAPUPDITE-black?style=for-the-badge&logo=github&labelColor=555555" alt="Follow GitHub">
</a>

Terima kasih!
