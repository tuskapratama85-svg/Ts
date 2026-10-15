import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'Website Perusahaan Teknologi',
    category: 'Web Development',
    client: 'PT. Teknologi Maju',
    description:
      'Website company profile responsif dengan CMS kustom, SEO optimized, dan performa muat halaman yang cepat.',
  },
  {
    id: 2,
    title: 'E-commerce Fashion',
    category: 'E-commerce',
    client: 'Toko Batik Nusantara',
    description:
      'Platform jual beli online dengan fitur keranjang belanja, pembayaran, dan manajemen inventaris yang terintegrasi.',
  },
  {
    id: 3,
    title: 'Sistem Manajemen Sekolah',
    category: 'Sistem Informasi',
    client: 'Sekolah Dasar Cerdas',
    description:
      'Sistem informasi akademik untuk manajemen siswa, nilai, jadwal pelajaran, dan laporan nilai digital.',
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="section">
          <div className="container">
            <h1>Portofolio Proyek</h1>
            <p className="lead">
              Bukti nyata dedikasi dan kualitas kerja kami dalam menyelesaikan
              berbagai tantangan dari klien kami.
            </p>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-image">
                    <span className="project-placeholder">📷</span>
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p className="project-client">Klien: {project.client}</p>
                    <p>{project.description}</p>
                  </div>
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
