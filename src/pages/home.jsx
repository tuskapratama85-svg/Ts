import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './home.css';

const services = [
  {
    title: 'Website Perusahaan',
    description:
      'Website company profile responsif, cepat, dan SEO friendly yang mencitrakan profesionalisme bisnis Anda.',
    icon: '🌐',
  },
  {
    title: 'Desain UI/UX',
    description:
      'Antarmuka pengguna yang modern dan nyaman digunakan, dirancang berdasarkan riset pengguna dan best practice.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description:
      'Strategi pemasaran digital untuk meningkatkan visibilitas merek dan mendapatkan calon pelanggan baru.',
    icon: '📈',
  },
  {
    title: 'Sistem Informasi',
    description:
      'Aplikasi bisnis internal dan manajemen data yang membantu operasional perusahaan berjalan lebih efisien.',
    icon: '💻',
  },
];

const stats = [
  { label: 'Tahun Pengalaman', value: '5+' },
  { label: 'Proyek Selesai', value: '120+' },
  { label: 'Klien Puas', value: '80+' },
];

const featuredProjects = [
  {
    title: 'Website Perusahaan Teknologi',
    category: 'Web Development',
    client: 'PT. Teknologi Maju',
  },
  {
    title: 'E-commerce Fashion',
    category: 'E-commerce',
    client: 'Toko Batik Nusantara',
  },
  {
    title: 'Sistem Manajemen Sekolah',
    category: 'Sistem Informasi',
    client: 'Sekolah Dasar Cerdas',
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Selamat Datang di Nusa Digital</span>
            <h1>Bangun Kehadiran Digital yang Memukau</h1>
            <p className="hero-description">
              Kami membantu perusahaan membangun website profesional, sistem
              informasi, dan strategi digital yang menghadirkan pertumbuhan
              nyata untuk bisnis Anda.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Lihat Layanan
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                Lihat Portofolio
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/hero.png" alt="Ilustrasi bisnis digital" />
          </div>
        </section>

        {/* Tentang Kami */}
        <section id="tentang" className="section section--light">
          <div className="container">
            <div className="section-header">
              <h2>Tentang Kami</h2>
              <p className="section-lead">
                Nusa Digital adalah house digital yang berfokus membantu
                bisnis-Indonesia hadir di era digital dengan solusi yang
                terukur, terpercaya, dan berdampak.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Didirikan sejak 2019, kami telah bekerja dengan berbagai
                  klien dari startup hingga perusahaan menengah untuk
                  merealisasikan ide-ide mereka menjadi produk digital yang
                  berfungsi dan memukau.
                </p>
                <p>
                  Dengan tim yang berpengalaman di dalam pengembangan web,
                  desain, dan pemasaran digital, kami siap menjadi mitra
                              pertumbuhan bisnis Anda.
                </p>
              </div>
              <div className="about-stats">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Layanan Kami</h2>
              <p className="section-lead">
                Beragam solusi digital yang dirancang untuk mendukung
                pertumbuhan bisnis Anda.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Selengkapnya <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portofolio */}
        <section id="portofolio" className="section section--light">
          <div className="container">
            <div className="section-header">
              <h2>Portofolio Terkini</h2>
              <p className="section-lead">
                Beberapa proyek nyata yang telah kami selesaikan untuk klien
                kami.
              </p>
            </div>
            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <span className="project-placeholder">📷</span>
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p className="project-client">Klien: {project.client}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <Link to="/portfolio" className="btn btn-outline">
                Lihat Semua Portofolio
              </Link>
            </div>
          </div>
        </section>

        {/* Kontak / CTA */}
        <section id="kontak" className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Siap memulai proyek Anda?</h2>
              <p>
                Diskusikan ide bisnis Anda dengan tim kami dan dapatkan
                solusi digital yang tepat sasaran.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Hubungi Kami Sekarang
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
