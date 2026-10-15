import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="section">
          <div className="container">
            <h1>Tentang Kami</h1>
            <p className="lead">
              Nusa Digital adalah house digital yang berfokus membantu bisnis
              Indonesia hadir di era digital dengan solusi yang terukur,
              terpercaya, dan berdampak.
            </p>
            <p>
              Didirikan sejak 2019, kami telah bekerja dengan berbagai klien
              dari startup hingga perusahaan menengah untuk merealisasikan
              ide-ide mereka menjadi produk digital yang berfungsi dan memukau.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
