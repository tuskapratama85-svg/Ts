# Website Company Profile – Nusa Digital

## Identitas

- **Nama:** [Tuska Pratama]
- **NIM:** [2511362]
- **Kelas:** [Pilkom 3C]

## Deskripsi Singkat

Website company profile untuk perusahaan digital bernama **Nusa Digital**. Website ini berisi informasi tentang perusahaan, layanan yang ditawarkan, portofolio proyek, serta halaman kontak. Dibangun dengan React + Vite dan menggunakan React Router untuk navigasi antar halaman.

Halaman yang tersedia:
- **Beranda** – Hero, Tentang Kami, Layanan, Portofolio, dan CTA Kontak
- **Tentang Kami** – Profil perusahaan
- **Layanan** – Daftar layanan digital (Website Perusahaan, Desain UI/UX, Digital Marketing, Sistem Informasi)
- **Portofolio** – Koleksi proyek yang telah diselesaikan
- **Kontak** – Informasi kontak perusahaan

## Teknologi

- React 19
- Vite
- React Router DOM
- CSS (Custom Properties / Variabel CSS)

## Cara Menjalankan Project

Pastikan Node.js sudah terinstall di komputer Anda.

1. Clone atau buka folder project ini, lalu masuk ke direktori `Project`:

   ```bash
   cd Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan project dalam mode development:

   ```bash
   npm run dev
   ```

4. Buka browser dan kunjungi alamat yang ditampilkan oleh Vite (biasanya `http://localhost:5173`).

### Perintah lain yang tersedia

| Perintah | Keterangan |
|----------|------------|
| `npm run dev` | Menjalankan server development dengan Hot Module Replacement |
| `npm run build` | Membuat build production ke folder `dist` |
| `npm run preview` | Preview hasil build production secara lokal |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kode |

## Screenshot Setiap Halaman

Berikut adalah tampilan setiap halaman website. Silakan tambahkan screenshot asli dari hasil running project Anda pada setiap bagian di bawah ini.

### 1. Halaman Beranda (/)

![Halaman Beranda](./screenshots/home.png)

Tampilan utama yang terdiri dari hero section, tentang kami, layanan, portofolio, dan call-to-action kontak.

### 2. Halaman Tentang Kami (/about)

![Halaman Tentang Kami](./screenshots/about.png)

Halaman yang berisi profil dan visi misi perusahaan Nusa Digital.

### 3. Halaman Layanan (/services)

![Halaman Layanan](./screenshots/services.png)

Daftar layanan digital yang ditawarkan perusahaan.

### 4. Halaman Portofolio (/portfolio)

![Halaman Portofolio](./screenshots/portfolio.png)

Koleksi proyek yang telah diselesaikan untuk klien.

### 5. Halaman Kontak (/contact)

![Halaman Kontak](./screenshots/contact.png)

Halaman kontak dengan informasi alamat, email, dan telepon perusahaan.

## Struktur Folder

```
Project/
├── public/
├── src/
│   ├── assets/             # Aset statis (gambar, ikon)
│   ├── components/         # Komponen reusable (Navbar, Footer)
│   ├── pages/              # Halaman-halaman website
│   │   ├── home.jsx
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   ├── portofolio.jsx
│   │   └── contact.jsx
│   ├── App.jsx             # Konfigurasi routing
│   ├── index.css           # Gaya global dan variabel CSS
│   └── main.jsx            # Entry point React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Lisensi

Proyek ini dibuat sebagai tugas mata kuliah Pemrograman Internet.
