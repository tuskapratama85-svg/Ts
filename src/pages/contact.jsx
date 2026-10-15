import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="section">
          <div className="container">
            <h1>Kontak Kami</h1>
            <p className="lead">
              Siap memulai proyek Anda? Kirim pesan kepada kami dan tim kami
              akan segera merespons.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Alamat</strong>
                <p>Jl. Contoh Raya No. 123, Jakarta</p>
              </div>
              <div className="contact-item">
                <strong>Email</strong>
                <p>hello@nusadigital.co.id</p>
              </div>
              <div className="contact-item">
                <strong>Telepon</strong>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
