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

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/66218479-9b09-44af-869e-b5d294973f2b" />


### 2. Halaman Tentang Kami (/about)

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/73f90b6a-c999-49f3-9515-30a57d05f551" />


### 3. Halaman Layanan (/services)

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/1cbe9273-ff2e-4fe7-b3c7-7e65710d0831" />
.

### 4. Halaman Portofolio (/portfolio)

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/d94ee2d8-0246-4458-8be8-09035354de82" />

### 5. Halaman Kontak (/contact)

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/89a27f1c-8e63-40d0-a5a7-2787c4a4e2ce" />


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
