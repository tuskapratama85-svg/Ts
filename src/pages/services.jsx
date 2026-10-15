import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Website Perusahaan',
    description:
      'Website company profile responsif, cepat, dan SEO friendly yang mencitrakan profesionalisme bisnis Anda.',
  },
  {
    title: 'Desain UI/UX',
    description:
      'Antarmuka pengguna yang modern dan nyaman digunakan, dirancang berdasarkan riset pengguna dan best practice.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Strategi pemasaran digital untuk meningkatkan visibilitas merek dan mendapatkan calon pelanggan baru.',
  },
  {
    title: 'Sistem Informasi',
    description:
      'Aplikasi bisnis internal dan manajemen data yang membantu operasional perusahaan berjalan lebih efisien.',
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="section">
          <div className="container">
            <h1>Layanan Kami</h1>
            <p className="lead">
              Beragam solusi digital yang dirancang untuk mendukung
              pertumbuhan bisnis Anda.
            </p>
            <div className="services-grid">
              {services.map((s) => (
                <article className="service-card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
